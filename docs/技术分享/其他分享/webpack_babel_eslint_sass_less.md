
## webpack_babel_eslint_sass_less
一、webpack的基本概念

        **webpack** 是一个用于现代 JavaScript 应用程序的 *静态模块打包工具*。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图，然后将你项目中所需的每一个模块组合成一个或多个 *bundles*，它们均为静态资源，用于展示你的内容。

1.1webpack的安装

```text
npm install --save-dev webpack
// 如果使用 webpack 4+ 版本，还需要安装 CLI。
npm install --save-dev webpack-cli

```

1.2 配置入口和出口

```text
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

```

1.3`dependencies`和`devDependencies`的区别

- `devDependencies`：开发环境使用

- `dependencies`：生产环境使用

       webpack，gulp等打包工具，这些都是我们开发阶段使用的，代码提交线上时，不需要这些工具，所以我们将它放入devDependencies即可，但是像jquery这类插件库，是我们生产环境所使用的，所以如要放入dependencies，如果未将jquery安装到dependencies，那么项目就可能报错，无法运行，所以类似这种项目必须依赖的插件库，我们则必须打入dependencies中，

1.4webpack加载 CSS(loader)

       webpack 只能理解 JavaScript 和 JSON 文件，这是 webpack 开箱可用的自带能力。**loader** 让 webpack 能够去处理其他类型的文件，并将它们转换为有效 [模块](https://webpack.docschina.org/concepts/modules)，以供应用程序使用，以及被添加到依赖图中。

先安装style-loader 和 css-loader

```text
npm install --save-dev style-loader css-loader
	
```

         再在 `module` 配置中 安装并添加 [style-loader](https://www.webpackjs.com/loaders/style-loader) 和 [css-loader](https://www.webpackjs.com/loaders/css-loader)

```text
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }

```

          在这种情况下，以 `.css` 结尾的全部文件，都将被提供给 `style-loader` 和 `css-loader`。

          其他资源像图片，字体等也会有对应的配置

1.5插件(plugins)

        loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。[插件接口](https://www.webpackjs.com/api/plugins)功能极其强大，可以用来处理各种各样的任务。

```text
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  mode: 'production',
  entry: {
    app: './src/index.js',
    print: './src/print.js'

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};


```

二、sass和less

2.1 为什么使用sass和less这些CSS预处理器

     CSS 本身语法不够强大，导致重复编写一些代码，无法实现复用，而且在代码也不方便维护。CSS预处理器引入合理的样式复用机制，增加了规则、变量、混入、选择器、继承、内置函数等等特性。

2.1.1 sass的安装

```text
npm install -g sass
```

2.1.2 sass的基本使用

     Sass 变量使用 $ 符号

```text
/* 定义变量与值 */
$bgcolor: lightblue;
$textcolor: darkblue;
$fontsize: 18px;

/* 使用变量 */
body {
  background-color: $bgcolor;
  color: $textcolor;
  font-size: $fontsize;
}
```

    Sass 变量的作用域只能在当前的层级上有效果，如下所示 h1 的样式为它内部定义的 green，p 标签则是为 red。

```text
$myColor: red;

h1 {
  $myColor: green;   // 只在 h1 里头有用，局部作用域
  color: $myColor;
}

p {
  color: $myColor;
}

```

    当然 Sass 中我们可以使用 !global 关键词来设置变量是全局的

```text
$myColor: red;

h1 {
  $myColor: green !global;  // 全局作用域
  color: $myColor;
}

p {
  color: $myColor;
}

```

     @mixin 与 @include

     @mixin 指令允许我们定义一个可以在整个样式表中重复使用的样式。@include 指令可以将混入（mixin）引入到文档中。混入可以接收参数。我们可以向混入传递变量。

```text
@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { @include sexy-border(blue); }


```

     @extend 与 继承

```text
.button-basic  {
  border: none;

  cursor: pointer; padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}

```

条件语句

```text
.box{
    @if 1+1>1 {width:100px;}@else {
        width:200px;
    }
}

```

2.2 less的安装

```text
npm install -g less

```

2.2.1 less的使用

 less 变量使用 @ 符号

```text
@primarycolor: #FF7F50;
@color:#800080;
h1{
color: @primarycolor;
}
h3{
color: @color;
}

```

        LESS支持一些算术运算，例如加号(+)，减号( - )，乘法(*)和除法(/)，它们可以对任何数字，颜色或变量进行操作。 操作节省了大量的时间 

```text
@fontSize: 10px;
.myclass {
 font-size: @fontSize * 2;
 color:green;
}

```

Less 混合

        在LESS中，可以使用类或[id选择器](https://www.w3cschool.cn/eyv2f3/68m11qba.html)以与CSS样式相同的方式声明mixin。 它可以存储多个值，并且可以在必要时在代码中重复使用。Less 也可以使用混合参数

```text
.p1{
  color:red;
}

.p2{
   background : #DAA520;
  .p1;
}

```

```text
.border(@width; @style; @color) {
    border: @width @style @color;
}

.myheader {
    .border(2px; dashed; green);
}

```

Less 扩展

```text
h2 {
  &:extend(.style);
  font-style: italic;
}
.style {
  background: green;
}

```

     转为css为：

```text
h2 {
  font-style: italic;
}
.style,
h2 {
  background: green;
}

```

2.3 sass和less共同点

     Sass和Less都属于CSS预处理器，CSS预处理器转化成通俗易懂的话来说就是“用一种专门的编程语言，进行 Web 页面样式设计，再通过编译器转化为正常的 CSS 文件，以供项目使用”

2.4 sass和less的区别

       less和sass最主要的区别是less是通过Javascript编译，而sass是通过ruby编译的，关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$







> 主题 :技术分享

> 日期 :2022-01-18 19:00:43

> 录制文件：https://meeting.tencent.com/v2/cloud-record/share?id=5b697b3b-40dc-48a4-a9f3-56429d45e2d2&from=3

