





## 一、Vue Router（路由）介绍

官网介绍：





## 二、基础使用

### 1、基础

1、定义router.js文件

![](https://tcs-devops.aliyuncs.com/storage/112e3ef0c60bc51e32406e58775f690d10ca?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmUzZWYwYzYwYmM1MWUzMjQwNmU1ODc3NWY2OTBkMTBjYSJ9.K-DC8Bo48Idaiy1qDkWKQyr4ia9xrx5mDAqTkZ_ygls&download=image.png "")

2、在页面入口的 main.js 的 Vue 对象中引入 router

![](https://tcs-devops.aliyuncs.com/storage/112e917cfdd2126b3b2e6ed6109a2e521beb?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmU5MTdjZmRkMjEyNmIzYjJlNmVkNjEwOWEyZTUyMWJlYiJ9.E8jjd7OL5FQW12TAOS8i9lUelmX5Scegf6io8ZcIA2E&download=image.png "")



### 2、带参数的动态路由

很多时候我们路由跳转的时候需要带上一些参数。例如：跳转页面详情需要带上id。通常我们可以使用，以下的形式跳转

```javascript
this.$router.push({path: '/about', query: {id: 1}});

页面地址变成以下形式
http://localhost:8082/#/about?id=1

获取id
this.$router.query.id
```

除了以上方法传参之外，还可以用带参数的动态路由

路径参数 用冒号 `:` 表示。当一个路由被匹配时，它的 *params* 的值将在每个组件中以 `this.$route.params` 的形式暴露出来。

配置路由：

```text

  {
    path: '/about/:id',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

```

页面路由&参数获取

```text
页面地址变成以下形式
http://localhost:8082/#/about/1

获取id
this.$router.params.id

```

你可以在同一个路由中设置有多个 路径参数，它们会映射到 `$route.params` 上的相应字段。例如：

| 匹配模式                           | 匹配路径                     | $route.params                          |
| ------------------------------ | ------------------------ | -------------------------------------- |
| /users/:username               | /users/eduardo           | { username: 'eduardo' }                |
| /users/:username/posts/:postId | /users/eduardo/posts/123 | { username: 'eduardo', postId: '123' } |

**捕获所有路由或 404 Not found 路由**

可以配置以下形式的路由匹配任意路径。

```text
{
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home
  }

```

**注意**：使用此方法匹配 404 页面时，需要把此路由配置写在最后，否则会匹配到任意页面，所有页面都会跳转到 404

![](https://tcs-devops.aliyuncs.com/storage/112ee27a3085bce166f5609ca6e71503e4e3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmVlMjdhMzA4NWJjZTE2NmY1NjA5Y2E2ZTcxNTAzZTRlMyJ9.IQSS5yZ3Lbxxoy9g_EZL5IUem-ZMKoo5leLitcSnXXY&download=image.png "")

路由匹配语法可以参考：





优点：

1、路径简洁美观。

2、应用灵活，可捕获多个页面。可捕获所有路由或404 Not found路由

缺点：

1、路径动态变化较难定位。

2、参数比较多、复杂时，比较难使用。使用不便且不利于 新增/减少 参数



### 3、嵌套路由

在某些页面我们需要在里面嵌套渲染一些内容。

```text
/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+

```

一般这种结构我们用组件实现，这种也可以使用嵌套路由实现。实现如下：

1、定义路由时，需要定义嵌套的子路由， children

2、使用时，需要在路由内容渲染子路由的地方加入 `<router-view></router-view>` 节点

![](https://tcs-devops.aliyuncs.com/storage/112ecbd9baf2f3d0e7f0c7391cadcefb6997?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmVjYmQ5YmFmMmYzZDBlN2YwYzczOTFjYWRjZWZiNjk5NyJ9.VHaO1owUA575mux4PAaUvSKQo8qgVE1yjTAwdVumcto&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112eede7e0a04e0bc7887a6fdb49c871eb0e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmVlZGU3ZTBhMDRlMGJjNzg4N2E2ZmRiNDljODcxZWIwZSJ9.vYKowlimE4M5X83J5RpMbF8_stC_Cb3dl16NCWaKS5Y&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112e6ba08fe57ec97be1ebc8d67ab773cf31?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmU2YmEwOGZlNTdlYzk3YmUxZWJjOGQ2N2FiNzczY2YzMSJ9.SF9u-TY3VDFmkbOKhvRF2H5bfJrUTfFP9QnkP415P0E&download=image.png "")

**注意：**除非一些非常特殊的场景，一般我们使用组件实现此功能。

与组件对比的缺点：

1、同一个页面里面无法嵌套多个不同的子路由

2、父子路由之间通讯困难，没有组件使用起来灵活

### 4、路由重定向与别名

**路由重定向：**可以在配置路由时使用`redirect` 来配置重定向的路由，例如以下配置，用户跳转到 `/home` 页面时，会被重定向到 `/` 页面

![](https://tcs-devops.aliyuncs.com/storage/112e169bcb17fe3f619ccf6aeed6a47da854?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmUxNjliY2IxN2ZlM2Y2MTljY2Y2YWVlZDZhNDdkYTg1NCJ9.A403l3INeQ6JNz9bpfUID2s7i0llOjL0IhthXDfsTfs&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112ea3b22662a84ed4cf7c665fdb47f19509?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmVhM2IyMjY2MmE4NGVkNGNmN2M2NjVmZGI0N2YxOTUwOSJ9.bwLzVW92ilRMDvxvpQ5xhsDmysnZPyhh8S_Ogedahq4&download=image.png "")



**路由别名：**可以在配置路由时使用 `alias`  来配置路由别名，例如以下配置，将 `/` 别名为 `/home`，意味着当用户访问 `/home` 时，URL 仍然是 `/home`，但会被匹配为用户正在访问 `/`。

![](https://tcs-devops.aliyuncs.com/storage/112e3a29dd605f93bf49705e51775e7c13d9?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmUzYTI5ZGQ2MDVmOTNiZjQ5NzA1ZTUxNzc1ZTdjMTNkOSJ9._Mm3nqRBrFGTUGBe4i176UvJ6WopfDm7eFCcsMSxUIg&download=image.png "")

### 5、历史记录模式

（1）Hash 模式

```text
const router = new VueRouter({
  routes,
  mode: 'hash'
})
```

它在内部传递的实际 URL 之前使用了一个哈希字符（`#`）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。不过，**它在 SEO 中确实有不好的影响**。而且页面中使用了锚点也会收到影响。

例如：以上页面配置的 /home 路由，页面地址形式是

```text
http://localhost:8082/index.html#/home
```

也就是说，服务器接收到的页面是 index.html



（2）history模式

```text
const router = new VueRouter({
  routes,
  mode: 'history'
})
```

当使用这种历史模式时，URL 会看起来很 "正常"，例如 `https://example.com/user/id`。漂亮!

由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 `https://example.com/user/id`，就会得到一个 404 错误。需要在服务端作相应的代理配置。

### 6、路由跳转

注意：在 Vue 实例中，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`。想要导航到不同的 URL，可以使用 `router.push` 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，会回到之前的 URL。当你点击 `<router-link>` 时，内部会调用这个方法，所以点击 `<router-link :to="...">` 相当于调用 `router.push(...)` ：

| 声明式                     | 编程式              |
| ----------------------- | ---------------- |
| <router-link :to="..."> | router.push(...) |

```text
// 字符串路径
router.push('/users/eduardo')

// 带有路径的对象
router.push({ path: '/users/eduardo' })

// 命名的路由，并加上参数，让路由建立 url
router.push({ name: 'user', params: { username: 'eduardo' } })

// 带查询参数，结果是 /register?plan=private
router.push({ path: '/register', query: { plan: 'private' } })

// 带 hash，结果是 /about#team
router.push({ path: '/about', hash: '#team' })

```

### 7、路由守卫

**1、前置守卫**

```text
// 前置守卫
router.beforeEach((to, from, next) => {
  console.info('from', from)
  // TODO 可以用于权限判断 根据用户权限改变目标页面
  if (to.name !== 'Login' && !isAuthenticated) {
	next({ name: 'Login' })
  } else {
	next()
  }

})

```

- `to`: 即将要进入的目标

- `from`: 当前导航正要离开的路由

**2、解析守卫**

`router.beforeResolve` : 与 `router.beforEach`类似，在所有组件内守卫和异步路由组件被解析之后，解析守卫就被正确调用。有点类似于 Vue中 created 与 mounted 的关系

**3、后置钩子**

```text
// 后置钩子
router.afterEach((to, from, failure) => {
  // TODO 可以用于一些添加一些页面提示, 或者做一些统一的页面跳转操作
  // 如: 携带某参数跳转页面后弹出对应的提示
  console.info('from', from)
})

```

**4、单独的守卫**

你可以直接在路由配置上定义 `beforeEnter` 守卫

```text
const routes = [
  {
    path: '/users/:id',
    component: UserDetails,
    beforeEnter: (to, from) => {
      // reject the navigation
      return false
    },
  },
]
```

只有进入该路由时才会触发该守卫

### 8、路由元

有时，你可能希望将任意信息附加到路由上，如过渡名称、谁可以访问路由等。这些事情可以通过接收属性对象的`meta`属性来实现，并且它可以在路由地址和导航守卫上都被访问到。定义路由的时候你可以这样配置 `meta` 字段：

![](https://tcs-devops.aliyuncs.com/storage/112e6ea2df303179bf9b19c6863749d2ce25?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmU2ZWEyZGYzMDMxNzliZjliMTljNjg2Mzc0OWQyY2UyNSJ9.zxRrwXiCCdx2SFgUJt2HDghR2J7uX8C3i3PxF5Z47dE&download=image.png "")

获取参数：

```text
this.$route.meta
```

使用：配置页面面包屑，配置页面标题，配置页面是否需要留存 等功能。

### 9、keep-alive



keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

使用 keep-alive 组件包裹路由, 则可以在路由切换时，把路由内容缓存下来，而不是销毁。

例子：



```text
<keep-alive>
  <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
```

![](https://tcs-devops.aliyuncs.com/storage/112e9cec9dde0c3eb3bb51abfc86240519f5?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmU5Y2VjOWRkZTBjM2ViM2JiNTFhYmZjODYyNDA1MTlmNSJ9.1OvpIFoD4jV5coZPuMCwgjMphfIrAWsu_Edoqtd6ATU&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112e03679dd025d04f180e8f3e2e8cd33999?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmUwMzY3OWRkMDI1ZDA0ZjE4MGU4ZjNlMmU4Y2QzMzk5OSJ9.Q1gELDZLuQzA99tZb9zObYDaTMC0bvEftoUmBFQhvJM&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/112e42d90d85f1cf2442cd2c09ca6eefcc05?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTUzMiwiaWF0IjoxNjUxODk2NzMyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmU0MmQ5MGQ4NWYxY2YyNDQyY2QyYzA5Y2E2ZWVmY2MwNSJ9.86oweIWsRNFbBYHnRBZIPxRC7K1H9pjT9r_HxwSZFKY&download=image.png "")



视频链接

主题 :前端分享

日期 :2022-02-16 19:00:33

录制文件：https://meeting.tencent.com/wework/cloud-record/share?id=c12a6550-bc63-4a47-9919-99cfe5bdd664&hide_more_btn=true&from=qywx