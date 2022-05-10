# axios源码浅读与async_await实现原理
# axios简介

> [axios文档](http://www.axios-js.com/zh-cn/docs/index.html)

- 什么是`axios`？

> `axios`是一个基于`Promise`的`HTTP`库，可以用在浏览器和`node.js`中

- 特性

    - 支持使用适配器

    - 自动转换`JSON`数据

    - 客户端支持防御`XSRF`（[CSRF/XSRF攻击和XSS攻击](https://blog.csdn.net/xiasohuai/article/details/81099602)）

    - 取消请求机制

    - 前后端数据交互的自动转换

    - 请求拦截和响应

    - 支持`Promise` API

# `axios`适配器

- 使用方法

```javascript
// 全局配置
axios.defaults.adapter = function(config) {

	// 返回一个`Promise`
	return Promise.resolve()
}
// 实例配置
instance.defaults.adapter = function() {}

// 单个请求配置适配器
axios.get('url', {
	adapter: function() {}
})
```

# `axios`拦截器

- 请求拦截器

```javascript
axios.interceptors.request.use(function fufilled(config) {}, function rejected(err) {})
```

- 返回拦截器

```javascript
axios.interceptors.response.use(function fufilled(res) {}, function rejected(err) {})
```

- 内部实现（源码）

```javascript
request(config) {
  
  // 请求链(dispatchRequest：进行请求的函数)
  var chain = [dispatchRequest, undefined]
  // 处理promise
  var promise = Promise.resolve(config)
  
  // 请求拦截器，加入列表头部（即dispatchRequest前）
  this.interceptors.request.forEach(interceptor => chain.unshift(interceptor.fufilled, interceptor.rejected))

  // 返回拦截器，加入列表尾部（即dispatchRequest后）
  this.inteceptors.response.forEach(interceptor => chain.push(interceptor.fufilled, interceptor.rejected))
  
  // 从请求链头部取出，并进行链式调用
  while (chain.length) {
    promise = promise.resolve(chain.shift(), chain.shift())
  }
  
  return promise
}
```

# `axios`请求取消

- 使用

```javascript
import axios from 'axios'

const { CancelToken } = axios

const source = CancelToken.source()

// 两秒后返回
axios.defaults.adapter = config => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: 'this-is-response'
      })
    }, 2000)
  })
}

axios.get('url-a', {
  cancelToken: source.token
})
  .then(res => console.log(res, '====================res-url-a'))
  .catch(err => {
    // 请求取消
    if (axios.isCancel(err)) {
      console.log(err, '==================url-a')
      return
    }
  })

axios.get('url-b')
  .then(res => console.log(res, '====================res-url-b'))
  .catch(err => {
    // 请求取消
    if (axios.isCancel(err)) {
      console.log(err, '===========================url-b')
    }
  })

axios.get('url-c', {
  cancelToken: source.token
})
  .then(res => console.log(res, '====================res-url-c'))
  .catch(err => {
    if (axios.isCancel(err)) {
      console.log(err, '==================================url-c')
    }
  })

// 将会取消：url-a、url-c
setTimeout(() => {
  source.cancel('this is cancel message')
}, 1000)
```

- 内部实现（源码）

```javascript
// 在dispatchRequest中进行请求取消检查
function dispatchRequest(config) {
  // 检查请求是否已取消，内部会调用CancelToken实例的throwIfRequested函数
  /**
   * function throwIfRequested() {
   *   if (this.reason) {
   *     throw this.reason
   *   }
   * }
   */
  throwIfCancellationRequested(config)
  
  // ...
  
  // 获取请求适配器
  var adapter = config.adapter || defaults.adapter
  
  return adapter(config).then(function(response) {
    // 检查请求是否已取消
    throwIfCancellationRequested(config)
    
    // ...
    
    return response
  }, function(reason) {
    // 非取消请求异常
    if (!isCancel(reason)) {
      // 检查请求是否已取消
      throwIfCancellationRequested(config)
      
      // ...
    }

    return Promise.reject(reason)
  })

}
```

- `CancelToken`内部实现（源码）

```javascript
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  
  // 为什么要使用Promise
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    
    // 这一步的作用是什么？
    resolvePromise(token.reason);
  });
}
```

- 对`CancelToken`设计的疑问

    - 为什么要使用`Promise`接收取消请求的`reason`？使用`Promise`的作用是什么？

# `async/await`实现原理





- `async`是什么？

> `async`是一个用于声明函数的关键字，其返回为一个隐含的`Promise`对象

- `await`是什么？

> `await`是一个操作符，主要用于等待一个`Promise`对象。只能在异步函数`async function`中使用

## `async/await`例子

```javascript
/**
 * 2秒后返回
 */
function waitMe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('thank you!')
    }, 2000)
  })
}

async function waitingForYou () {

  console.log('pre------------------------call')

  let res = await waitMe()
  console.log(res, '========================wait-me resolve')

  console.log('end----------------------------after')

  return res
}

async function demo() {
  console.log('pre=============================demo')

  await waitingForYou()

  console.log('end=============================demo')
}

demo()
```

- 实现原理

> 因为`async/await`在本质上是对`Promise`的运用，所以上面的例子会编译成类似下面的代码

```javascript
function waitingForYouPromise() {
  return new Promise((resolve) => {
    console.log('pre------------------------call-promise')

    waitMe().then(res => {
      console.log(res, '========================wait-me-promise resolve')
      console.log('end----------------------------after-promise')

      resolve(res)
    })
  })
}

function demoPromise() {
  return new Promise((resolve => {
    console.log('pre=============================demo-promise')

    waitingForYouPromise().then(res => {
      console.log('end=============================demo-promise')
    })
  }))
}

demoPromise()
```

# 相关链接









