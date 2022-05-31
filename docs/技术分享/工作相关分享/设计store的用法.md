 # 设计store的用法
 store，即“仓库”，在前端项目里面，store作为一个容器管理着项目里面的多组件共享的状态（state）。



## 简单的状态管理

如果不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。

如果是简单的应用，一个简单的 store 模式 就足够所需了。



demo展示：

```javascript
// main.js

var storeObj = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}

new Vue({
  data: storeObj.state,
  router,
  store,
  methods: {
    setMessageAction: (val) => {
      storeObj.setMessageAction.apply(storeObj, [val])
    }
  },
  render: h => h(App)
}).$mount('#app')

// index.vue
<template>
	<p>{{ $root.$data.message }}</p>
</template>
...
methods: {
	typeIn() {
      this.$root.$options.methods.setMessageAction(this.value)
    }

}

```

应用场景：只有几个页面的小型项目

## vuex简要介绍

每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：



1、Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。



2、你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。



![](/images/auto/%E8%AE%BE%E8%AE%A1store%E7%9A%84%E7%94%A8%E6%B3%95/image1.png)



## vuex基本使用

![](/images/auto/%E8%AE%BE%E8%AE%A1store%E7%9A%84%E7%94%A8%E6%B3%95/image2.png)

```javascript
import first from '../../api/first'
export default {
  // 分模块
  namespaced: true,
  // 状态树
  state: {
    info: []
  },
  // Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
  // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
    getInfoWithHaHaHa(state) {
      return state.info.map((item) => (`哈哈哈${item}`))
    }  
  },
  // 更改store状态
  mutations: {
    setInfo(state, info) {
      state.info = info
    }
  },
  // 异步操作
  actions: {
    async handleInfo(ctx) {
      const firstInfo = await first.requestFirstInfo()
      const secordInfo = await first.requestSecordInfo()
      const thirdInfo = await first.requestThirdInfo()
      const fourthInfo = await first.requestFourthInfo()
      ctx.commit('setInfo', [firstInfo, secordInfo, thirdInfo, fourthInfo])
      return [firstInfo, secordInfo, thirdInfo, fourthInfo]
    }
  }
}
```

## 基于vuex的store基本设计：

### 文件结构

```text
    ├─api               // API 请求
    │      first.js
    │      
    ├─mock              // 模拟接口数据
    │      index.js
    │      mockData.js
    │      
    ├─store             
    │  │  index.js      // 组装模块并导出 store 的地方
    │  │  
    │  └─modules        // 分模块
    │          first.js
    │          index.js
    │          
    ├─util              // 封装的请求方法
    │      request.js
    │      
    └─views
        ├─first
        │      index.vue
        │      
        └─index
                index.vue
```

### api层

 接口请求层，请求接口的方法都抽取出来放在这个文件夹下，文件夹里面按模块来创建文件，请求接口的方法按是在哪个模块使用的就放到对应的文件里面。

```text
import request from '../util/request' // 封装的请求方法

export default {
  requestFirstInfo() {
    return request.get('/first.do').then(res => {
      console.log('res', res)
      return res.result
    })
  },
  requestSecordInfo() {
    return request.get('/secord.do').then(res => {
      console.log('res', res)
      return res.result
    })
  },
  requestThirdInfo() {
    return request.get('/third.do').then(res => {
      console.log('res', res)
      return res.result
    })
  },
  requestFourthInfo() {
    return request.get('/fourth.do').then(res => {
      console.log('res', res)
      return res.result
    })
  },
}
```



### 数据逻辑处理层

数据逻辑处理层放在store里面，在页面、组件调用store里面getters和actions的方法获取已经处理好的，可以用来渲染页面的数据。

```javascript
import first from '../../api/first' // 导入请求接口的方法
export default {
  namespaced: true,
  // 公共变量
  state: {
    info: []
  },
  // 获取公共变量，并根据业务逻辑调整返回的数据
  getters: {
    getInfoWithHaHaHa(state) {
      return state.info.map((item) => (`哈哈哈${item}`))
    }  
  },
  // 更改公共变量
  mutations: {
    setInfo(state, info) {
      state.info = info
    }
  },
  // 请求接口，并完成数据处理
  actions: {
    async handleInfo(ctx) {
      const firstInfo = await first.requestFirstInfo()
      const secordInfo = await first.requestSecordInfo()
      const thirdInfo = await first.requestThirdInfo()
      const fourthInfo = await first.requestFourthInfo()
      ctx.commit('setInfo', [firstInfo, secordInfo, thirdInfo, fourthInfo])
      return [firstInfo, secordInfo, thirdInfo, fourthInfo]
    }
  }
}
```

好处：

1、分层更清晰，开发时需要专注的点更集中。例如改接口等问题只需关注api层；改返回数据的结构只需要关注数理逻辑处理层

2、不需要在view层转换数据了、处理异步问题等。可以减少很多渲染问题。例如，可以减少使用this.$set()

3、数据处理代码的可读性提高

## 应用场景

**跨页面大量数据传参**

**应用场景**：问卷项目  [https://codeup.aliyun.com/5f009f6e6a575d7f23661045/questionnaire/frontend/survey-uniapp/tree/0.0.1](https://codeup.aliyun.com/5f009f6e6a575d7f23661045/questionnaire/frontend/survey-uniapp/tree/0.0.1)

    请求登录接口直接返回所有问卷题目内容，但渲染问卷题目的是另外一个页面

**解决办法**：把返回的题目数据提交到store，跳转到另外一个页面的时候取出



**多接口组成的数据，并且接口需要按一定的顺序请求,返回特定的数据结构**

**应用场景：**【顾问平台】里面有很多场景，各种表格表单都是如此

**解决办法**：在vuex的actions里面处理好后返回



## **demo代码**



## 补充：

### 数据缓存：

1、简单实现

```javascript
App.vue
created() {
  /**
   * 保证vuex刷新不丢失
   * 在页面加载时读取sessionStorage里的状态信息
   */
  if (sessionStorage.getItem("linkkap-consultant-store")) {
    this.$store.replaceState(
      Object.assign(
        {},
        this.$store.state,
        JSON.parse(sessionStorage.getItem("linkkap-consultant-store"))
      )
    );
  }
  /**
   * 保证vuex刷新不丢失
   * 在页面刷新时将vuex里的信息保存到sessionStorage里
   */
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem(
      "linkkap-consultant-store",
      JSON.stringify(this.$store.state)
    );
  });
},

```

2、插件使用



### 源码导读：

[原文档](https://thoughts.aliyun.com/share/61b190895cce86001ac4da09#title=设计store的用法)













