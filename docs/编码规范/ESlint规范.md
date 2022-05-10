# ESlint规范

变更记录

| 变更时间 | 变更人 | 变更标题 | 变更内容 |
| ---- | --- | ---- | ---- |
|      |     |      |      |
|      |     |      |      |



注：前端ESlint规范是Vue标准规范结合一些自定规范，实际项目中运用的规范以项目的Eslint为主。

示例项目：[__https://codeup.aliyun.com/5f009f6e6a575d7f23661045/frontend/web-frame__](https://codeup.aliyun.com/5f009f6e6a575d7f23661045/frontend/web-frame)

devWarnProdError：开发环境警告，生产环境报错（打包发布时会出错）

### 1、调试规范

调试语句的原则是开发环境警告，生产环境报错。可以在开发环境调试时使用`console.log`、`alert`等语句调试，调试完成后需要删除，如果需要在生产环境的控制台打印信息，请使用`console.info`打印信息。

*禁止在开发环境调试时使用 `console.info`

```text
'no-console': [
	devWarnProdError,
	{ 'allow': ['info', 'warn', 'error', 'time', 'timeEnd'] }
],
'no-debugger': devWarnProdError,
"no-alert": devWarnProdError,

```

### 2、基本规范

- 代码行末统一不使用分号`；`

- 文件末尾强制换行

- 强制缩进格式为 1 个tab（统一1个tab设置为2个空格）

- 强制使用单引号

- 对象字面量属性名可根据需要使用引号，数字强制不使用引号

- 逗号需要在行末出现

```text
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
'comma-style': 'error',
```

### 3、变量规范

- 构造函数首字母大写

- 双驼峰命名格式

- 不允许使用未定义的变量

- 禁止出现未使用过的变量（一个变量定义了但未被使用，会报错）

```text
'new-cap': 'error',
'camelcase': 'error',
'no-use-before-define': ['error', {
	'functions': false,
	'classes': false,
	'variables': true
}],
'no-unused-vars': [devWarnProdError, {
	vars: 'all',
	args: 'after-used'
}],
```

### 4、空白与换行规范

- 强制分号之前和之后使用一致的空格（一般我们空格在分号后使用，如：`for (i=1; i < 2; i++) {}`）

- 指定数组的元素之间要以空格隔开(, 后面)， [ 之前和 ] 之后不能带空格

- 禁止在单行代码块中使用空格(禁用)

- 以方括号取对象属性时，[ 后面和 ] 前面不需要空格

- 在逗号后使用空格（如: `let a, b =1`）

- 函数调用时，括号前不能使用空格

- 强制在对象字面量的属性中键和值之间使用一致的间距

- 强制在关键字前后使用一致的空格

- 禁止行尾空格

- 禁止属性前有空白

- 强制在块之前使用一致的空格

- 强制在 function的左括号之前使用空格

- 强制在圆括号内使用一致的空格

- 要求操作符周围有空格（`++`  `--` 除外）

- 强制在一元操作符前后使用一致的空格

- 强制在注释中 // 或 /* 使用一致的空格

- 强制在花括号中使用一致的空格

- 强制操作符使用一致的换行符

```text
'semi-spacing': 'error',
'array-bracket-spacing': ['error', 'never'],
'block-spacing': ['error', 'always'],
'computed-property-spacing': 'error',
'comma-spacing': 'error',
'func-call-spacing': 'error',
'key-spacing': 'error',
'keyword-spacing': 'error',
'no-trailing-spaces': 'error',
'no-whitespace-before-property': 'error',
'space-before-blocks': 'error',
'space-before-function-paren': ['error', {
	anonymous: 'never',
	named: 'never',
	asyncArrow: 'always'
}],
'space-in-parens': 'error',
'space-infix-ops': 'error',
'space-unary-ops': 'error',
'spaced-comment': ['error', 'always', {
	'block': {
		'markers': ['!'],
		'balanced': true
	}
}],
'object-curly-spacing': ['error', 'always'],
'object-property-newline': ['error', {
	allowAllPropertiesOnSameLine: true
}],
'operator-linebreak': ['error', 'after'],
'eol-last': ['error', 'always'],
'padded-blocks': 0,

```

### 5、其他

- 禁止不必要的 .bind() 调用

- 禁用不必要的标签

- 禁止数字字面量中使用前导和末尾小数点

- 禁止使用类似 eval() 的方法（防止代码注入）

- 禁用 __iterator__ 属性

- 禁止在循环中出现 function 声明和表达式

- 禁止使用多个空格

- 禁用 __proto__ 属性

- 禁止使用 javascript: url

- 禁止抛出非异常字面量

- 禁止不必要的 .call() 和 .apply()

- 禁用 with 语句

- 禁止在条件中使用常量表达式（开发环境警告，生产环境禁止，如：if (false) {}）

- 禁止空语句块

- 强制所有控制语句使用一致的括号风格

- 强制总是包装函数表达式

```text
'no-extra-bind': 'error',
'no-extra-label': 'error',
'no-floating-decimal': 'error',
'no-implied-eval': 'error',
'no-iterator': 'error',
'no-loop-func': 'error',
'no-multi-spaces': 'error',
'no-proto': 'error',
'no-script-url': 'error',
'no-throw-literal': 'error',
'no-useless-call': 'error',
'no-with': 'error',
'no-constant-condition': devWarnProdError,
'no-empty': [devWarnProdError, {
	'allowEmptyCatch': true
}],
'no-lonely-if': 0,
'curly': ['error', 'multi-line'],
'wrap-iife': ['error', 'inside'],

```

### 6、ES6规范

- 要求使用 let 或 const 而不是 var

- 要求使用 const 声明那些声明后不再被修改的变量

- 不允许复制模块的进口

- 要求使用 Error 对象作为 Promise 拒绝的原因

- 禁止模板字符串中的嵌入表达式周围空格的使用（正确写法：${props}）

- 箭头函数前后都需要有空格

```text
'no-var': 'error',
'prefer-const': 'error',
'no-duplicate-imports': 'error',
'prefer-promise-reject-errors': 'error',
'template-curly-spacing': ['error', 'never'],
'no-template-curly-in-string': 0,
'arrow-spacing': 'error',
'no-confusing-arrow': 'error',
'import/order': 0,
'unicorn/prefer-includes': 0,
```

### 7、Vue.js规范

- 组件标签之间没有内容需要使用自闭合

- 单行HTML标签最多可以使用3个属性，超过3个属性需要换行

```text
'vue/html-indent': ['error', 2],
'vue/html-self-closing': ['error', {
  html: {
    'void': 'always',
    normal: 'never',
    component: 'always'
  }
}],
'vue/no-v-html': 0,
'vue/max-attributes-per-line': ['error', {
  singleline: 3,
  multiline: 1
}],
'vue/singleline-html-element-content-newline': 0,

```







