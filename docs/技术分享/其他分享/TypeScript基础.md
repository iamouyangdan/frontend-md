# TypeScript基础

### 1、什么是TypeScript

（1）JavaScript的超集，完全兼容JavaScript，不会修改JavaScript运行时的特性

（2）TypeScript是静态类型、**弱类型语言**（兼容JavaScript，允许隐式类型转换）

（3）TypeScript 可以**编译**为 JavaScript，然后运行在浏览器、Node.js 等任何能运行 JavaScript 的环境中（编译时，类型检查的严格程度由你决定）

（4）添加了**类型系统**的 JavaScript，适用于任何规模的项目

对比JavaScript：

JavaScript没有编译阶段，是动态类型，在运行时才进行类型检查，语言的类型错误往往导致运行错误。

### 2、认识TypeScript

（1）安装

```shell
npm install -g typescript
```

（2）编译

```shell
tsc hello.ts
```

（3）实例

新建一个hello.ts，输入以下内容：

用`:`来指定person的变量类型

```typescript
function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

执行编译，输出文件 hello.js，文件内容为：

若变量person 的值不是字符串， 则编译的时候会报错（但是还是会输出hello.js文件，可在tsconfig.json文件中配置报错时候不输出文件）

```typescript
function sayHello(person) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
```

### 3、基础

（1）原始数据类型

原始数据类型主要包括: 布尔值、数值、字符串、`null`、`undefined`以及 ES6 中的新类型 `Symbol` 和 ES10 中的新类型 `BigInt`。

```typescript
// 数据类型
// 在 TypeScript 中, 用: 指定变量类型(编译时会进行检查, 如果发现有错误则会编译报错, 在赋值过程中不会改变类型)
const b: boolean = false
const s: string = 'Str'
const n: number = 123
const nu: null = null
const u: undefined = undefined
// 注意: null 和 undefined 是所有类型的子类型,可以把null和undefined赋值给其他类型, 如 const n: number = null


console.log('若变量赋值不是对应类型的值, 则编译时会报错。如：把数字赋值给String类型的变量')

// 任意类型: 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let a: any = '1'
a = 1

let a1
a1 = 'str'
a1 = 1

/* 类型推论: 如果没有明确的指定类型, TypeScript根据规则推断出一个类型
注意: 在 TypeScript 中以下写法不等价
写法一:
let x
x = 'str'
写法二:
let x = 'str'

写法一的 x 是 any 类型, 写法二的 x 是 string 类型
*/

// 联合类型
let connect: Boolean|number = 1
connect = true
console.log('connect', connect)

```

（2）对象类型

```text
/** 对象的类型
 * 赋值的时候，变量的形状必须和接口的形状保持一致，不允许增多或者减少属性，需要增加或减少属性请用以下属性：
 * 1、可选属性，在属性后面加? 标识属性是可选的
 * 2、任意属性
 * 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
 * 如：使用 [propName: string] 定义了任意属性取 string|number 类型的值，那么可选属性和确定属性必须是 string|number 的子集,若新增属性 isPublic: Boolean, 则报错.
 * 
 * 3、只读属性， 在属性前加 readonly 标识只读属性
 */
 interface product {
  readonly id?: number;
  name: string;
  price: number;
  desc?: string;
  [propName: string]: string|number;
  // isPublic: boolean;
}

let obj: product = {
  name: '一件商品',
  price: 100,
  sku: '红色'
}
obj.name = '一件商品的新名字'
console.log('对象类型: ', obj)

/** 数组类型
* 1、[类型 + 方括号] 表示法
* 2、数组泛型
* 3、用接口表示数组（不推荐）（利用接口的任意属性来定义）
*/

let arr: number[] = [1, 2, 3]
let arr2: (number | string)[] = [1, 2, 3, '4']
//  let arr: number[] = [1, 2, 3, '4'] // 报错


```

（3）函数的类型

```text

// 函数类型
// 1、函数声明
function sum(x: number, y: number): number {
  return x + y;
}
// 注意: 输入多余的（或者少于要求的）参数，是不被允许的
// sum(1)
console.log('求和函数: ', sum(1, 2))

// 2、用接口定义函数的形状(对应JavaScript的函数表达式)
interface multiplication {
  (x: number, y: number, z?: number): number;
}
let mult: multiplication
mult = function(x: number, y: number, z?: number) {
  if (z || z === 0) {
      return x * y * z;
  }
  return x * y;

}
console.log('求积函数:', mult(1, 2))
console.log('求积函数:', mult(1, 2, 3))

// 3、重载
function arraySum(x: number): number;
function arraySum(x: number[]): number;
function arraySum(x: (number | number[])): number {
  if (typeof x === 'number') {
      return x
  } else {
      let sum: number = 0
      x.forEach(item => {
          sum += item
      })
      return sum
  }
}
console.log('重载求和函数:', arraySum(1))
console.log('重载求和函数:', arraySum([1, 2, 3]))

```

（4）类型断言

类型断言可以用来手动指定一个值的类型。

```text
// 类型断言 将一个联合类型断言为其中一个类型
interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

// animal 类型可能是 Cat 或者 Fish
function isFish(animal: Cat | Fish) {
  // 如果是cat则没有 swim 方法, 编译会报错. 此处需要使用类型断言
  // if (typeof animal.swim === 'function') {
  //   return true;
  // }
  if (typeof (animal as Fish).swim === 'function') {
    return true;
  }
  return false;
}

```

（5）声明文件

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

**声明语句：**

假如我们使用第三方库jQuery，一种常见的方式是在 html 中通过 `<script>` 标签引入 jQuery，然后就可以使用全局变量 `$` 或 `jQuery` 了。

```text
$('#id');
// or
jQuery('#id');
```

我们通常的用法如上，但是在ts编译器中，$ 和 jQuery并不能被识别。这是我们需要用`declare var` 来定义他的类型

```text
declare var jQuery: (selector: string) => any;

jQuery('#id');
```

`declare var` 并没有真的定义一个变量，只是定义了全局变量 `jQuery` 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。编译结果是：

```text
jQuery('#id');
```

**声明文件：**

通常我们会把声明语句放到一个单独的文件（`jQuery.d.ts`）中，这就是声明文件，声明文件必需以 `.d.ts` 为后缀。

```text
// jQuery.d.ts

declare var jQuery: (selector: string) => any;
```

一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `jQuery.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `jQuery` 的类型定义了。

（6）内置对象

JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。

**ECMAScript 标准提供的内置对象有**：

`Boolean`、`Error`、`Date`、`RegExp` 等。

```text
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```

**DOM 和 BOM 提供的内置对象有**：

`Document`、`HTMLElement`、`Event`、`NodeList` 等。

```text
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```

**TypeScript 核心库的定义文件**

[TypeScript 核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)中定义了所有浏览器环境需要用到的类型，并且是预置在 TypeScript 中的。我们一些常用的浏览器方法，TypeScript已经帮我们做了类型判断的工作了。

如：

```text
Math.pow(10, '2');

// index.ts(1,14): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```

我们常用的 `Math.pow `函数，必须接受两个 `number` 类型的参数。事实上 `Math.pow` 的类型定义如下：

```text
interface Math {
    /**
     * Returns the value of a base expression taken to a specified power.
     * @param x The base value of the expression.
     * @param y The exponent value of the expression.
     */
    pow(x: number, y: number): number;
}
```

其他 `Math` 函数也是同理，如：`Math.min`、`Math.max`、`Math.floor`、`Math.ceil` 等等。



### 4、参考文献







