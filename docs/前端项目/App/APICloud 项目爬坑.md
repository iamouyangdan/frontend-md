# APICloud项目爬坑
## 一、ApiCloud 介绍

## （一）AVM跨端框架（APICloud-View-Model)

AVM 是一个跨端的高性能 JavaScript 框架，更趋近于原生的编程体验
。它提供简洁的模型来分离应用的用户界面、业务逻辑和数据模型，适合高度定制化的项目。



### 1. 虚拟 DOM（Virtual DOM）

消除终端差异，一次编写多端渲染。AVM 充分尊重系统特性，为不同终端执行差异处理，实现高效渲染。



### 2. 组件化（Composable）

高重用性(60-90%的代码重用)，可组合性，可维护性的架构设计，允许您隐藏复杂的 DOM 结构和行为，专注于应用的功能和外观，APICloud 开发者生态将持续提供丰富而炫酷的组件。



### 3. 数据绑定（Data Binding)

编写直观简洁的代码，轻松将数据源绑定到您的应用用户界面，降低逻辑复杂性和开发难度，数据变更将自动实时反馈到用户界面。



### 4. 状态管理和路由（State Management）

有效分离用户界面和数据处理，降低耦合，在多界面、不同组件中共享应用程序的状态，轻松实现项目的工程化管理。



### 5. 类 Vue 语法和兼容 React JSX

如果您是 Vue、React 的用户，将更易上手 AVM，几乎不需要学习成本。apicloud 里面有 window 和 frame 的概念，这种多页面形式正是 apicloud 的最大优势。正因如此，项目没有引入 vue-router ，毕竟跳转页面的效果很难与 window 和 frame 媲美。

## （二）**目录结构**

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image1.png)

页面目录 views 按照模块来进行划分，一个模块由多个页面构成，一个页面又由一个 window 和多个 frame 构成。最终打包出的 html 文件由 main.js+App.vue 生成。

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image2.png)

window 与 frame 是 APICloud 中比较重要的两大组件，它们之间有相似之处也有不同。

- 相同点：window 与 frame 都以窗口界面的形式展现；

- 不同点：window 占整个窗口的100%，是整个窗口，而 frame 则只占窗口的一部分。

通常 frame 都会在 window 上面打开，各 frame 之间进行组合或切换。

页面的打开方式也略微不同：

```javascript
// 打开window
api.openWin({
	name: 'login',
	url: './login.html',
	pageParam:{
		name:'test'
	}
});

// 打开frame
api.openFrame({
	name: 'cityselect_frame',
	url: 'cityselect_frame.html',
	rect: { //位置及大小参数
		x:0,
		y:50,
		w:'auto',
		h:'auto'
	},
	pageParam:{
		name:'test'
	}
});

```

**main.js**

在 apicloud 里面，经过 apiready 后才能初始化 vue。apiready 事件是在 api 对象准备完毕后产生，在每个 Window 或 Frame 的 HTML 代码中都需要监听此事件，以确定 APICloud 扩展对象已经准备完毕可以调用。只有完成 ready，才能执行打开 window 或 frame 等操作。

```javascript
import Vue from 'vue'
import App from './App.vue'

window.EventBus = new Vue()
if (window.isPc()) {
  console.info('pc')
  new Vue({
    render: h => h(App),
    data: {
      Bus: new Vue()
    }
  }).$mount('#app')
} else {
  console.info('移动端')
  window.apiready = () => {
    new Vue({
      render: h => h(App),
    }).$mount('#app')
  }
}
```

**App.vue**

```js
<template>
  <div id="app">
    <img src="../../image/loading.gif" />
  </div>
</template>

<script>
import app from '@/util/app'
export default {
  name: 'Root',
  data() {
    return {
    }
  },
  created() {
    // console.log('进入root页面')
  },
  methods: {
    // 页面跳转
    // 基于apicloud框架api的跳转
    order() {
      window.api.openWin({
      name: 'order',
      url: 'order.html'
      })
    },

    // 新框架中对跳转的二次封装
    mine() {
      app.openView('views/mine/mine', {
          param: {
            mineId: id
          }
        })
    }
  }
}
</script>
```

**打包路径**

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image3.png)

**config.xml**

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image4.png)

## （三）**窗口系统**

APICloud 集成了包括窗口系统、应用管理、网络通信、数据存储、消息事件、设备访问、UI组件、多媒体等功能，这些 api 不需要安装额外插件就能直接调用。这里以窗口系统为例，介绍一下 APICloud 到底为我们提供了什么样的能力，以及为什么在实际项目中仍然需要对其做二次封装。

多 webview 是 APICloud 的核心，这意味着 APP 像网站一样，是由若干个独立页面组成的， APP 的使用过程会依次打开多个页面，这些页面形成一个堆栈，最新打开的显示在顶层，之前打开的则排在底下，通过返回、跳转、关闭等操作可以在页面堆栈中穿梭，这些操作能力就由窗口系统提供，它至少包括以下功能：

- 打开/关闭页面

- 打开/关闭浮动窗口

- 跳转页面

- 跳转浮动窗口

- 跨页面执行脚本

- 本地存储

- 页面状态监听

- 全局事件发布/订阅

这些功能足以满足窗口管理中的所有需求，有一些功能甚至非常强大，比如跨页面执行脚本，意味着你可以在 A 页面遥控 B 页面执行指定脚本；还有的功能可以直接操作堆栈，比如将指定页面/浮动窗口置顶/置底；还有非常实用的发布订阅机制，是一种有效的穿透页面隔阂的工具。

### 1. 什么是浮动窗口？

浮动窗口产生的背景是，安卓机上只有`<body>`节点产生的滚动才具有流畅的原生弹动效果，`<div>`或其他标签产生的滚动则很生硬，那在 APP 上要做局部滚动怎么办呢，我们通过在当前 webview 上覆盖一个小点的 webview ，来实现平顺的局部滚动，非常像 web 开发中的`<iframe>`，这就是浮动窗口。浮动窗口与主窗口具有从属关系，浮动窗口不能调用关闭方法关闭自己的父窗口。而不用`<iframe>`的原因在于其兼容问题。

### 2. 窗口之间怎么传参？

主要有两种方式，第一种是打开窗口的方法本身支持传参，可以在新窗口通过指定 api 获取参数。这也是官方推荐的方法，但它最大的缺点在于需要等待原生功能就绪，即要在一个异步回调函数里才能取得参数，这会导致速度稍慢。

另一种方法是利用本地存储，在原页面存参数，打开新页面后取参数，本地存储是 web 能力，可以直接调用而不必等待原生功能就绪，所以效率更高。

理论上给 url 后面加 `?a=b&c=d` 这种方式也是可以的，但在部分安卓系统上不兼容。

### 3. 什么时候用窗口，什么时候用浮动窗口？

只要不是局部滚动页面都用窗口，有一种可能要用浮动窗口的情况是，希望在父窗口的框架下通过控制多个浮动窗口切换来更新局部内容，这个理论上可以，但需要量力而行，因为父子窗口的通信基本是靠跨页面脚本执行，交互多的话会很麻烦，而且浮动窗口的打开速度比想象的慢，开发中建议规避这种做法。



## 二、事件循环 EventLoop

## （一）项目需求

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image5.png)

在文章详情页面中，底部评论的输入栏如上图所示。这是一个假的输入框，并不能真的进行输入。当用户点击它时，它会被真正的输入框替换掉，同时输入框会自动进入聚焦状态（如下图所示，手机端会弹出软键盘）。

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image6.png)

输入框代码结构如下。当用户点击输入框时，inWriting 的值会取反，以此切换真假输入框。

```html
<div v-show="!inWriting" class="p-paperpage__comment">
      <div class="p-paperpage__comment__left" @click="toWrite">
        <img src="@/image/article/write.png" alt="" />
        <span class="comment-input">写评论...</span>
      </div>
      <div class="p-paperpage__comment__right">
        <!-- 右侧按钮，略 -->
      </div>
</div>

<form v-show="inWriting" class="p-paperpage__form">
	<input
		ref="input"
        type="text"
        placeholder="请输入内容"
	/>
	<input
		type="submit"
        value="发布"
        class="submit"
        @click.prevent="submit"
	/>
</form>
```

需求：当显示真输入框时，输入框需要自动进入聚焦状态。

```javascript
methods: {
	toWrite() {
		this.inWriting = true
		this.$refs.input.focus()
	}	
}
// 数据框不能聚焦
```

## （二）事件循环原理

js 作为主要运行在浏览器的脚本语言，主要用途之一是操作 DOM。如果同时有两个线程对同一个 dom 进行操作，这时浏览器应该听哪个线程的，如何判断优先级？为了避免这种问题，js 只能是单线程的脚本语言。而为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程阻塞，Event Loop 方案应运而生。

在浏览器中，JS 依靠**执行栈**和**任务队列**（task queue）来执行代码，整个执行过程便是事件循环过程。一个线程只有一个事件循环，但可以拥有多个任务队列。任务队列分为 macro-task（宏任务）与 micro-task（微任务）。在最新标准中，它们被分别称为 task 与 jobs。只要异步任务有了运行结果，就会进入任务队列当中。

- macro-tasks: `script`、`setTimeout`、`setInterval`、 `setImmediate`、 `I/O`、`UI render`

- micro-task: `process.nextTick`、`Promise`、`async/await` 、`MutationObserver` 

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image7.png)

所有同步任务都在主线程上执行，形成一个执行栈。当主线程中的执行栈为空时，会检查任务队列是否为空，如果为空则继续检查；如不为空，则开始执行第一个宏任务，执行完后执行该宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，再回到宏任务中进行下一轮循环。

```javascript
console.log('script start')

async function async1() {
    await async2();
    console.log("async1 end"); // 微任务
}
async function async2() {
    console.log("async2 end");
}
async1();

setTimeout(function () {
    console.log("setTimeout"); // 宏任务
}, 0);

new Promise((resolve) => {
    console.log("Promise");
    resolve();
})
    .then(function () {
    console.log("promise1"); // 微任务
})
    .then(function () {
    console.log("promise2"); // 微任务
});

console.log('script end')
```

`async` 隐式返回 Promise 作为结果的函数，即当 await 后面的函数执行完毕时，await 会产生一个微任务（Promise.then 是微任务）。但要注意这个微任务产生的时机，它是执行完 await 后，直接跳出 async 函数执行其它代码（此处就是协程的运作，A 暂停执行，控制权交给 B）。其它代码执行完毕后，再回到 async 函数执行剩下的代码，然后把 await 后面的代码注册到微任务队列当中。

分析这段代码：

- 执行第一行代码，输出 `script start`；

- 执行 `async1()` ，会调用 `async2()` ，然后输出 `async2 end`，此时将会保留 async1 函数的上下文，然后跳出 async1 函数；

- 遇到 `setTimeout`，产生一个宏任务；

- 执行 Promise，输出 `Promise`。遇到 then，产生第一个微任务；

- 继续执行代码，输出 `script end`；

- 代码逻辑执行完毕(当前宏任务执行完毕)，开始执行当前宏任务产生的微任务队列，输出`promise1`，该微任务遇到 then，产生一个新的微任务

- 执行产生的微任务，输出 `promise2`，当前微任务队列执行完毕。执行权回到 async1

- 执行 await，实际上会产生一个 promise 返回，即

```javascript
let promise_ = new Promise((resolve,reject){ resolve(undefined)})
```

执行完成，执行 await 后面的语句，输出 `async1 end`

- 最后，执行下一个宏任务，即执行 `setTimeout`，输出 `setTimeout`

理想的输出结果为：

```text
// script start => async2 end => Promise => script end => promise1 => promise2 => async1 end => setTimeout
```

但新版 chrome 浏览器中不是如上打印的，await 在优化后的 chrome 下变得更快，输出为:

```text
// script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```

但这种做法其实违反了规范，当然规范也是可以更改的，这是 V8 团队的一个 [PR](https://github.com/tc39/ecma262/pull/1250#issue-197979338) ，目前新版打印已经修改。 知乎上也有相关讨论： www.zhihu.com/question/26…



## 三、Vue 修饰符在项目中的使用

### 1. stop

`stop`修饰符的作用是阻止冒泡。

```javascript
<div @click="clickEvent(2)">
    <button @click.stop="clickEvent(1)">点击</button>
</div>

methods: {
	clickEvent(num) {
		// 不加 stop 点击按钮输出 1 2
		// 加了 stop 点击按钮输出 1
		console.log(num)
    }
}
```

### 2. capture

事件默认是由里往外`冒泡`，`capture`修饰符的作用是反过来，由外往内`捕获。`

```javascript
<div @click.capture="clickEvent(2)">
    <button @click="clickEvent(1)">点击</button>
</div>

methods: {
	clickEvent(num) {
		// 不加 capture 点击按钮输出 1 2
		// 加了 capture 点击按钮输出 2 1
		console.log(num)
	}
}
```

### 3. lazy

`lazy`修饰符作用是，改变输入框的值时value不会改变，当光标离开输入框时，`v-model`绑定的值value才会改变。

```javascript
<input type="text" v-model.lazy="value">
<div>{{value}}</div>

data() {
	return {
		value: '222'
	}
}

```

### 4. prevent

`prevent`修饰符的作用是阻止默认事件（例如 a 标签的跳转）。

```javascript
<a href="#" @click.prevent="clickEvent(1)">点我</a>

methods: {
	clickEvent(num) {
		// 不加 prevent 点击a标签 先跳转然后输出 1
		// 加了 prevent 点击a标签 不会跳转只会输出 1
		console.log(num)
	}
}
```

### 5. sync

当`父组件`传值进`子组件`，子组件想要改变这个值时，可以这么做：

```javascript
// 父组件里
<children :foo="bar" @update:foo="val => bar = val"></children>

// 子组件里
this.$emit('update:foo', newValue)
```

`sync`修饰符就是上述流程的语法糖。

```javascript
// 父组件里
<children :foo.sync="bar"></children>

// 子组件里
this.$emit('update:foo', newValue)
```



## 四、事件总线 EventBus

## （一）开发中发现的问题

**问题**：A 页面第一次点击触发 eventBus 事件跳到 B 页面时，B 页面拿不到 A 页面发送的值，点击第二次时才会有值传过来，且再点击几次触发的 eventbus 会叠加。

**解决**：把 A 页面组件中的 emit 事件写在 beforeDestory 中去，B 页面在 beforeDestory 中删除 EventBus 事件。

EventBus 又称事件总线，相当于一个全局的仓库，任何组件都可以去这个仓库里获取事件。

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image8.png)

**EventBus 图解 **

当从页面组件 A 跳转到页面组件 B 的时候，两个组件的生命周期如下：

![](/images/auto/APICloud%20%E9%A1%B9%E7%9B%AE%E7%88%AC%E5%9D%91/image9.png)

 

## （二）**手写一个简单的 EventBus**

### 1. 用一个容器存放事件

```javascript
constructor(){
	this._events = this._events || new Map() //用一个容器存放事件
}
```

### 2. 定义 on 事件

```javascript
on(event, fn) {
	const ec = this;
	if (Array.isArray(event)) {
		for (let i = 0; i < event.length; i++) {
			ec.on(event[i], fn)
		}
	} else {
		(ec._events[event] || (ec._events[event] = [])).push(fn);
	}
}

```

### 3. 定义 emit 事件

```javascript
emit(event) {
	const ec = this;
	let cbs = ec._events[event];
	if (cbs) {
		// 拿到传参
		const args = Array.from(arguments).slice(1);
		for(let i = 0; i < cbs.length; i++) {
			try {
				cbs[i].apply(ec, args);
			} catch(e) {
			new Error('error');
			}
		}
	}
	return ec;
}
```

### 4. 定义 off 事件

```javascript
off = function(event, fn) {
  const ec = this
  // 判断如果不传参数， 则移除所有事件
  if (!arguments.length) {
    ec._events = Object.create(null)
  }
  // event为数组时，遍历移除事件
  if (Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      ec.off(event[i], fn)
    }
    return ec
  }
  const cbs = ec._events[event]
  // 回调不存在 直接返回
  if (!cbs) {
    return ec
  }
  // cbs为一个或者fn不存在，ec._events[event] = null， 直接移除
  if (arguments.length === 1) {
    ec._events[event] = null
    return ec
  }
  if (!fn) {
    ec._events[event] = null
    return ec
  }
  // 否则，遍历cbs，移除cbs中为fn的回调函数
  let cb
  let i = cbs.length
  // 从后向前遍历，移除当前监听器时，不会影响未遍历过的监听器的位置。
  while (i--) {
    cb = cbs[i]
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1)
      break
    }
  }
  return ec
}

```

Demo地址：https://gitee.com/qi-77/event-bus-demo.git

**EventBus的优点:**

1      完全解耦了请求链之间的关系，避免了请求者被长持有，

2      使用简单

3     接口简单实用,集成方便

4      简化代码

**EventBus的缺点:**

1     各种 Event 的定义工作量大。

2      需要定义大量的常量或者新的实体类来区分接收者

**什么情况比较适合 EventBus**

单页面应用的最父级组件上的提示遮罩比较适合用 EventBus 触发，因为最父级不会被销毁，EventBus 不需要重复的解绑和绑定，即使绑定很多事件的处理也不会使逻辑太乱，比如最顶层的提示弹层，加载弹层等

**什么情况 EventBus 不好处理需要 VueX 的场景**

比如两个层级比较深的组件，左屏一个右屏一个，之间发生一些数据交互还需要同步，并且还要同步到不是最高父级上层组件中，没准还要进行一些数据记录，甚至交互其他更多的组件，如果用 EventBus 需要写多少个 emit 和 on ，而且绑定 emit 和 on 在非父级组件上注册完还需要销毁，否则会出现重复绑定的问题。

**Vuex和Eventbus的对比：**

[__https://www.cnblogs.com/yangzhou33/p/13855469.html__](https://www.cnblogs.com/yangzhou33/p/13855469.html)



> **相关链接**













