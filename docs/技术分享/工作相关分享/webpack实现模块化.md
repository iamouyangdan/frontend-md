# webpack实现模块化


[官网](https://www.webpackjs.com/concepts/)
## 1 为什么要模块化



### 1.1 问题

变量和方法不容易维护，容易污染全局作用域

加载资源的方式通过 `script`标签从上到下。

依赖的环境主观逻辑偏重，代码较多就会比较复杂。

大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃。

### 1.2 模块化优点

**提升开发效率 方便后期维护**：代码方便重用，别人开发的模块直接拿过来就可以使用，不需要重复开发法类似的功能。



### 1.3 前期的模块化实现

参考文章 ：https://segmentfault.com/a/1190000019079392

#### 1.3.1 简单模块化的实现


通过`script`引入你想要的资源，从上到下的顺序，这其中顺序是非常重要的，资源的加载先后决定你的代码是否能够跑的下去。过多的`script`标签会造成过多的请求。同时项目越大，到最后依赖会越来越复杂，并且难以维护，依赖模糊，请求过多。全局污染的可能性就会更大。那么问题来了，如何形成独立的作用域？



#### 1.3.2 立即执行函数

即 (`immediately-invoked function expression`),简称IIFE

其实是一个javaScript函数。可以在函数内部定义方法以及私有属性，相当于一个封闭的作用域。例如下面的代码：

```js
let module = (function(){
    let _private = 'myself';
    let fun = () =>{
        console.log(_private)
    }
    return {
        fun:fun
    }
})()
module.fun()//myself
module._private//undefined
```

以上代码便可以形成一个独立的作用域，一定程度上可以减少全局污染的可能性。这种写法可是现代模块化的基石。虽然能够定义方法，但是不能定义属性。



#### 1.3.3 commonjs（服务器端）

详细参考：

https://blog.csdn.net/github_38140984/article/details/83006095

https://blog.csdn.net/wsx1212123/article/details/103136519?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.edu_weight&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.edu_weight

原理 :

通过`rquire`方法来同步加载依赖的其他模块，通过`module.exports`到处需要暴露的接口。

特点 ：

模块内的代码只会运行在模块作用域内，不会污染到全局作用域

模块的可以多次引入，但只会在第一次加载的时候运行一次，后面的运行都是取缓存的值。想要让模块再次运行，必须清楚缓存。

模块的加载顺序，遵循在代码中出现的顺序。

适用：

​	nodejs服务端编程

实现 ：

`​SeaJS`

例 

```js
//导出
 module.exports = moduleA.someFunc;
//导入
const moduleA = require('./moduleA')

```





#### 1.3.4 AMD（客户端）

参考：https://www.jianshu.com/p/890c83fbcf50

原理：

```text
define（id ？，dependencies ？，factory）定义了一个单独的函数“define”。id为要定义的模块。依赖通过dependencies传入factory是一个工厂参数的对象，指定模块的导出值。
```

优点：

特别适用于浏览器环境的异步加载 ，且可以并行加载。依赖前置，提前执行。   定义模块时就能清楚的声明所要依赖的模块

缺点：

开发成本较高，模块定义方式的语义交为难理解，不是很符合通过的模块化思维方式。

实现：`requirejs`

例：

```js
// 定义模块 myModule.js
define(['dependency'], function(){
    var name = 'Byron';
    function printName(){
        console.log(name);
    }

    return {
        printName: printName
    };
});

// 加载模块
require(['myModule'], function (my){
　 my.printName();
});

```


#### 1.3.5  ES6模块

参考 ：https://blog.csdn.net/weixin_30609331/article/details/99664869

ES6的模块不是对象，import语法会被JavaScript静态分析，es6是在编译时就引入模块代码。

实现：

`export`导出模块

在模块中定义了一些变量与方法，然后将其导出





`import`导入模块

`import`命令用于导入其他模块提供的数据，格式：`import <module> from <url>`

如在模块B中导入模块A中的数据，代码如下：









导入比较简单，且名字随意修改，不受导出模块的限制

优点：

1. 静态化编译：如果能够静态化，编译的时候就能确定模块的依赖关系，以及输出和输入的变量，然后CommonJS和AMD以及CMD都只能在运行代码时才能确定这些关系。

2. 不需要特殊的ＵＭＤ模块化格式。

3. 不再需要ＵＭＤ模块的格式，将来服务器和浏览器都会支持ＥS６模块格式。目前各种工具库（webpack）其实已经做到这一点了。

4. 目前的各类全局变量都可以模块化。

## 2 webpack



### 2.1 优点

在webpack看来一切都是模块！这就是它不可不说的优点，包括你的JavaScript代码，也包括CSS和fonts以及图片等等等，只有通过合适的loaders，它们都可以被当做模块被处理。


### 2.2 安装及配置

#### 2.2.1 安装

```text
npm  init
npm i -D webpack webpack-cli
```

##### 2.2.2 创建 webpack.config.js

```js
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
      }
}
```

##### 2.2.3 修改package.json

```text
 "script": "webpack",
```

##### 2.2.4 启动

执行  `webpack -v`  或者 `npm run script`

#### 2.3 主要概念

##### 2.3.1 入口

入口起点 指示 webpack 应该使用哪个模块，来作为构建其内部*依赖图*的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

单个，多个，对象语法

```js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```

```text
  entry: {
    main: './path/to/my/entry/file.js'
  }
```



##### 2.3.2 出口

入口起点(entry point)指示 webpack 应该使用哪个模块，来作为构建其内部*依赖图*的开始。进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。

不填`filename: [name].js`默认是 `main.js`

```text
  output: {
    path: __dirname + '/dist',//绝对路径  或path.resolve(__dirname, 'rebuild')
    filename: '[name].js'
  }
```

拓展 `path.resolve(__dirname, 'rebuild')`



##### 2.3.3 模式

通过选择 `development` 或 `production` 之中的一个，来设置 `mode` 参数，你可以启用相应模式下的 webpack 内置的优化

```js
module.exports = {
  mode: 'production'
};
```




##### 2.3.4 loader

**loader** 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效[模块](https://www.webpackjs.com/concepts/modules)，然后你就可以利用 webpack 的打包能力，对它们进行处理。


#### 使用：

1 通过 `npm install` 对应loader

2 使用

```text
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
```

链式使用，顺序由后往前

```text
module: {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
  ]
},             
```

```text
{
    test: /\.css$/,
    use: [
          {
              loader: 'style-loader',
              options: {
                  insert: 'body'
            }
          },
        'css-loader'
    ]
}
```

##### 2.3.5 plugins

loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。

例：生成模板页面

```text
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
```

##### 2.3.6 定位出问题的文件source-map

详细参考：https://www.jianshu.com/p/62dc120d96d0

会生成map格式的文件，里面包含映射关系的代码

```text
devtool: 'source-map',
```


使用前

显示报错的文件是编译后的

使用后，显示报错文件是编译之前


##### 2.3.7 webpackdevserver 热更新

模块热替换(HMR - Hot Module Replacement)功能会在应用程序运行过程中替换、添加或删除[模块](https://www.webpackjs.com/concepts/modules/)，而无需重新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

- 保留在完全重新加载页面时丢失的应用程序状态。

- 只更新变更内容，以节省宝贵的开发时间。

- 调整样式更加快速，几乎相当于在浏览器调试器中更改样式。



outpath 实际的路径

publicPath 访问的路径

webpackserver  本地服务存放在内存中

proxy 处理跨域问题

### 仿写vue-cli

1. `npm init`

2. 在`package.json`加入以下代码，执行`npm i `

```text
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^3.6.0",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^4.3.0",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "vue": "^2.6.11",
    "vue-loader": "^15.9.3",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12"
  },
  "dependencies": {
    "sass-loader": "^9.0.2",
    "webpack-dev-server": "^3.11.0"
  }
```

3. 在package.json添加命令

process.env设置NODE_ENV为生产环境，打包后的文件压缩
```js
{
  "dev": "webpack --env.NODE_ENV=development",
  "build": "webpack --env.NODE_ENV=production" 
}
```