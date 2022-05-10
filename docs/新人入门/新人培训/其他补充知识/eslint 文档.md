# eslint文档
## 一、简介

ESLint 属于一种 QA 工具，是一个 ECMAScript/JavaScript 语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

ESLint 旨在完全可配置，它的目标是提供一个插件化的 javascript 代码检测工具。它没有特定的编码风格，可以独立配置。这意味着您可以关闭每个规则，只能使用基本语法验证，或者混合并匹配捆绑的规则和自定义规则，使 ESLint 完美的适用于您的项目。

多人参与的项目中,经常会多人交叉编辑多个文件。这就导致了各个文件中充斥着各种编码风格。最常见的就有:使用空格还是Tab一次缩进是2个空格还是4个空格还是8个空格字符串使用单引号还是双引号JavaScript一行结尾到底要不要加分号关键字前后要不要加空格等等等等不同风格混杂在一起极大的影响代码的可读性与质量。不同风格混杂在一起极大的影响代码的可读性与质量。因此在多人项目中维护一致的代码风格就很重要了。

JavaScript我们知道这个语言比较灵活，除了基本的语法错误能在程序一启动的时候被检测到之外，很多隐含的错误都是在运行的时候才突然地蹦出来。除非你的程序有着100%的测试覆盖率，否则说不定哪天就会因为一个xxx is undefined而导致程序崩溃，而为了避免这样的错误可能你只需要在提交代码的时候用工具静态分析一下，仅此而已。ESLint是一个插件化的javascript代码检测工具，它可以用于检查常见的JavaScript代码错误，也可以进行代码风格检查，这样我们就可以根据自己的喜好指定一套ESLint配置，然后应用到所编写的项目上，从而实现辅助编码规范的执行，有效控制项目代码的质量。那么，那现在有这么多的静态代码检测工具，我们为什么要选择Eslint呢？主要原因是他的灵活性比较高，易于扩展，所以有非常良好的生态，并且主流的编辑器都可以集成Eslint。



## 二、安装使用

##  本地安装   

```shell
npm install eslint --save-dev
```

生成配置文件

```shell
./node_modules/.bin/eslint --init
```

![](https://tcs-devops.aliyuncs.com/storage/112d7bf0f8f1f60a6a49d8813aa54183926b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTk5NCwiaWF0IjoxNjUxODk3MTk0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmQ3YmYwZjhmMWY2MGE2YTQ5ZDg4MTNhYTU0MTgzOTI2YiJ9.uPguUVVf4A-wT__eDhpcJNcbdUVsZ2wYH2tzgNN1ZA0&download=image.png "")

可以运行 ESLint 在任何文件或目录如下: `./node_modules/.bin/eslint index.js`。

其中，index.js 是需要测试的 js 文件。你使用的任何插件或共享配置（必须安装在本地来与安装在本地的 ESLint 一起工作）。

## 全局安装

如果你想让 ESLint 作用到所有的项目，建议全局安装 ESLint。 

```shell
npm install -g eslint
```

生成配置文件

```text
eslint --init
```

运行后，会在当前目录下生成一个`.eslintrc`文件，你可以在这个文件中配置一些规则。之后可以在任何文件或目录运行 ESLint。

```text
eslint index.js 
```



## 三、vscode eslint 插件

如果每次做项目都要先`eslint . --fix`统一格式，再提交代码。或者是把指令添加到package.json 文件中，执行`npm run lint`，再提交。这样就很麻烦，并且也不够直观，因为错误问题只有在你执行了指令后才能看到。

**那么我想在我一边写代码的时候就能直接看到错误，然后就能直接随手改正错误，这要怎么做呢？**这时 eslint 的 vscode 插件诞生了。

![](https://tcs-devops.aliyuncs.com/storage/112d4e658e17783fea366e6d01805db75c15?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTk5NCwiaWF0IjoxNjUxODk3MTk0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmQ0ZTY1OGUxNzc4M2ZlYTM2NmU2ZDAxODA1ZGI3NWMxNSJ9.xBGr__SP5hCQGtCbw1aJ9PPS3yB_LhDMBhTK0zypWg8&download=image.png "")

配置保存时自动修复：打开 vscode 的 setting.json 文件，添加如下语句。

```json
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true,
},
```

虽然 vscode 插件也可以单独配置检查规则，但如果项目中存在`.eslintrc.js`文件，那么 eslint 插件会优先执行`.eslintrc.js`文件的配置。装 vscode 插件只是为了方便自己开发而已。



## 四、配置规则

![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/9/26/1661662f7f3e351a~tplv-t2oaga2asx-watermark.awebp "")

## **解析器选项（parserOptions）**

- parserOptions 属性配置解析器内容。其中 ecmaVersion 属性配置JS的语法版本。

- sourceType 属性配置 JS 文件加载模式，值为 “script” 或 “module”。

- ecmaFeatures 属性配置想要使用的额外语言特性。 

```javascript
"parserOptions": {
	"ecmaVersion": 6, //ES的版本，默认为5
	"sourceType": "module", //指定源代码存在的位置，script | module，默认为script。
	"ecmaFeatures": { //指定要使用其他那些语言对象
		"experimentalObjectRestSpread": true,//启用对对象的扩展
		"jsx": true, //启用jsx语法
		"globalReturn":true, //允许return在全局使用
		"impliedStrict":true //启用严格校验模式
	}
}
```

## **解析器（parser）** 

默认情况下 ESLint 使用 Espree 解析器，这里我们可以修改它的默认设置。

```text
"parser": "babel-eslint",
```

## **环境配置（env）**

默认情况下，所有环境变量都为 false，且这些环境并不冲突，可以自由选择搭配。环境定义了预定义的全局变量。可用的环境是：

- browser - 浏览器全局变量。

- node - Node.js全局变量和Node.js范围。

- commonjs - CommonJS全局变量和CommonJS范围（使用Browserify / WebPack的浏览器代码）。

- shared-node-browser - Node.js和Browser的通用全局。

- es6- 启用除模块外的所有ECMAScript 6功能（这会自动将ecmaVersion解析器选项设置为6）。

- worker - 网络工作者全局变量。

- amd- 根据amd规范定义require()和define()作为全局变量。

- mocha - 增加了所有的Mocha测试全局变量。

- jasmine - 为版本1.3和2.0添加了所有Jasmine测试全局变量。

- jest - 是全局变量。

- phantomjs - PhantomJS全局变量。

- protractor - 量角器全局变量。

- qunit - QUnit全局变量。

- jquery - jQuery全局变量。

- prototypejs - Prototype.js全局变量。

- shelljs - ShellJS全局变量。

- meteor - 流星全球变量。

- mongo - MongoDB全局变量。

- applescript - AppleScript全局变量。

- nashorn - Java 8 Nashorn全局变量。

- serviceworker - 服务工作者全局变量。

- atomtest - Atom测试助手全局变量。

- embertest - 灰烬测试帮手全局。

- webextensions - 全球网络扩展。

- greasemonkey - GreaseMonkey全局变量

这些环境并不相互排斥，因此您可以一次定义多个环境。可以在文件内部，配置文件中或使用--env命令行标志指定环境。 要在JavaScript文件中使用注释指定环境，请使用以下格式：

```text
/* eslint-env node, mocha */
```

```text
env: {
	node: true,
},
```

在一个 package.json 文件中

```json
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
```

在 YAML 中：

```text
---
  env:
    browser: true
    node: true
```

## **全局变量（globals）** 

globals 属性定义了全局变量集合，包含在这个集合中的属性都会被工具认为是全局变量。指定全局变量的值为 true|false。true 表示变量可以被覆盖，false 表示不允许被覆盖。

```json
"globals": {
	"document": true,
	"navigator": true,
	"window": true,
	"think": true
},
```

## **自定义规则（settings）**

```json
"settings": {
	"sharedData": "Hello"
}
```

## **禁用持续查找（root）**

默认情况下，ESLint 将在根目录下的所有父文件夹中查找配置文件。该属性的作用是一旦发现了配置文件就停止对父文件夹的查找。

```json
"root": true
```

## **共享配置（extends）**

该属性可以是 eslint 命令，也可以是继承文件的路径。extends 属性配置基础规则，rules 属性中配置的规则都是基于这个规则之上配置的。 

- `eslint: all` 表示引入当前版本eslint的所有核心规则。 

- `eslint: recommended` 表示引入 eslint 的核心功能，并且报告一些常见的共同错误。 如果值为绝对或相对路径则相当于导入路径对应的规则配置。

```text
"extends": recommended,
```

```text
"extends": "./eslint-config-public.js",
```

## **插件（plugins）**

plugins 属性配置需要加载的第三方插件。这里我们需要先安装对应插件才能使用。

eslint 有 extends 和 plugins 两个配置。plugins 要引入对应的插件模块，然后配置相对应的规则 rules才会生效。而extends是已经配置好的规则，后面的 extends 会覆盖前面的 extends。

```text
"plugins": ["standard","promise","react"],
```

## 检查规则（rules）

**规则的错误等级有三种：**

- "off" 或 0：关闭规则。

- "warn" 或 1：启用规则，并且作为一个警告（不影响 exit code）。

- "error" 或 2：启用规则，并且作为一个错误（exit code 将会是1）。

```javascript
rules: {

    // 基本
    'semi': ['error', 'never'],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'brace-style': ['error', '1tbs', {
      'allowSingleLine': true
    }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'as-needed', {
      'numbers': true
    }],
}
```

 在 YAML 中： 

```yaml
---
rules:
  eqeqeq: off
  curly: error
  quotes:
    - error
    - double
```

 要配置在插件中定义的规则，必须在规则ID前加上插件名称和a /。例如：

```json
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}
```

在 YAML 中： 

```yaml
---
plugins:
  - plugin1
rules:
  eqeqeq: 0
  curly: error
  quotes:
    - error
    - "double"
  plugin1/rule1: error
```

**注意：从插件中指定规则时，请确保省略eslint-plugin-。ESLint在内部仅使用前缀名来查找规则。 **

4、

5、使用配置文件  



## 五、忽略检查

## .eslintignore

在工程目录中新建一个文件，命名为`.eslintignore`，Eslint 会自动识别这个文件。这个配置文件里面，每一行都是一个 glob 模式语句，具体格式如下： 

- 以 # 开头的行被当作注释，不影响忽略模式。

- 路径是相对于 .eslintignore 的位置或当前工作目录。

- 忽略模式同 .gitignore 规范

- 以 ! 开头的行是否定模式，它将会重新包含一个之前被忽略的模式。

 .eslintignore 当 ESLint 在目录上运行时，ESLint 支持文件从linting 进程中排除文件。作为单独的 CLI 参数给出的文件将免除排除。该.eslintignore文件是一个纯文本文件，每行包含一个模式。它可以位于任何目标目录的祖先中; 它会影响其包含目录中的文件以及所有子目录。

以下是一个简单的.eslintignore文件示例：

```text
## Folders to ignore
node_modules/
jscoverage_lib/
bower_components/
dist/
npm-debug.log
package-lock.json
.vscode
.history

```

ESLint 始终忽略`/node_modules/*`。

1、您可以通过提供不同文件的路径来覆盖此行为。`--ignore-path`

```text
eslint --ignore-path tmp/.eslintignore file.js
eslint --ignore-path .gitignore file.js
```

 2、`--no-ignore`  禁用从文件的排除.eslintignore，`--ignore-path`和`--ignore-pattern `

```text
eslint --no-ignore file.js
```

 比如，你已经在忽略文件 .eslintignore 中忽略了某文件，但是你用在命令行中执行了 eslint 该文件，则为警告提示，您可以使用--no-ignore忽略使用忽略规则。

 3、在 package.json 中使用 eslintIgnore 

如果 .eslintignore 未找到文件并且未指定备用文件，ESLint 将在 package.json 中查找 eslintIgnore 字段以检查要忽略的文件。

```json
{
  "name": "mypackage",
  "version": "0.0.1",
  "eslintConfig": {
      "env": {
          "browser": true,
          "node": true
      }
  },
  "eslintIgnore": ["hello.js", "world.js"]
}
```

## 内嵌注释

-  要临时禁用文件中的规则警告，请按以下格式使用块注释：要在整个文件中禁用规则警告，请在文件`/* eslint-disable */`顶部放置块注释：/`* eslint-disable */alert('foo');/* eslint-enable */`

- 要禁用特定行上的所有规则，请使用以下格式之一的行注释：`alert('foo'); // eslint-disable-line// eslint-disable-next-linealert('foo'); `



## 六、规则表解释



```javascript
{
	// 环境定义了预定义的全局变量。
	"env": {
		//环境定义了预定义的全局变量。更多在官网查看
		"browser": true,
		"node": true,
		"commonjs": true,
		"amd": true,
		"es6": true,
		"mocha": true
	},
	// JavaScript 语言选项
	"parserOptions": {
		// ECMAScript 版本
		"ecmaVersion": 6,
		"sourceType": "module", //设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
		//想使用的额外的语言特性:
		"ecmaFeatures": {
			// 允许在全局作用域下使用 return 语句
			"globalReturn": true,
			// impliedStric
			"impliedStrict": true,
			// 启用 JSX
			"jsx": true,
			"modules": true
		}
	},
	//-----让eslint支持 JSX start
	"plugins": [
		"react"
	],
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	//-----让eslint支持 JSX end
	
	/**
	* "off" 或 0 - 关闭规则
	* "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
	* "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
	*/
	"rules": {
	
	////////////////
	// 可能的错误 //
	////////////////
	
	// 禁止条件表达式中出现赋值操作符
	"no-cond-assign": 2,
	// 禁用 console
	"no-console": 0,
	// 禁止在条件中使用常量表达式
	// if (false) {
	// doSomethingUnfinished();
	// } //cuowu
	"no-constant-condition": 2,
	// 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
	"no-control-regex": 2,
	// 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
	// always-multiline：多行模式必须带逗号，单行模式不能带逗号
	"comma-dangle": [1, "never"],
	// 禁用 debugger
	"no-debugger": 2,
	// 禁止 function 定义中出现重名参数
	"no-dupe-args": 2,
	// 禁止对象字面量中出现重复的 key
	"no-dupe-keys": 2,
	// 禁止重复的 case 标签
	"no-duplicate-case": 2,
	// 禁止空语句块
	"no-empty": 2,
	// 禁止在正则表达式中使用空字符集 (/^abc[]/)
	"no-empty-character-class": 2,
	// 禁止对 catch 子句的参数重新赋值
	"no-ex-assign": 2,
	// 禁止不必要的布尔转换
	"no-extra-boolean-cast": 2,
	// 禁止不必要的括号 //(a * b) + c;//报错
	"no-extra-parens": 0,
	// 禁止不必要的分号
	"no-extra-semi": 2,
	// 禁止对 function 声明重新赋值
	"no-func-assign": 2,
	// 禁止在嵌套的块中出现 function 或 var 声明
	"no-inner-declarations": [2, "functions"],
	// 禁止 RegExp 构造函数中无效的正则表达式字符串
	"no-invalid-regexp": 2,
	// 禁止在字符串和注释之外不规则的空白
	"no-irregular-whitespace": 2,
	// 禁止在 in 表达式中出现否定的左操作数
	"no-negated-in-lhs": 2,
	// 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
	"no-obj-calls": 2,
	// 禁止直接使用 Object.prototypes 的内置属性
	"no-prototype-builtins": 0,
	// 禁止正则表达式字面量中出现多个空格
	"no-regex-spaces": 2,
	// 禁用稀疏数组
	"no-sparse-arrays": 2,
	// 禁止出现令人困惑的多行表达式
	"no-unexpected-multiline": 2,
	// 禁止在return、throw、continue 和 break语句之后出现不可达代码
	"no-unreachable": 2,
	// 要求使用 isNaN() 检查 NaN
	"use-isnan": 2,
	// 强制使用有效的 JSDoc 注释
	"valid-jsdoc": 1,
	// 强制 typeof 表达式与有效的字符串进行比较
	// typeof foo === "undefimed" 错误
	"valid-typeof": 2,
	
	//////////////
	// 最佳实践 //
	//////////////
	
	// 定义对象的set存取器属性时，强制定义get
	"accessor-pairs": 2,
	// 强制数组方法的回调函数中有 return 语句
	"array-callback-return": 0,
	// 强制把变量的使用限制在其定义的作用域范围内
	"block-scoped-var": 0,
	// 限制圈复杂度，也就是类似if else能连续接多少个
	"complexity": [2, 9],
	// 要求 return 语句要么总是指定返回的值，要么不指定
	"consistent-return": 0,
	// 强制所有控制语句使用一致的括号风格
	"curly": [2, "all"],
	// switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
	"default-case": 2,
	// 强制object.key 中 . 的位置，参数:
	// property，'.'号应与属性在同一行
	// object, '.' 号应与对象名在同一行
	"dot-location": [2, "property"],
	// 强制使用.号取属性
	// 参数： allowKeywords：true 使用保留字做属性名时，只能使用.方式取属性
	// false 使用保留字做属性名时, 只能使用[]方式取属性 e.g [2, {"allowKeywords": false}]
	// allowPattern: 当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值 e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
	"dot-notation": [2, {
		"allowKeywords": false
	}],
	// 使用 === 替代 == allow-null允许null和undefined==
	"eqeqeq": [2, "allow-null"],
	// 要求 for-in 循环中有一个 if 语句
	"guard-for-in": 2,
	// 禁用 alert、confirm 和 prompt
	"no-alert": 0,
	// 禁用 arguments.caller 或 arguments.callee
	"no-caller": 2,
	// 不允许在 case 子句中使用词法声明
	"no-case-declarations": 2,
	// 禁止除法操作符显式的出现在正则表达式开始的位置
	"no-div-regex": 2,
	// 禁止 if 语句中有 return 之后有 else
	"no-else-return": 0,
	// 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
	"no-empty-function": 2,
	// 禁止使用空解构模式no-empty-pattern
	"no-empty-pattern": 2,
	// 禁止在没有类型检查操作符的情况下与 null 进行比较
	"no-eq-null": 1,
	// 禁用 eval()
	"no-eval": 2,
	// 禁止扩展原生类型
	"no-extend-native": 2,
	// 禁止不必要的 .bind() 调用
	"no-extra-bind": 2,
	// 禁用不必要的标签
	"no-extra-label:": 0,
	// 禁止 case 语句落空
	"no-fallthrough": 2,
	// 禁止数字字面量中使用前导和末尾小数点
	"no-floating-decimal": 2,
	// 禁止使用短符号进行类型转换(!!fOO)
	"no-implicit-coercion": 0,
	// 禁止在全局范围内使用 var 和命名的 function 声明
	"no-implicit-globals": 1,
	// 禁止使用类似 eval() 的方法
	"no-implied-eval": 2,
	// 禁止 this 关键字出现在类和类对象之外
	"no-invalid-this": 0,
	// 禁用 __iterator__ 属性
	"no-iterator": 2,
	// 禁用标签语句
	"no-labels": 2,
	// 禁用不必要的嵌套块
	"no-lone-blocks": 2,
	// 禁止在循环中出现 function 声明和表达式
	"no-loop-func": 1,
	// 禁用魔术数字(3.14什么的用常量代替)
	"no-magic-numbers": [1, {
	"ignore": [0, -1, 1]
	}],
	// 禁止使用多个空格
	"no-multi-spaces": 2,
	// 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
	"no-multi-str": 2,
	// 禁止对原生对象赋值
	"no-native-reassign": 2,
	// 禁止在非赋值或条件语句中使用 new 操作符
	"no-new": 2,
	// 禁止对 Function 对象使用 new 操作符
	"no-new-func": 0,
	// 禁止对 String，Number 和 Boolean 使用 new 操作符
	"no-new-wrappers": 2,
	// 禁用八进制字面量
	"no-octal": 2,
	// 禁止在字符串中使用八进制转义序列
	"no-octal-escape": 2,
	// 不允许对 function 的参数进行重新赋值
	"no-param-reassign": 0,
	// 禁用 __proto__ 属性
	"no-proto": 2,
	// 禁止使用 var 多次声明同一变量
	"no-redeclare": 2,
	// 禁用指定的通过 require 加载的模块
	"no-return-assign": 0,
	// 禁止使用 javascript: url
	"no-script-url": 0,
	// 禁止自我赋值
	"no-self-assign": 2,
	// 禁止自身比较
	"no-self-compare": 2,
	// 禁用逗号操作符
	"no-sequences": 2,
	// 禁止抛出非异常字面量
	"no-throw-literal": 2,
	// 禁用一成不变的循环条件
	"no-unmodified-loop-condition": 2,
	// 禁止出现未使用过的表达式
	"no-unused-expressions": 0,
	// 禁用未使用过的标签
	"no-unused-labels": 2,
	// 禁止不必要的 .call() 和 .apply()
	"no-useless-call": 2,
	// 禁止不必要的字符串字面量或模板字面量的连接
	"no-useless-concat": 2,
	// 禁用不必要的转义字符
	"no-useless-escape": 0,
	// 禁用 void 操作符
	"no-void": 0,
	// 禁止在注释中使用特定的警告术语
	"no-warning-comments": 0,
	// 禁用 with 语句
	"no-with": 2,
	// 强制在parseInt()使用基数参数
	"radix": 2,
	// 要求所有的 var 声明出现在它们所在的作用域顶部
	"vars-on-top": 0,
	// 要求 IIFE 使用括号括起来
	"wrap-iife": [2, "any"],
	// 要求或禁止 “Yoda” 条件
	"yoda": [2, "never"],
	// 要求或禁止使用严格模式指令
	"strict": 0,
	
	//////////////
	// 变量声明 //
	//////////////
	
	// 要求或禁止 var 声明中的初始化(初值)
	"init-declarations": 0,
	// 不允许 catch 子句的参数与外层作用域中的变量同名
	"no-catch-shadow": 0,
	// 禁止删除变量
	"no-delete-var": 2,
	// 不允许标签与变量同名
	"no-label-var": 2,
	// 禁用特定的全局变量
	"no-restricted-globals": 0,
	// 禁止 var 声明 与外层作用域的变量同名
	"no-shadow": 0,
	// 禁止覆盖受限制的标识符
	"no-shadow-restricted-names": 2,
	// 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
	"no-undef": 2,
	// 禁止将变量初始化为 undefined
	"no-undef-init": 2,
	// 禁止将 undefined 作为标识符
	"no-undefined": 0,
	// 禁止出现未使用过的变量
	"no-unused-vars": [2, {
	"vars": "all",
	"args": "none"
	}],
	// 不允许在变量定义之前使用它们
	"no-use-before-define": 0,
	
	//////////////////////////
	// Node.js and CommonJS //
	//////////////////////////
	
	// require return statements after callbacks
	"callback-return": 0,
	// 要求 require() 出现在顶层模块作用域中
	"global-require": 1,
	// 要求回调函数中有容错处理
	"handle-callback-err": [2, "^(err|error)$"],
	// 禁止混合常规 var 声明和 require 调用
	"no-mixed-requires": 0,
	// 禁止调用 require 时使用 new 操作符
	"no-new-require": 2,
	// 禁止对 __dirname 和 __filename进行字符串连接
	"no-path-concat": 0,
	// 禁用 process.env
	"no-process-env": 0,
	// 禁用 process.exit()
	"no-process-exit": 0,
	// 禁用同步方法
	"no-sync": 0,
	
	//////////////
	// 风格指南 //
	//////////////
	
	// 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
	"array-bracket-spacing": [2, "never"],
	// 禁止或强制在单行代码块中使用空格(禁用)
	"block-spacing": [1, "never"],
	//强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
	// if while function 后面的{必须与if在同一行，java风格。
	"brace-style": [2, "1tbs", {
		"allowSingleLine": true
	}],
	// 双峰驼命名格式
	"camelcase": 2,
	// 控制逗号前后的空格
	"comma-spacing": [2, {
		"before": false,
		"after": true
	}],
	// 控制逗号在行尾出现还是在行首出现 (默认行尾)
	// http://eslint.org/docs/rules/comma-style
	"comma-style": [2, "last"],
	//"SwitchCase" (默认：0) 强制 switch 语句中的 case 子句的缩进水平
	// 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
	"computed-property-spacing": [2, "never"],
	// 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
	// e.g [0,"that"] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值
	"consistent-this": [1, "that"],
	// 强制使用命名的 function 表达式
	"func-names": 0,
	// 文件末尾强制换行
	"eol-last": 2,
	"indent": [2, 4, {
	"SwitchCase": 1
	}],
	// 强制在对象字面量的属性中键和值之间使用一致的间距
	"key-spacing": [2, {
		"beforeColon": false,
		"afterColon": true
	}],
	// 强制使用一致的换行风格
	"linebreak-style": [1, "unix"],
	// 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
	"lines-around-comment": [1, {
	"beforeBlockComment": true
	}],
	// 强制一致地使用函数声明或函数表达式，方法定义风格，参数：
	// declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]
	// expression：强制使用方法表达式的方式，var f = function() {} e.g [2, "expression"]
	// allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, "declaration", { "allowArrowFunctions": true }]
	"func-style": 0,
	// 强制回调函数最大嵌套深度 5层
	"max-nested-callbacks": [1, 5],
	// 禁止使用指定的标识符
	"id-blacklist": 0,
	// 强制标识符的最新和最大长度
	"id-length": 0,
	// 要求标识符匹配一个指定的正则表达式
	"id-match": 0,
	// 强制在 JSX 属性中一致地使用双引号或单引号
	"jsx-quotes": 0,
	// 强制在关键字前后使用一致的空格 (前后腰需要)
	"keyword-spacing": 2,
	// 强制一行的最大长度
	"max-len": [1, 200],
	// 强制最大行数
	"max-lines": 0,
	// 强制 function 定义中最多允许的参数数量
	"max-params": [1, 7],
	// 强制 function 块最多允许的的语句数量
	"max-statements": [1, 200],
	// 强制每一行中所允许的最大语句数量
	"max-statements-per-line": 0,
	// 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
	"new-cap": [2, {
	"newIsCap": true,
	"capIsNew": false
	}],
	// 要求调用无参构造函数时有圆括号
	"new-parens": 2,
	// 要求或禁止 var 声明语句后有一行空行
	"newline-after-var": 0,
	// 禁止使用 Array 构造函数
	"no-array-constructor": 2,
	// 禁用按位运算符
	"no-bitwise": 0,
	// 要求 return 语句之前有一空行
	"newline-before-return": 0,
	// 要求方法链中每个调用都有一个换行符
	"newline-per-chained-call": 1,
	// 禁用 continue 语句
	"no-continue": 0,
	// 禁止在代码行后使用内联注释
	"no-inline-comments": 0,
	// 禁止 if 作为唯一的语句出现在 else 语句中
	"no-lonely-if": 0,
	// 禁止混合使用不同的操作符
	"no-mixed-operators": 0,
	// 不允许空格和 tab 混合缩进
	"no-mixed-spaces-and-tabs": 2,
	// 不允许多个空行
	"no-multiple-empty-lines": [2, {
	"max": 2
	}],
	// 不允许否定的表达式
	"no-negated-condition": 0,
	// 不允许使用嵌套的三元表达式
	"no-nested-ternary": 0,
	// 禁止使用 Object 的构造函数
	"no-new-object": 2,
	// 禁止使用一元操作符 ++ 和 --
	"no-plusplus": 0,
	// 禁止使用特定的语法
	"no-restricted-syntax": 0,
	// 禁止 function 标识符和括号之间出现空格
	"no-spaced-func": 2,
	// 不允许使用三元操作符
	"no-ternary": 0,
	// 禁用行尾空格
	"no-trailing-spaces": 2,
	// 禁止标识符中有悬空下划线_bar
	"no-underscore-dangle": 0,
	// 禁止可以在有更简单的可替代的表达式时使用三元操作符
	"no-unneeded-ternary": 2,
	// 禁止属性前有空白
	"no-whitespace-before-property": 0,
	// 强制花括号内换行符的一致性
	"object-curly-newline": 0,
	// 强制在花括号中使用一致的空格
	"object-curly-spacing": 0,
	// 强制将对象的属性放在不同的行上
	"object-property-newline": 0,
	// 强制函数中的变量要么一起声明要么分开声明
	"one-var": [2, {
	"initialized": "never"
	}],
	// 要求或禁止在 var 声明周围换行
	"one-var-declaration-per-line": 0,
	// 要求或禁止在可能的情况下要求使用简化的赋值操作符
	"operator-assignment": 0,
	// 强制操作符使用一致的换行符
	"operator-linebreak": [2, "after", {
	"overrides": {
	"?": "before",
	":": "before"
	}
	}],
	// 要求或禁止块内填充
	"padded-blocks": 0,
	// 要求对象字面量属性名称用引号括起来
	"quote-props": 0,
	// 强制使用一致的反勾号、双引号或单引号
	"quotes": [2, "double", "avoid-escape"],
	// 要求使用 JSDoc 注释
	"require-jsdoc": 1,
	// 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
	"semi": [2, "always"],
	// 强制分号之前和之后使用一致的空格
	"semi-spacing": 0,
	// 要求同一个声明块中的变量按顺序排列
	"sort-vars": 0,
	// 强制在块之前使用一致的空格
	"space-before-blocks": [2, "always"],
	// 强制在 function的左括号之前使用一致的空格
	"space-before-function-paren": [0, "always"],
	// 强制在圆括号内使用一致的空格
	"space-in-parens": [2, "never"],
	// 要求操作符周围有空格
	"space-infix-ops": 2,
	// 强制在一元操作符前后使用一致的空格
	"space-unary-ops": [2, {
	"words": true,
	"nonwords": false
	}],
	// 强制在注释中 // 或 /* 使用一致的空格
	"spaced-comment": [2, "always", {
	"markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"]
	}],
	// 要求或禁止 Unicode BOM
	"unicode-bom": 0,
	// 要求正则表达式被括号括起来
	"wrap-regex": 0,
	
	//////////////
	// ES6.相关 //
	//////////////
	
	// 要求箭头函数体使用大括号
	"arrow-body-style": 2,
	// 要求箭头函数的参数使用圆括号
	"arrow-parens": 2,
	"arrow-spacing": [2, {
	"before": true,
	"after": true
	}],
	// 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
	"constructor-super": 0,
	// 强制 generator 函数中 * 号周围使用一致的空格
	"generator-star-spacing": [2, {
	"before": true,
	"after": true
	}],
	// 禁止修改类声明的变量
	"no-class-assign": 2,
	// 不允许箭头功能，在那里他们可以混淆的比较
	"no-confusing-arrow": 0,
	// 禁止修改 const 声明的变量
	"no-const-assign": 2,
	// 禁止类成员中出现重复的名称
	"no-dupe-class-members": 2,
	// 不允许复制模块的进口
	"no-duplicate-imports": 0,
	// 禁止 Symbol 的构造函数
	"no-new-symbol": 2,
	// 允许指定模块加载时的进口
	"no-restricted-imports": 0,
	// 禁止在构造函数中，在调用 super() 之前使用 this 或 super
	"no-this-before-super": 2,
	// 禁止不必要的计算性能键对象的文字
	"no-useless-computed-key": 0,
	// 要求使用 let 或 const 而不是 var
	"no-var": 0,
	// 要求或禁止对象字面量中方法和属性使用简写语法
	"object-shorthand": 0,
	// 要求使用箭头函数作为回调
	"prefer-arrow-callback": 0,
	// 要求使用 const 声明那些声明后不再被修改的变量
	"prefer-const": 0,
	// 要求在合适的地方使用 Reflect 方法
	"prefer-reflect": 0,
	// 要求使用扩展运算符而非 .apply()
	"prefer-spread": 0,
	// 要求使用模板字面量而非字符串连接
	"prefer-template": 0,
	// Suggest using the rest parameters instead of arguments
	"prefer-rest-params": 0,
	// 要求generator 函数内有 yield
	"require-yield": 0,
	// enforce spacing between rest and spread operators and their expressions
	"rest-spread-spacing": 0,
	// 强制模块内的 import 排序
	"sort-imports": 0,
	// 要求或禁止模板字符串中的嵌入表达式周围空格的使用
	"template-curly-spacing": 1,
	// 强制在 yield* 表达式中 * 周围使用空格
	"yield-star-spacing": 2
	}
}
```



相关资料



