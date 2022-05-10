# APICloud调试简易指南

## 一、环境准备

## （1）PC 端

- 安装 node（[__https://nodejs.org/en/download/__](https://nodejs.org/en/download/。)）和 git；

- 安装 vscode（[__https://code.visualstudio.com/__](https://code.visualstudio.com/)），并在 vscode 中安装 ApiCloud 插件；

- 安装 svn 工具。window 系统推荐 TortoiseSVN（小乌龟），Mac 系统推荐 SnailSVNLite。

## （2）移动端

- 安装 AppLoader：点击 [__APICloud SDK下载__](https://docs.apicloud.com/Download/download)，进入下载页（如下图所示）。接着点击 AppLoader 选项，根据手机设备类型选择相应安装包进行下载。

![](https://tcs-devops.aliyuncs.com/storage/11274233ffbca6f4bb9987ee4e12e077dae1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjc0MjMzZmZiY2E2ZjRiYjk5ODdlZTRlMTJlMDc3ZGFlMSJ9.ktjooDIw-NB-B8wP8Yu1OEXuHCoOAkM-i0sXQoh6_-g&download=image.png "")

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

![](https://tcs-devops.aliyuncs.com/storage/11270b82b4d1c70f688a397d73c2f438eb9d?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjcwYjgyYjRkMWM3MGY2ODhhMzk3ZDczYzJmNDM4ZWI5ZCJ9.j7Kf_cXX5uSeM3_bi-GubUPlgtV5cYi3prjz94KIxe0&download=image.png "")

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

![](https://tcs-devops.aliyuncs.com/storage/11278b0c95f35cd41caade812670397faa35?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjc4YjBjOTVmMzVjZDQxY2FhZGU4MTI2NzAzOTdmYWEzNSJ9.JuoYt9__kp5uV7tkOkhb9Rc6ysXMIS7Yxcedx4JXsvo&download=image.png "")

1. 进入 widget 目录后，右键点击 **SVN 检出**；

![](https://tcs-devops.aliyuncs.com/storage/11270621603b98bc56d7d7348f92fdf0c467?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjcwNjIxNjAzYjk4YmM1NmQ3ZDczNDhmOTJmZGYwYzQ2NyJ9.ZlKOdziYQkXcdhv9g2rUfl1eWf93C9Hn_GFz1CXCFCc&download=image.png "")

1. 配置检出选项；

版本库 URL：svn://svn3.apicloud.com/A6043706562526/链股商学院

![](https://tcs-devops.aliyuncs.com/storage/1127d06d3d93fe21f522ecd83727898ea542?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjdkMDZkM2Q5M2ZlMjFmNTIyZWNkODM3Mjc4OThlYTU0MiJ9.n5S0KXtiaD4D4sNLnRV5LJ7kC2xwJuUtRezKWGT7wMg&download=image.png "")

1. 进行认证。

在配置完成后点击确定，会弹出认证窗口，需要填写公司在 ApiCloud 的用户名和密码（上文已给出）。

![](https://tcs-devops.aliyuncs.com/storage/112738ae5b15b8229e66f1f57eeec9ddb40e?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjczOGFlNWIxNWI4MjI5ZTY2ZjFmNTdlZWVjOWRkYjQwZSJ9.V8Ll9bqWEdvHzGtb1W0AC3XuGQg1BavKdTGby4GrS8U&download=image.png "")

如果用户名或密码错误，弹窗会重新弹出。如果发生该情况，请把密码改成 ApiCloud 网站上的分支密码。

![](https://tcs-devops.aliyuncs.com/storage/1127e4c08184887ee05b5e6f8d694cd63342?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjdlNGMwODE4NDg4N2VlMDViNWU2ZjhkNjk0Y2Q2MzM0MiJ9.5qkKxheKNHhpTb_V-9SK9sJAW6jxZT7aT1BhG6as3kg&download=%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_16256404192630.png "")

检出成功后 widget 目录下会生成如下这些文件。

![](https://tcs-devops.aliyuncs.com/storage/1127eebe9fb0a79702914c7a3cd9869993e0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjdlZWJlOWZiMGE3OTcwMjkxNGM3YTNjZDk4Njk5OTNlMCJ9.MoZKAY_5T-YhP2rVCU9HMaMoXIIn3zlfC2Fc56pzL-o&download=image.png "")



## （3）真机调试项目

ApiCloud 支持多项目多平台运行，借此项目能够生成手机端网页、App、微信小程序。开发时应注意让代码适配各平台。

移动端可以通过 AppLoader 来进行真机调试，这样做的前提是 PC 端和移动端处于同一局域网内，或者已用 usb 线将两者进行连接。有如下两种方法可以进行真机调试。

### ① 设置路径

在 VSCode 中打开 ApiCloud 插件的拓展设置，将子目录设置为 widget 目录所在的路径。

![](https://tcs-devops.aliyuncs.com/storage/111wae7586aab61aec82c87b1e94e24e0159?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXdhZTc1ODZhYWI2MWFlYzgyYzg3YjFlOTRlMjRlMDE1OSJ9.EU5_il2m9qL_ln5inL7wi7HbopcbCQO651sVSB6cAZs&download=image.png "")

![](https://tcs-devops.aliyuncs.com/storage/111w4ba22735dfbd71000de43077cfd32f00?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXc0YmEyMjczNWRmYmQ3MTAwMGRlNDMwNzdjZmQzMmYwMCJ9.zcmFWnKU1S7hm34Dj5mc1XQDXlIR7JrR73L_752n9H0&download=image.png "")

### ② 打包项目

打开 package.json，查看打包命令，并运行。

![](https://tcs-devops.aliyuncs.com/storage/11288f549561974340679540becc722dbafc?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjg4ZjU0OTU2MTk3NDM0MDY3OTU0MGJlY2M3MjJkYmFmYyJ9.wF1-30VI5AM_2Qg8CC8Zwcs0EmLmjLQ_6CbjS4uUfF0&download=image.png "")

```text
npm run build
```

打包完毕后，widget 目录下生成了相应的一些文件夹和文件。

![](https://tcs-devops.aliyuncs.com/storage/111xaa736c11dd23df78a6d91a8c6f592404?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXhhYTczNmMxMWRkMjNkZjc4YTZkOTFhOGM2ZjU5MjQwNCJ9._2lyJ9zKlRpBrnlhiqMQrGRx6xPZ_XXt-13D9W5qcwo&download=image.png "")

### ③ 启动 Wi-Fi 服务和更新

在 VSCode 中右键点击启动 wifi 服务（快捷键：Alt + w），控制台随即输出 ip 和端口信息。

![](https://tcs-devops.aliyuncs.com/storage/111xc674a9bf2e7d90afc286c85968f7d614?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXhjNjc0YTliZjJlN2Q5MGFmYzI4NmM4NTk2OGY3ZDYxNCJ9.EReZTuxEX5i9JieOAJoID4-1Pm3LXuwcfyPyFgOBwOU&download=image.png "")

手机打开 AppLoader，点击右侧灰色圆形按钮，填写上面的 ip 和端口后，点击连接。当按钮由灰变绿时，说明连接成功。

![](https://tcs-devops.aliyuncs.com/storage/111xed4b85cf4754a077b1b490af19d3f1c0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXhlZDRiODVjZjQ3NTRhMDc3YjFiNDkwYWYxOWQzZjFjMCJ9.fhCtvVKWjUnLJuHTBMUkXKNiDxhq9Uxs6EjSbHiMPEQ&download=image.png "")

第一次启动项目时，需右键点击 wifi 全量更新，项目就会在手机上编译运行了。

![](https://tcs-devops.aliyuncs.com/storage/111x5a8d7be19dd22220b3a1f4bb49be9bd1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMXg1YThkN2JlMTlkZDIyMjIwYjNhMWY0YmI0OWJlOWJkMSJ9.Dc1banxK3PhWk3kRIn8yHDxcijXe7gN2w3G82VrIOYo&download=image.png "")

### ④ 实时更新

修改代码后，如果想实时查看更新效果，则右键点击 wifi 增量更新（快捷键：Alt + i ）。

## 三、调试常见问题



① 启动 wifi 调试时，若报错如下：

![](https://tcs-devops.aliyuncs.com/storage/1128beaf190cbb4c6a1dea5692e4e41b1a04?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjhiZWFmMTkwY2JiNGM2YTFkZWE1NjkyZTRlNDFiMWEwNCJ9.152VRENZvI0TcFckxrU4sw6qPbtK5XHFYw7drCubQEE&download=image.png "")

这边建议卸载 apicloud 后重新下载，然后重启。

② AppLoader 进行连接时，若出现以下错误：

![](https://tcs-devops.aliyuncs.com/storage/1128e237808b6f3ee286ef193dc9809b75a1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMjI5NiwiaWF0IjoxNjUxODk3NDk2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjhlMjM3ODA4YjZmM2VlMjg2ZWYxOTNkYzk4MDliNzVhMSJ9.VvguwtI-XAL63pqVpRp4M3IxN7-UElCX_Gz0RKPFcN8&download=image.png "")

首先确认移动端和 pc 端是否连接同一个网络；如果已连接同一网段，则尝试关闭电脑的防火墙再重试；如果还不行，自行百度。





