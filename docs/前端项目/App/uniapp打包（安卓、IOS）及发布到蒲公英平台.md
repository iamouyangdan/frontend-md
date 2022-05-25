# uniapp打包并发布到蒲公英平台
## 一、打包

1、在dcloud注册账号：

[__https://account.dcloud.net.cn/oauth2?reg=2&redirect_uri=http://dev.dcloud.net.cn/auth/dcloud/callback&client_id=DCLOUD_DEV&response_type=code__](https://account.dcloud.net.cn/oauth2?reg=2&redirect_uri=http://dev.dcloud.net.cn/auth/dcloud/callback&client_id=DCLOUD_DEV&response_type=code)

登录之后要验证邮箱。

2、创建应用、生成一个APP id

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image1.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image2.png)

3、导入项目

可以本地目录导入或者git 克隆下来。

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image3.png)

git 克隆要在HBuilderX安装git插件：

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image4.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image5.png)

HBuilderX编辑器安装了Git，还需要安装TortoiseGit依赖。TortoiseGit下载完成后，安装是一直next就可！下载链接：[__https://tortoisegit.org/download/__](https://tortoisegit.org/download/)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image6.png)



项目代码克隆：git clone git@codeup.aliyun.com:5f009f6e6a575d7f23661045/feijin/luganghang-user-app.git

4、打包 在HBuilderX的菜单-发行-原生APP云打包

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image7.png)

HBuilderX还没登录，则需要登录dcloud的账号：

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image8.png)

## 打包安卓端

选选择Android（apk包），打包配置设置选红色箭头的

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image9.png)

## 打包IOS端

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image10.png)

选择IOS的选ios(ipa包)。



- 可能会遇到的问题：此应用DCloud APPID非当前账号所有。解决方法是在manifest.json文件重新获取APPID。

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image11.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image12.png)

- 遇到权限的相关问题，需要在开发中心进行实名认证，实名认证需要人工审核，等待时间为一个工作日内。

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image13.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image14.png)

- 遇到打包校验直接选择继续打包

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image15.png)

5、等待打包

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image16.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image17.png)

6、下载打包完成的apk文件，然后发布到蒲公英平台。

下载地址: https://ide.dcloud.net.cn/build/download/1ba5c2e0-c642-11ec-a8ba-d51f97271f5d 

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image18.png)

## 二、发布

1、在蒲公英平台注册一个账号

[__https://www.pgyer.com/__](https://www.pgyer.com/)

2、登录蒲公英平台进行发布

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image19.png)

3、然后上传ipa文件或者apk文件，这文件是在BuilderX打包完成时生成的。

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image20.png)

发布成功之后可以进行下载安装。

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image21.png)

![](/images/auto/uniapp%E6%89%93%E5%8C%85%EF%BC%88%E5%AE%89%E5%8D%93%E3%80%81IOS%EF%BC%89%E5%8F%8A%E5%8F%91%E5%B8%83%E5%88%B0%E8%92%B2%E5%85%AC%E8%8B%B1%E5%B9%B3%E5%8F%B0/image22.png)







