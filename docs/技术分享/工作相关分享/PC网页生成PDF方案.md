# PC网页生成PDF方案
## 生成PDF

通过发送GET请求生成PDF，请求的URL地址格式如下：

```text
http://suc.bd.yj.xinyadata.com/pdf?pageUrl={PC网页完整url地址}&name={PDF文件名}
```

demo如下：

[http://suc.bd.yj.xinyadata.com/pdf?pageUrl=http://pc.yj.xinyadata.com/suc/login.html&name=%E8%82%B2%E8%A7%81%E6%B5%8B%E8%AF%84%E9%A6%96%E9%A1%B5](http://suc.bd.yj.xinyadata.com/pdf?pageUrl=http://pc.yj.xinyadata.com/suc/login.html&name=%E8%82%B2%E8%A7%81%E6%B5%8B%E8%AF%84%E9%A6%96%E9%A1%B5)

 

## 下载PDF

![](https://tcs-devops.aliyuncs.com/storage/1126d4f060c7e396f83e7b53f6ef0c1baca0?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MzI5MzIyMywiaWF0IjoxNjUyNjg4NDIzLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMjZkNGYwNjBjN2UzOTZmODNlN2I1M2Y2ZWYwYzFiYWNhMCJ9.n_T4kRujd5JEdCm0a0BCYxUVsefjRqCIdF-0d0lzDAk&download=image.png "")

 

## 实现思路

基于nodejs + puppeteer的服务端生成PDF方案：

1. node基于eggjs框架启动本地服务器，服务器访问端口为7001。

2. node服务器通过路由增加一个PDF生成的controller接口。

3. controller接口通过启动puppeteer实例去加载自定义的页面并生成PDF。

4. 生成的PDF文件自动加上时间戳，保存在项目根目录下的temp目录下。

5. 外网可以通过访问  /resource/{pdf文件名}.pdf  访问生成的PDF文件。



## 服务器部署步骤

1. linux服务器安装nodejs，参考：[https://www.myfreax.com/how-to-install-node-js-on-centos-7/](https://www.myfreax.com/how-to-install-node-js-on-centos-7/)

2. linux服务器安装puppeteer依赖：

```text
#依赖库
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
 #字体
yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y

yum groupinstall Fonts

```

1. linux服务器安装中文字体，参考：[https://cloud.tencent.com/developer/article/1616990](https://cloud.tencent.com/developer/article/1616990)

2. 上传nodejs代码到linux服务器，并使用unzip解压

   [disease-report-server-master.zip](/frontend-md/disease-report-server-master.zip)

3. 切换到解压后的disease-report-server-master目录


```text
cd disease-report-server-master
```

4. 代码解压后先安装npm依赖，运行

```text
npm install 或 cnpm install（推荐）
```

5. 启动node服务器

```text
npm run start
```

```text
注：需要关闭服务器时，请执行下面命令：
npm run stop
```

6. nginx配置反向代理

```text
location ~* /.*(pdf)$ {
                proxy_set_header   Host            $host;
                proxy_set_header   X-Real-IP       $remote_addr;
                proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_pass http://127.0.0.1:7001;
                break;
        }
```

7. 重启nginx使配置生效

```text
/data/services/nginx/sbin/nginx -t
/data/services/nginx/sbin/nginx -s reload
```

 

 

## 总结

此方案可以满足网页生成PDF的绝大部分使用场景，理论上可以实现将**任意网页**完美转换为PDF文件，可以作为一个**通用性的PDF生成工具**。

**不足点：**

- 生成PDF需要使用puppeteer启动chrome无头浏览器，服务端配置较麻烦。

- 生成PDF视网页内容，需要等待较长时间才能响应成功。

- 生成PDF文件较多时，会占用越来越多的磁盘空间，temp文件夹需要定时清理。

- 服务会占用一定的服务器资源(待测试)，建议使用单独的服务器部署。



## 参考资料

> [__https://github.com/simonwoo/disease-report-server__](https://github.com/simonwoo/disease-report-server)

> [__https://juejin.cn/post/6844903865716834318__](https://juejin.cn/post/6844903865716834318)

