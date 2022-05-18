# qiankun微前端接入

https://qiankun.umijs.org/zh/guide



改造步骤：

1. 修改package.json的name字段。
2. 修改vue.config.js，增加configureWebpack: 

```js
const { name } = require('../package.json')
module.exports = {  
	...,  
	configureWebpack: {
    	output: {
      		// 把子应用打包成 umd 库格式
      		library: `${name}-[name]`,
      		libraryTarget: 'umd',
      		jsonpFunction: `webpackJsonp_${name}`
    	}
  	},
}
```

3. 修改main.js

   ```js
   import '../../public-path'
   import Vue from 'vue'
   import routes from '@/router'
   import App from './index.vue'
   import { store as commonStore } from 'common'
   import store from '@/store'
   import VueRouter from 'vue-router'

   import '@/assets/styles/basic.scss'
   import '@/assets/styles/global.scss'
   import '@/assets/styles/atom.scss'

   import directive from '@/utils/directive'
   import Vtip from 'vtip'
   import 'vtip/lib/index.min.css'

   import Components from '@/components'

   import LUi from '@linkkap/l-ui'
   import '@linkkap/l-ui/lib/l-ui.css'

   // vue操作cookies: https://www.jianshu.com/p/60c13168cc8f
   import VueCookies from 'vue-cookies'
   Vue.use(VueCookies)

   Vue.use(LUi)

   directive.init(Vue)

   Vue.config.productionTip = false
   Vue.use(Components)
   Vue.use(Vtip.directive)

   Vue.use({
     install(Vue) {
       Vue.prototype.$toPage = function(val, obj) {
         if (typeof val === 'object') {
           obj = val
           val = this.$router.path
         }
         setTimeout(() => {
           this.$router.push({
             path: val,
             query: obj || {}
           })
         }, 0)
       }
     }
   })

   Vue.config.productionTip = false
   let instance = null

   function render(props = {}) {
     const { container, routerBase } = props
     console.info('routerBase', routerBase, container)
     const router = new VueRouter({
       // base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
       mode: 'history',
       routes
     })

     instance = new Vue({
       router,
       store,
       render: (h) => h(App)
     }).$mount(container ? container.querySelector('#app') : '#app')
   }

   if (!window.__POWERED_BY_QIANKUN__) {
     // 这里是子应用独立运行的环境，实现子应用的登录逻辑

     // 独立运行时，也注册一个名为global的store module
     commonStore.globalRegister(store)
     // 模拟登录后，存储用户信息到global module
     const userInfo = { name: '我是独立运行时岗位价值评估' } // 假设登录后取到的用户信息
     store.commit('global/setGlobalState', { user: userInfo })

     render()
   }

   export async function bootstrap() {
     console.info('[vue] vue app bootstraped')
   }

   export async function mount(props) {
     console.info('[vue] props from main framework', props)

     commonStore.globalRegister(store, props)

     render(props)
   }

   export async function unmount() {
     instance.$destroy()
     instance.$el.innerHTML = ''
     instance = null
   }
   ```



**public-path.js**

```js
/* eslint-disable */
(function() {
  if (window.__POWERED_BY_QIANKUN__) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line
      __webpack_public_path__ = `//localhost:${process.env.VUE_APP_PORT}${process.env.BASE_URL}`
      return
    }
    console.info('__INJECTED_PUBLIC_PATH_BY_QIANKUN__', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)
    // eslint-disable-next-line
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
    // __webpack_public_path__ = `${process.env.BASE_URL}/`
  }
})()

```

https://blog.csdn.net/cyyy1223/article/details/111995277



# 待完善内容

1. 微前端框架接入。
2. 搜索框交互优化，建议搜索框支持回车键搜索，清空搜索框内容时触发搜索。
3. 下拉选择框支持可搜索。
4. 加载表格数据过程中，增加局部加载动画。
5. 公用表格自动收集过滤内容。

