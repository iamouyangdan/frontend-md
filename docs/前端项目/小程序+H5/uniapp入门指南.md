# uniapp入门指南
## 什么是uni-app

`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。



**参考文档**



## 快速上手

`uni-app`支持通过 HBuilderX可视化界面、`vue-cli`命令行 两种方式快速创建项目。

## HBuilderX

[官方IDE下载地址](https://www.dcloud.io/hbuilderx.html)





## vue-cli命令行

全局安装vue-cli

```shell
npm install -g @vue/cli
```

[创建uni-app](https://uniapp.dcloud.io/quickstart-cli?id=%e5%88%9b%e5%bb%bauni-app)

```shell
vue create -p dcloudio/uni-preset-vue demo-uni
```

此时，会提示选择项目模板，初次体验建议选择 `hello uni-app` 项目模板。我们选择 `默认模板`如下所示：

![](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png "")



## 如何学习

**uni-app官方推荐**

1. 建议第一步，看完[uni-app官网](https://uniapp.dcloud.io/)的首页介绍。

1. 建议第二步，通过[快速上手](https://uniapp.dcloud.io/quickstart)，亲身体验下uni-app。

1. 建议第三步，看完[《uni-app官方教程》](https://ke.qq.com/course/3169971)，出品人：DCloud，课时：共3节。



**参考文档**



## 开发规范

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)

- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)

- 接口能力（JS API）靠近微信小程序规范，但需将前缀 `wx` 替换为 `uni`，详见[uni-app接口规范](https://uniapp.dcloud.io/api/README)

- 数据绑定及事件处理同 `Vue.js` 规范，同时补充了App及页面的生命周期

- 为兼容多端运行，建议使用flex布局进行开发



**参考文档**



## [目录结构](https://uniapp.dcloud.io/frame?id=%e7%9b%ae%e5%bd%95%e7%bb%93%e6%9e%84)



## 核心知识

## 生命周期



## 页面样式与布局



## 路由（页面跳转）

**官方推荐**

`uni-app` 有两种页面路由跳转方式：使用[navigator](https://uniapp.dcloud.io/component/navigator)组件跳转、调用[API](https://uniapp.dcloud.io/api/router)跳转。



**参考文档**



## 条件编译



## 跨端开发注意点

![](/images/auto/uniapp%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97/image1.png)



## App端开发



## 官方组件



## 官方跨端API



