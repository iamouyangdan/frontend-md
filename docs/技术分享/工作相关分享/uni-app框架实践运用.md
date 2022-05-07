框架代码：[__https://codeup.aliyun.com/5f009f6e6a575d7f23661045/frontend/uni-app-template/tree/master__](https://codeup.aliyun.com/5f009f6e6a575d7f23661045/frontend/uni-app-template/tree/master)

zip：



**一、项目结构**

```none
|---- dist                             build或者开发环境非h5环境下运行，编译后的各平台代码存放目录
|---- docs                             [可选]文档存放目录，组件文档存放位置
|      |---- .vuepress                  vuepress配置文件
|      |---- pages                      文档文件存放目录
|      └---- README.md                  文档首页
|---- mock                             [可选]接口请求mock数据
|---- public                           内有一个 index.html，是h5页面模板，用于项目生成 html 代码
|---- src
|      |---- assets                     存放css、less、scss、fonts等资源
|      |       |---- fonts
|      |       └---- styles
|      |---- components                 组件目录，存放各种可复用组件
|      |---- pages                      业务页面文件存放的目录，最好按模块分好文件夹
|      |---- static                     存放引用静态资源(如：图片、音频、视频等)的目录，注意：静态资源只能存放于此
|      |       |---- app-plus           按环境区分资源，app环境
|      |       |---- h5                 按环境区分资源，h5环境
|      |       |---- mp-weixin          按环境区分资源，微信小程序环境
|      |       └---- platforms          按环境区分资源，全环境
|      |---- store                      (vuex)store存放位置
|      |---- sub-packages               分包管理
|      |       └---- sub-packages1      子包1
|      |       └---- sub-packages2      子包2
|      |---- utils                      公共包存放目录，如共用的 ajax.js
|      |       └---- request.js         公共ajax请求方法，可在方法内加入ajax请求传入的公共参数，或者错误信息的全局处理等
|      |---- APP.vue                    应用配置，用来配置App全局样式以及监听
|      |---- main.js                    Vue初始化入口文件
|      |---- manifest.json              配置应用名称、appid、logo、版本等打包信息，或h5端开发环境的proxy代理
|      |---- pages.json                 配置页面路由、导航条、选项卡等页面类信息
|      └---- uni.scss                   公共样式, 可以直接在页面的scss中使用变量无需引入该文件
|---- .env                             公用的环境配置，在所有的环境中被载入(存放一些全局配置, 例如: 超时时间, 重试次数等)
|---- .env.h5-prod                     h5生产环境配置
|---- .env.h5-dev                      h5开发环境配置
|---- .env.weixin                      小程序开发环境配置
|---- .env.weixin-prod                 小程序生产环境配置
|---- .env.weixin-dev                  小程序开发环境配置
|---- .eslintrc.js                     eslint 配置文件
|---- .gitignore                       git 忽略列表
|---- package.json                     项目依赖 npm 包，启动指令
|---- postcss.config.js                在编译时，编译器会自动转换单位配置,如:转换rpx单位为px
|---- README.md                        项目文档以及说明
|---- tsconfig.js
|---- vue.config.js                    vue-cli4配置文件

```

![](https://tcs-devops.aliyuncs.com/storage/112g35f92fa4cda387c8a304b2af2a14d7ca?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmczNWY5MmZhNGNkYTM4N2M4YTMwNGIyYWYyYTE0ZDdjYSJ9.VPGxUelYuwA0NVBs1yxjhgqY85UKfp9dyL1rSwGhKOk&download=image.png "")



## **1、公共样式、公共字体**

目录：

公共样式：src/assets/styles

公共字体：src/assets/fonts

可以在 src/App.vue 文件全局引入。

![](https://tcs-devops.aliyuncs.com/storage/112ga174563f9c15dce6bf18e9cf515380c0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmdhMTc0NTYzZjljMTVkY2U2YmYxOGU5Y2Y1MTUzODBjMCJ9.J0PWCyv-hXzHJamOW_iO_aBETfbxI3temQ0pZoQLMvY&download=image.png "")

 

## **2、组件(components)**

**目录**：src/components

**命名规范**：组件命名符合easycom规范，无需引入即可使用。命名需要符合easycom规范，组件可能是由多个文件组成，但是对外暴露的文件必须是与文件目录同名。地址：[https://uniapp.dcloud.io/collocation/pages?id=easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)

![](https://tcs-devops.aliyuncs.com/storage/112g99bb01b46a2ba99306d5c5eac8106045?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmc5OWJiMDFiNDZhMmJhOTkzMDZkNWM1ZWFjODEwNjA0NSJ9.SZeBVg8l7TmCtQmFbKSh-M-jnSz6uElhJDN2KMe4iT8&download=image.png "")

**easycom配置**：组件可以在 src/page.json 中配置easycom规范，可以统一配置组件的前缀

![](https://tcs-devops.aliyuncs.com/storage/112gf7071109e209dca1d581bd56b562fa79?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmdmNzA3MTEwOWUyMDlkY2ExZDU4MWJkNTZiNTYyZmE3OSJ9.PX_j9j350u9OqusOFo3JsVnlvCYhoLwrJrwYnpBk3Z0&download=image.png "")

**注意**：在components下的组件加上‘l-’前缀进行引用，检索时去掉‘l-’再进行搜索

### **1、组件管理**

- 文档和组件不应该分离

- 组件应该提供使用的案例，且案例需要覆盖组件的大部分使用场景

- 组件的规划应该从产品设计阶段开始

### **2、组件分类**

       一般我们封装组件时，都是需要满足“高内聚、低耦合”，但是在实际的运用场景中，往往组件的耦合度降不下来，到最后组件就会变得很难用，或者局限性很大，只有某个场景可以使用。这些情况可以通过将组件分类来避免这些问题。

        组件的分类不应该与业务耦合，应该脱离业务，按照组件的公共，组件的职责进行分类。可以根据不同类别的组件，封装不同的代码。例如：

**1、基础组件**

此类组件在所有的项目中都可以使用到，哪怕在一个毫无相关的项目中一般也能使用到。例如：悬浮按钮组件（fab）、tab切换组件（tab）、button组件等。

一般此类组件各大ui框架（如：uview）已经实现，没有特殊情况可以直接使用无需修改。这样可以在UI库更新时跟随UI库更新。如需封装此类组件， 尽量减少组件内部固定的值，可以设置变量（变量包含默认值）支持用户传入修改。

![](https://tcs-devops.aliyuncs.com/storage/112gd748d49d669f255a9595a58c3afc679b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmdkNzQ4ZDQ5ZDY2OWYyNTVhOTU5NWE1OGMzYWZjNjc5YiJ9.x67aXDDjy3gZ0zT1ZWt46rYNKROt7ucsYlBKcOVpLaw&download=image.png "")



**2、业务组件（UI）**

       此类组件包含固定的一些组件样式，可能在特定的场景下才可以使用，可能跨项目后没有特定的场景就无法使用了。例如：菜单组件。

       此类组件封装时也尽量降低耦合，但是因为场景较为固定所以可以固定，例如可以固定数据格式。此组件应该只包含UI和交互部分，不包含接口。

**3、统一的业务组件（包含接口请求）**

        此类组件需要在特定的场景下才可运用。因为包含接口请求，耦合度较高，很难移植（移植需要考虑后端接口是否相同），例如：添加备注组件、选择地址组件等。此类组件可以由第二类组件封装而来。

        此类组件主要考虑使用场景的满足。（组件可以放在项目的主包中）

**4、页面级别组件**

此类组件是一个完整的可以调用的页面，因为页面耦合度较高，所以一般也很难移植。建议先封装一个只包含UI的业务组件，然后再基于那个组件进行开发。例如：审批流程、选择人员。此类组件可以由第二类组件封装而来。

### 3、**文档编写**：

文档编写在 docs 中编写

1、创建组件所属模块目录，存放在docs/pages中，格式为markdown。例如：表单组件(form)，页面类型的组件则创建它隶属的模块

2、配置菜单。打开docs/.vuepress/config.js 在sidebar中配置菜单

![](https://tcs-devops.aliyuncs.com/storage/112gc49b82c44ccdca9b317777bf062f9aae?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmdjNDliODJjNDRjY2RjYTliMzE3Nzc3YmYwNjJmOWFhZSJ9.-fbcCGrqOmfFfWJvtw5Vxw3xF1AaWlahsuDUxRmCKr0&download=image.png "")

3、编写组件文档markdown文件

4、运行查看效果。使用指令`npm run docs:dev`运行文档

![](https://tcs-devops.aliyuncs.com/storage/112g6a8470a1324672fb3b487b23c9ee7739?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmc2YTg0NzBhMTMyNDY3MmZiM2I0ODdiMjNjOWVlNzczOSJ9.e2OFEUxJPRhQIqb0cVb8qZtbCOesuF2F2wGD2Jp1Txs&download=image.png "")

## **3、页面包与子包**

目录：

页面：src/pages

页面目录结构:

每一个功能模块新建一个目录

```text
|---- src
|      |---- pages                                                      页面管理
|      |       └---- login                                                                                        功能模块1
|      |       |       └---- login.vue           功能模块1-页面
|      |       |       └---- register.vue        功能模块1-页面
|      |       └---- others                      子包2

```

子包：src/sub-packages

子包的结构：

```text
|---- src
|      |---- sub-packages                              分包管理
|      |       └---- sub-packages1                     子包1
|      |       |       └---- page                      子包页面
|      |       |       └---- components                子包组件
|      |       └---- sub-packages2                     子包2

```



## **4、静态资源（static）**

目录：src/static

存放应用引用的本地静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此

## **5、数据仓库（store）**

### **（1）store**

目录：src/store

使用：

1、数据统一在数据仓库发起请求，数据由store统一管理

2、同一个模块/页面使用同一个store文件

3、全局公用的数据存放在common.js中



例如：

场景：有一个商品列表页面，每个商品都有一个详情页面，详情页面可以编辑，编辑后需要刷新商品列表。

应用：这两个页面公用一个store，product.js。商品列表数据存放在此 store 中，product.vue（商品列表）页面用结构的方法使用 productList， 在商品详情页编辑商品后，需要更新 productList 时只需调用store中的商品列表方法即可

![](https://tcs-devops.aliyuncs.com/storage/112g14ecd8f5732e0438490f9163de1cbdb5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmcxNGVjZDhmNTczMmUwNDM4NDkwZjkxNjNkZTFjYmRiNSJ9.05m1tmYAG7rvqWmCV0v10_JG1al5n4f5wkn5NxxSGKE&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112g86401569e7be7b49ab1f5f0e4ddd630b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmc4NjQwMTU2OWU3YmU3YjQ5YWIxZjVmMGU0ZGRkNjMwYiJ9.UjdDKKiWlX0JXi5cR0LhPfI9kh1PAK45Rv8hsjPYkjA&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112g639c305c3e8d41a5ef1e461d98a2eaec?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmc2MzljMzA1YzNlOGQ0MWE1ZWYxZTQ2MWQ5OGEyZWFlYyJ9.kYC9Txw2w1iJRf6gLlQwfasVxkBkDR73n7is6e_b2xU&download=image.png "")



### **（2）页面跳转传参**

有时页面跳转时需要传参

**页面跳转**：统一使用 this.navigateTo 方法与 uni.navigateTo 方法的用法相同，新增了参数解析。可以使用以下方法跳转传参

```text
// uni.navigateTo
uni.navigateTo({
	url: '/page/detail?id=1'
})
// this.navigateTo
this.navigate({
	url: '/page/detail',
	data: {
		id: 1
	}
})
this.navigate({
	url: '/page/detail?id=1'
})

```

**页面返回：**

```text
// 返回上一页
this.navigateBack()
```

**（3）页面通讯**

一般的数据/事件通讯，用以上的Store，以及路由跳转传参即可实现，若实在需要页面之间的页面通讯，也可以用以下方法实现

```text
// A页面事件中添加监听事件
uni.$on('login', this.handleCommunication); // 子页面通信父页面

// B页面事件中通信A页面
uni.$emit('login', {data: '数据'});

// 注意，销毁监听
onUnload() { // 销毁函数
  uni.$off('login'); // 移除监听事件
}
```

## **6、公共方法模块（utils）**

### **（1）权限管理**

目录：src/utils/auth.js

由于uni-app小程序端不支持自定义指令。所以使用mixin的方式来实现权限控制。使用mixin 全局混入一个 auth 方法。判断是否拥有该权限。

使用：在需要控制的按钮加入 v-if="auth('权限')"，以达到控制按钮显隐的效果



### **（2）过滤器**

目录：src/utils/filter.js

使用: 无需引入, 直接在页面数据绑定处使用，如：<view>{{ createTime | date }}</view>

定义方法: 

```text
Vue.filter('过滤器名称', function(data) {
	// TODO 处理
})

```

![](https://tcs-devops.aliyuncs.com/storage/112g2359764cfcb07fa9461d6cdb83f420a6?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTMyNywiaWF0IjoxNjUxODk2NTI3LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmcyMzU5NzY0Y2ZjYjA3ZmE5NDYxZDZjZGI4M2Y0MjBhNiJ9.OgDwgPNMOrw1Mz2HKoPQ2LSLvi7iJ8f94T0awBwPlTU&download=image.png "")



### **（3）数据请求**

目录：src/utils/request.js

功能： 包含请求重试, 请求取消, 请求/响应拦截, 限制同一时间请求个数等功能

配置：可以在 .env 文件中配置请求重试次数, 超时时间, 同一时间请求个数

使用：

```text
// 引入
import { get, post, cancel } from '@/utils/request'
// 使用
get({
	url: '接口地址', // 接口地址(必填)
	data: {}, // 请求参数[可选]
	header: {}, // 请求头[可选]
	timeout: 3000, // 超时时间,不传则使用默认
	dataType: 'json', // 数据类型, 默认是 json
	responseType: 'text', // 设置响应的数据类型, 默认是text, 合法值：text、arraybuffer
    cancel: true, // 是否取消上一次未完成请求，默认值true(即同一个接口重复请求会取消上一次的请求)
	isNotJoinDomain: false // 是否不需要拼接域名, 默认值false。 true:不拼接域名, false:拼接域名
}) // 返回值是promise对象

// post方法与get用法相同

cancel('取消的接口地址')

```



### **（4）公用方法**

目录：src/utils/utils.js

使用: 

1、已在全局引入，在页面无需引入，用"this.$utils.方法名"调用方法

2、例如使用时间格式化方法时: this.$utils.formatDate(new Date(), 'yyyy-MM-dd')

目前有以下方法：

1、getParamsStr：参数转换函数, 把 {a: 1, b: 2} 对象形式的参数, 转换为 a=1&b=2 的字符串

2、formatDate：时间/日期格式化,把时间戳、时间字符串、Date对象转换为字符串

3、debounce：防抖函数



## **7、其他**

剩下的页面都是全局的入口以及配置。

APP.vue应用配置，用来配置App全局样式以及监听

main.jsVue初始化入口文件

manifest.json配置应用名称、appid、logo、版本等打包信息，或h5端开发环境的proxy代理

pages.json配置页面路由、导航条、选项卡等页面类信息

uni.scss公共样式，可以直接在页面的scss中使用变量无需引入该文件



录制: 

主题 :uni-app框架实践运用

日期 :2022-04-07 19:03:37

录制文件：https://meeting.tencent.com/wework/cloud-record/share?id=7905156e-2868-4a47-83d5-62e6771271bf&hide_more_btn=true&from=qywx

