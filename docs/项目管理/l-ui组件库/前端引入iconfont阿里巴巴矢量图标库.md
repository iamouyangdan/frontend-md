# 前端引入iconfont阿里巴巴矢量图标库
### ⚠️注意：更新iconfont库后，注意修改项目代码、数据库中使用到的icon名字和导入的链接！！！

# 1、登录iconfont阿里巴巴矢量图标库

[https://www.iconfont.cn/](https://www.iconfont.cn/)

# 2、联系项目管理员，加入项目图标库

## （1）发送账号昵称给管理员

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1671788/1625632113700-650a59ab-cefc-404c-9c04-eb6a086d80e2.png "image.png")

## （2）管理员加入昵称对应的账号

# 3、获取项目库代码，添加icon

## （1）获取项目库代码

加入项目库后，可以在资源管理--我的项目--我参与的项目查看链接

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1671788/1625637968589-55fe30f4-546b-4966-b4a2-6094de555784.png?x-oss-process=image%2Fresize%2Cw_1500 "image.png")



## （2）添加icon

**注意：自定义icon颜色，需要对图标进行批量去色操作，然后再重新生成项目链接**

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1671788/1625645689196-aed1380d-acee-43cd-93d9-d73107612a2b.png "image.png")



# 4、前端项目引入

在前端项目main.js中，引入下方代码，其中，`scriptUrl`为上方获取到的icon font项目链接

```text
Vue['#uiConfig'] = {
  scriptUrl: '//at.alicdn.com/t/font_2611588_9y0c8tvaj7.js'
}
Vue.use(LinkkapUi)
```







