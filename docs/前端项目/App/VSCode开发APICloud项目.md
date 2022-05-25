# VSCode开发APICloud项目
可以使用官方apicloud studio、sublime编辑器进行开发，本文推荐使用微软的VS Code来开D:\NYY\apicloud-app\package.json发，需要安装apicloud插件和EsLint插件，下载地址[__VS Code download__](https://code.visualstudio.com/) ,下面介绍安装方法。

 

## 安装apicloud插件

 双击文件安装，打开应用，点击左侧导航搜索apicloud插件

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image1.png)

搜索截图



![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image2.png)

 

## 开启Wifi调试

VS Code打开代码widget，在vscode控制台按下Alt + w 启动wifi调试，监听的端口可以在vscode控制台输出中查看，如下图所示。

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image3.png)

Vscode 输出控制台查看监听的IP、端口

可能会遇到的问题：

1）执行alt+w时若报错如下：

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image4.png)

解决方法：卸载apicloud，重新下载，然后重启试试

## 安装AppLoader

打开手机浏览器，用扫一扫扫描下面的二维码，下载并安装商户助手开发版的AppLoader（Android版本）

。

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image5.png)

> 下载链接：

> [__http://download.app.neiyiyun.net/f48ff2440d0a5317228c7fddcf7ba64d.apk__](http://download.app.neiyiyun.net/f48ff2440d0a5317228c7fddcf7ba64d.apk)



问题1：扫码若显示过期，登录APIcloud官网，网址：[https://www.apicloud.com/console](https://www.apicloud.com/console)

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image6.png)

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image7.png)

问题2：手机若提示如下图

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image8.png)

1）首先确认是否连接同一个网络

2）关掉电脑的防火墙试试，再解决不了，自行百度~

## 同步代码到AppLoader

手机连接公司wifi，手机和电脑要连接同一个局域网。打开要调试的App，点击右侧悬浮球，接上监听的IP、端口，**使用Alt + i **，增量更新代码（第一次启动APP是全量更新），当悬浮球编程绿色的时候，恭喜你，入坑了！现在可以开始APP的开发，修改代码后Alt + i真机查看效果，所有输出都会打印到控制台。

![](/images/auto/VSCode%E5%BC%80%E5%8F%91APICloud%E9%A1%B9%E7%9B%AE/image9.png)

App输入监听的IP、端口



