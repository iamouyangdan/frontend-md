# 小程序-H5交互坑点

## 前置知识点

微信公众号开发：

```text
<!-- 在页面的html文件引入官方js -->
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
```

微信小程序web-view开发文档介绍：



## 项目踩坑

用uniapp开发微信公众号的时候要注意一下引入微信官方js的问题：

![](https://tcs-devops.aliyuncs.com/storage/1128f4703b76894907a4f9984e931b5e0e1a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTkyMCwiaWF0IjoxNjUxODk3MTIwLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjhmNDcwM2I3Njg5NDkwN2E0Zjk5ODRlOTMxYjVlMGUxYSJ9.3oJWygdxXjE4-J5QgWZq7kQBlj_BZ-OSOXgCo88hOh0&download=%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16276171004958.png "")

这是一个大坑，uniapp自己默认定义了一个全局的wx对象用于h5页面的导航。

因为uniapp定义的全局wx对象没有wx.miniProgram属性，会导致H5不能正常返回小程序页面，所以此时引入weixin.js需要动态引入才能不被uniapp覆写wx对象。

和小程序交互的时候，要注意一下这个坑。

