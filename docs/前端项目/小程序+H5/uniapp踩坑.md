# uniapp踩坑
## 小程序-H5交互坑点

## 前置知识点

微信公众号开发：

```text
<!-- 在页面的html文件引入官方js -->
<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.3.2.js"></script>
```

微信小程序web-view开发文档介绍：



## 项目踩坑

用uniapp开发微信公众号的时候要注意一下引入微信官方js的问题：

![](/images/auto/uniapp%E8%B8%A9%E5%9D%91/image1.png)

这是一个大坑，uniapp自己默认定义了一个全局的wx对象用于h5页面的导航。

因为uniapp定义的全局wx对象没有wx.miniProgram属性，会导致H5不能正常返回小程序页面，所以此时引入weixin.js需要动态引入才能不被uniapp覆写wx对象。

和小程序交互的时候，要注意一下这个坑。

