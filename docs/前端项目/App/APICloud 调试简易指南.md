# APICloud调试简易指南

## 一、环境准备

## （1）PC 端

- 安装 node（[__https://nodejs.org/en/download/__](https://nodejs.org/en/download/。)）和 git；

- 安装 vscode（[__https://code.visualstudio.com/__](https://code.visualstudio.com/)），并在 vscode 中安装 ApiCloud 插件；

- 安装 svn 工具。window 系统推荐 TortoiseSVN（小乌龟），Mac 系统推荐 SnailSVNLite。

## （2）移动端

- 安装 AppLoader：点击 [__APICloud SDK下载__](https://docs.apicloud.com/Download/download)，进入下载页（如下图所示）。接着点击 AppLoader 选项，根据手机设备类型选择相应安装包进行下载。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image1.png)

## （3）网站

登录 ApiCloud 网站。

- 地址：apicloud.com

- 账号：apicloud@linkkap.com或者 13187279800 

- 密码：linkkap2020



## 二、运行项目

## （1）将项目克隆到本地

① 将项目拷贝到本地。


`git clone https://codeup.aliyun.com/5f009f6e6a575d7f23661045/cms/pages/cms-app.git`



如果返回403错误，说明 git 账号与云效代码库的不一致。这时进入项目页面，点击**克隆/下载**按钮，查看自己的克隆账号和密码。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image2.png)

然后返回到命令行，输入以下语句（username 和 password 分别为自己的账号名和密码）即可成功克隆。

`git clone https://username:password@codeup.aliyun.com/5f009f6e6a575d7f23661045/cms/pages/cms-app.git`

② 安装依赖

```text
npm i
cnpm i
```

## （2）使用 SVN 检出（非必需）

SVN 全名 Subversion，即**版本控制系统**，是一个跨平台的软件，支持大多数常见的操作系统。作为一个开源的版本控制系统，SVN 管理着随时间改变的数据，可以理解为 SVN 类似一个文件库，这里存放着各种文件，只不过这些文件都被打上了标签，并且每一次的变动都会被记录，这样别人就可以获取到最新文件或者回滚到特定版本的文件。（Git 也是版本控制系统。但**SVN是集中式，Git是分布式。）**

1. 在项目目录下创建 dist/widget 路径；

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image3.png)

1. 进入 widget 目录后，右键点击 **SVN 检出**；

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image4.png)

1. 配置检出选项；

版本库 URL：svn://svn3.apicloud.com/A6043706562526/链股商学院

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image5.png)

1. 进行认证。

在配置完成后点击确定，会弹出认证窗口，需要填写公司在 ApiCloud 的用户名和密码（上文已给出）。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image6.png)

如果用户名或密码错误，弹窗会重新弹出。如果发生该情况，请把密码改成 ApiCloud 网站上的分支密码。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image7.png)

检出成功后 widget 目录下会生成如下这些文件。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image8.png)



## （3）真机调试项目

ApiCloud 支持多项目多平台运行，借此项目能够生成手机端网页、App、微信小程序。开发时应注意让代码适配各平台。

移动端可以通过 AppLoader 来进行真机调试，这样做的前提是 PC 端和移动端处于同一局域网内，或者已用 usb 线将两者进行连接。有如下两种方法可以进行真机调试。

### ① 设置路径

在 VSCode 中打开 ApiCloud 插件的拓展设置，将子目录设置为 widget 目录所在的路径。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image9.png)

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image10.png)

### ② 打包项目

打开 package.json，查看打包命令，并运行。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image11.png)

```text
npm run build
```

打包完毕后，widget 目录下生成了相应的一些文件夹和文件。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image12.png)

### ③ 启动 Wi-Fi 服务和更新

在 VSCode 中右键点击启动 wifi 服务（快捷键：Alt + w），控制台随即输出 ip 和端口信息。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image13.png)

手机打开 AppLoader，点击右侧灰色圆形按钮，填写上面的 ip 和端口后，点击连接。当按钮由灰变绿时，说明连接成功。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image14.png)

第一次启动项目时，需右键点击 wifi 全量更新，项目就会在手机上编译运行了。

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image15.png)

### ④ 实时更新

修改代码后，如果想实时查看更新效果，则右键点击 wifi 增量更新（快捷键：Alt + i ）。

## 三、调试常见问题



① 启动 wifi 调试时，若报错如下：

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image16.png)

这边建议卸载 apicloud 后重新下载，然后重启。

② AppLoader 进行连接时，若出现以下错误：

![](/images/auto/APICloud%20%E8%B0%83%E8%AF%95%E7%AE%80%E6%98%93%E6%8C%87%E5%8D%97/image17.png)

首先确认移动端和 pc 端是否连接同一个网络；如果已连接同一网段，则尝试关闭电脑的防火墙再重试；如果还不行，自行百度。





