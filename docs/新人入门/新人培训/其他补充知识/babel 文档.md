# babel文档
## 1. 原理

Babel 是一个 JavaScript 编译器，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。下面列出的是 Babel 能为你做的事情：

- 语法转换

- 通过 Polyfill 方式在目标环境中添加缺失的特性

- 源码转换（codemods）

![](/images/auto/babel%E6%96%87%E6%A1%A3/image1.png)

要了解 Babel 的工作原理，那首先需要了解抽象语法树，因为 Babel 插件就是作用于抽象语法树：首先我们编写的代码在编译阶段被解析成抽象语法树（AST），然后经过一系列的遍历和转换，然后再将转换后的抽象语法树生成为常规的 js 代码。

AST 的 json 形式可表示如下：

```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "add"
      },
      "expression": false,
      "generator": false,
      "params": [
        {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "x"
        },
        {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "y"
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 40,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 25,
            "end": 38,
            "argument": {
              "type": "BinaryExpression",
              "start": 32,
              "end": 37,
              "left": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "name": "x"
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "y"
              }
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 52,
      "expression": {
        "type": "CallExpression",
        "start": 42,
        "end": 51,
        "callee": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "name": "add"
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 46,
            "end": 47,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 49,
            "end": 50,
            "value": 2,
            "raw": "2"
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}
```

抽象语法树中不同层级有着相似的结构，比如：

```javascript
{
    "type": "Program",
    "start": 0,
    "end": 52,
    "body": [...]
}
```

像这样的结构叫做**节点（Node）**。一个AST是由多个或单个这样的节点组成，节点内部可以有多个这样的子节点，构成一颗语法树，这样就可以描述用于静态分析的程序语法。

Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。

- **解析**：将代码解析成抽象语法树（AST），每个 js 引擎（比如Chrome浏览器中的V8引擎）都有自己的 AST 解析器，而 Babel 是通过 [Babylon](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabylon "https://github.com/babel/babylon") 实现的。在解析过程中有两个阶段：**词法分析**和**语法分析**，词法分析阶段把字符串形式的代码转换为**令牌**（tokens）流，令牌类似于 AST 中节点；而语法分析阶段则会把一个令牌流转换成 AST 的形式，同时这个阶段会把令牌中的信息转换成 AST 的表述结构。

- **转换**：在这个阶段，Babel 接受得到 AST 并通过 babel-traverse 对其进行深度优先遍历，在此过程中对节点进行添加、更新及移除操作。这部分也是 Babel 插件介入工作的部分。

- **生成**：将经过转换的 AST 通过 babel-generator 再转换成 js 代码，过程就是深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

babel 的插件有两种，一种是**语法插件**，这类插件是在解析阶段辅助解析器（Babylon）工作；另一类插件是**转译插件**，这类插件是在转换阶段参与进行代码的转译工作，这也是我们使用 babel 最常见也最本质的需求。

## 2. 集成（@babel/cli）

Babel 自带了一个内置的 CLI 命令行工具，可通过命令行编译文件。

## 安装

虽然可以将 Babel CLI 安装到全局环境中，但更好的方式是将 Babel CLI 安装到每个项目的本地目录下。这主要有两个原因：

1. 同一台计算机上的不同项目可能依赖不同版本的 Babel，并且你可以针对项目单独升级 Babel 的版本。

1. 对你所用的环境没有隐性依赖， 这能让你的项目更易于迁移和设置。

我们可以通过运行以下命令在本地安装 Babel CLI ：

```shell
npm install --save-dev @babel/core @babel/cli
```

安装`@babel/cli`的同时还需要安装`@babel/core`, 它是Babel的核心模块。

安装完成后， `package.json` 文件应当包括如下内容：

```diff
{
  "devDependencies": {
+   "@babel/cli": "^7.0.0",
+   "@babel/core": "^7.0.0"
  }
}
```

## 使用

### 用法一

```shell
$ ./node_modules/.bin/babel src --out-dir lib
```

这段语句的意思是：使用我们设置的**解析方式**来解析`src`目录下的所有`JS`文件, 并将转换后的每个文件都输出到`lib`目录下。由于现在没有通过 plugins 和 presets 设置任何的解析方式，所以你在执行了这段语句之后，能看到项目中多了一个`lib`目录, 但里面的`JS`代码和`src`中的是一样的。另外，如果是`npm@5.2.0`附带的`npm`包运行器的话, 就可以用`npx babel`来代替`./node_modules/.bin/babel`:

```shell
$ npx babel src --out-dir lib
```

### **用法二**

给`package.json`中配置一段脚本命令:

```diff
{
    "name": "babel-basic",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
+       "build": "babel src -d lib"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
+       "@babel/cli": "^7.8.4",
+       "@babel/core": "^7.8.4"
    }
}
```

现在运行`npm run build`效果也是一样的, `-d`是`--out-dir`的缩写...(我们使用上面的 `--out-dir` 选项。你可以通过使用 `--help` 运行它来查看 cli 工具接受的其余选项。但对我们来说最重要的是 `--plugins` 和 `--presets`。)

## 3. 插件 plugins

插件的本质就是一个 js 程序，指示着 Babel 如何对代码进行转换。因此除了通过 npm 引入，还可以编写自己的插件来应用你想要的任何代码转换。

```shell
$ cnpm i --save-dev @babel/plugin-transform-arrow-functions
$ npx babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

`@babel/plugin-transform-arrow-functions`插件是将箭头函数转换为ES5兼容的函数。

```javascript
const fn = () => 1; // 箭头函数, 返回值为1
console.log(fn());
```

现在编译之后被转换为ES5的代码。

```javascript
const fn = function () {
  return 1;
}; // 箭头函数, 返回值为1

console.log(fn());
```

## 4. 预设 presets

如果想要转换 ES6+ 的其它代码为 ES5, 我们可以使用 presets 来代替预先设定的一组插件, 而不用逐一添加我们想要的所有插件。这里可以理解为一个 preset 就是一组插件的集合。跟 plugins 一样, 我们可以创建自己的 preset。

我们可以引入 @babel/preset-env。

```shell
cnpm i --save-dev @babel/preset-env
```

这个预设包含支持现代 JavaScript(ES6+) 的所有插件，所以也就是说你安装使用了`env`preset 之后, 就可以看到其它ES6+语法的转换了。现在让我们来用用ES7中的**求幂运算符**和**函数参数支持尾部逗号**这两个功能吧。

**src/index.js**:

```javascript
const fn = () => 1; // ES6箭头函数, 返回值为1
let num = 3 ** 2; // ES7求幂运算符
let foo = function(a, b, c, ) { // ES7参数支持尾部逗号
    console.log('a:', a)
    console.log('b:', b)
    console.log('c:', c)
}
foo(1, 3, 4)
console.log(fn());
console.log(num);
```

然后在命令行里使用这个`preset`:

```shell
npx babel src --out-dir lib --presets=@babel/preset-env
```

现在打开`lib/src`看看:

```javascript
"use strict";

var fn = function fn() {
  return 1;
}; // 箭头函数, 返回值为1

var num = Math.pow(3, 2);

var foo = function foo(a, b, c) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
console.log(fn());
console.log(num);
```

求幂运算符被转换为成`Math.pow()`。函数参数的最后一个逗号也被去掉了。

## 5. 配置文件

上面都是终端命令来进行转换，在实际使用上，我们更加偏向于**配置文件。**

在项目的根目录下创建一个`babel.config.js`文件:

```javascript
const presets = [
	[
    "@babel/env",
    {
      targets: {
        edge: "17",
        chrome: "64",
        firefox: "60",
        safari: "11.1"
      }
    }
  ]	
]

module.exports = { presets };
```

这个配置的作用是：

- 使用了 env preset 这个预设

- env preset 只会为目标浏览器中没有的功能加载转换插件

现在要使用这个配置就很简单了, 直接用 **package.json **配置的命令行语句。

```javascript
{
	"scripts": {
		"build": "babel src -d lib"
	}
}
```

执行`npm run build`就可以了。这个命令行语句看起来并没有修改，那是因为它默认会去寻找跟根目录下的一个名为`babel.config.js`的文件(或者`babelrc.js`也可以，这个在之后的`使用babel的几种方式`中会说到)，所以其实就相当于以下这个配置：

```javascript
{
	"scripts": {
		"build": "babel src -d lib --config-file ./babel.config.js"
	}
}
```

因此如果你的Babel配置文件是`babel.config.js`的话, 这两种效果是一样的。(`--config-file`指令就类似于webpack中的`--config`, 用于指定以哪个配置文件构建)

这里我重点要说一下**只会为目标浏览器中没有的功能加载转换插件**这句话的意思.

例如我这里配置的其中一项是`edge: "17"`, 那就表示它转换之后的代码支持到`edge17`.所以你会发现, 如果你用了我上面`babel.config.js`的配置之后生成的`lib`文件夹下的代码好像并没有发生什么改变, 也就是它并没有被转换成`ES5`的代码:

**src/index.js**:

```javascript
const fn = () => 1; // ES6箭头函数, 返回值为1
let num = 3 ** 2; // ES7求幂运算符
let foo = function(a, b, c, ) { // ES7参数支持尾部逗号
    console.log('a:', a)
    console.log('b:', b)
    console.log('c:', c)
}
foo(1, 3, 4)
console.log(fn());
console.log(num);
```

使用`babel.config.js`配置之后构建的`lib/index.js`:

```javascript
"use strict";

const fn = () => 1; // ES6箭头函数, 返回值为1


let num = 3 ** 2; // ES7求幂运算符

let foo = function foo(a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
console.log(fn());
console.log(num);
```

箭头函数依旧是箭头函数, 求幂运算符依旧是求幂运算符.

**这是因为在Edge17浏览器中支持ES7的这些功能, 所以它就没有必要将其转换了, 它只会为目标浏览器中没有的功能加载转换插件!**

如果将`edge17`改成`edge10`？

**babel.config.js**:

```diff
const presets = [
    [
        "@babel/env",
        {
            targets: {
-               edge: "17",
+               edge: "10",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
        },
    ],
];

module.exports = { presets };
```

保存重新运行`npm run build`, 你就会发现`lib/index.js`现在有所改变了:

```javascript
"use strict";

var fn = function fn() {
  return 1;
}; // ES6箭头函数, 返回值为1


var num = Math.pow(3, 2); // ES7求幂运算符

var foo = function foo(a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
console.log(fn());
console.log(num);
```

## 6. polyfill

Plugins是提供的插件，例如箭头函数转普通函数`@babel/plugin-transform-arrow-functions`。Presets 是一组 Plugins 的集合。**而 Polyfill 是对执行环境或者其它功能的一个补充.**

就像现在如果想在`edge10`浏览器中使用 ES7 中的方法`includes()`，但这个版本的浏览器环境不支持使用这个方法，所以如果强行使用并不能达到预期的效果。而`polyfill`的作用正是如此，知道你的环境不允许，那就帮你引用这个环境，也就是说此时编译后的代码就会变成这样:

```javascript
// 原来的代码
var hasTwo = [1, 2, 3].includes(2);

// 加了polyfill之后的代码
require("core-js/modules/es7.array.includes");
require("core-js/modules/es6.string.includes");
var hasTwo = [1, 2, 3].includes(2);
```

而`@babel/polyfill`是一个重要的 polyfill，它能用来模拟完成ES6+环境:

- 可以使用像`Promise`或者`WeakMap`这样的新内置函数

- 可以使用像`Array.from`或者`Object.assign`这样的静态方法

- 可以使用像`Array.prototype.includes`这样的实例方法

- 还有`generator`函数

为了实现这一点，Polyfill 增加了**全局范围**以及像 String 这样的原生原型。

而`@babel/polyfill`模块包括了`core-js`和自定义`regenerator runtime`对于**库/工具**来说，如果你不需要像`Array.prototype.includes`这样的实例方法，可以使用`transform runtime`插件，而不是使用污染全局的`@babel/polyfill`。对于**应用程序，**我们建议安装使用`@babel/polyfill`

```shell
cnpm i --save @babel/polyfill
```

注意： `--save` 选项而不是 `--save-dev`，因为这是一个需要在源代码之前运行的 polyfill。但是由于我们使用的是`env`preset，这里个配置中有一个叫做 `"useBuiltIns"`的选项如果将这个选择设置为`"usage"`，就只包括你需要的 polyfill。此时的`babel.config.js`调整为:

```javascript
const presets = [
	[
		"@babel/env",
		{
			targets: {
				edge: "17",
				chrome: "64",
				firefox: "67",
				safari: '11.1'
			},
+			useBuiltIns: "usage"
		}
	]
]

module.exports = { presets }
```

安装配置了`@babel/polyfill`, Babel将检查你的所有代码, 然后查找目标环境中缺少的功能, 并引入仅包含所需的polyfill。(如果我们没有将 `env` preset 的 `"useBuiltIns"` 选项的设置为 `"usage"` ，就必须在其他代码之前 require *一次完整*的 polyfill。)

使用`Edge17`中没有的`Promise.prototype.finally`:

**src/index.js**:

```javascript
const fn = () => 1; // ES6箭头函数, 返回值为1
let num = 3 ** 2; // ES7求幂运算符
let hasTwo = [1, 2, 3].includes(2)
let foo = function(a, b, c, ) { // ES7参数支持尾部逗号
    console.log('a:', a)
    console.log('b:', b)
    console.log('c:', c)
}
foo(1, 3, 4)
Promise.resolve().finally();
console.log(fn());
console.log(num);
console.log(hasTwo);
```

现在执行`npm run build`之后生成的`lib/index.js`变成了:

```javascript
"use strict";

require("core-js/modules/es7.promise.finally");

const fn = () => 1; // ES6箭头函数, 返回值为1


let num = 3 ** 2; // ES7求幂运算符

let hasTwo = [1, 2, 3].includes(2);

let foo = function foo(a, b, c) {
  // ES7参数支持尾部逗号
  console.log('a:', a);
  console.log('b:', b);
  console.log('c:', c);
};

foo(1, 3, 4);
Promise.resolve().finally();
console.log(fn());
console.log(num);
console.log(hasTwo);
```

`@babel/polyfill`帮我们引入了`Edge17` 环境中没有的`promise.finally()`。



## 相关资料

[什么是babel](https://babel.docschina.org/docs/en/)

[深入Babel，这一篇就够了](https://juejin.cn/post/6844903746804137991)





