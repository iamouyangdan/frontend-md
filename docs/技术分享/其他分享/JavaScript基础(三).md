# this关键字

this 表示当前对象的一个引用，在 ES5 中，其实 this 的指向，始终坚持一个原理：this 永远指向最后调用它的那个对象，指向调用函数的对象

## this的绑定规则

- 默认绑定

- 隐式绑定

- 显式绑定

- new绑定

### 隐式绑定

函数的调用是在某个对象上触发的，即调用位置上存在上下文对象

最重要是注意最终调用函数的对象是哪个，this就指向这个对象

```javascript
var person = {
  name: '张三',
  sayHello: function() {
    console.log('我是' + this.name)
  }
}
person.sayHello()
```

隐式绑定很容易丢失

```javascript
function sayHello() {
    console.log('我是' + this.name)
}

var person1 = {
  name: '张三'
}

var person2 = {
  name: '李四'
}

var person3 = {
  name: '王五',
  sayHello: sayHello
}

person1.sayHello()
person2.sayHello()
person3.sayHello()
var person3SayHello = person3.sayHello
person3SayHello()
```

回调函数也会发生隐式绑定丢失

```javascript
var person = {
  name: '张三',
  sayHello: function() {
    setTimeout(function() {
      console.log('我是' + this.name)
    })
  }
}
person.sayHello()
```

### 显式绑定

通过call,apply,bind的方式，显式的指定this所指向的对象

- call,apply和bind的第一个参数，就是对应函数的this所指向的对象

- call和apply的作用一样，只是传参方式不同

- call和apply都会执行对应的函数，而bind方法不会

```javascript
function sayHello(age, gender) {
  console.log('我是' + this.name + ',年龄' + age + ',性别' + gender)
}
var person = {
  name: '张三',
  sayHello: sayHello
}
var name = '李四'
var hello1 = person.sayHello
hello1.call(person, 18, '男')
hello1.apply(person, [18, '男'])

var hello2 = sayHello.bind(person)

hello2(18, '男')
```

### new绑定

在javaScript中，构造函数只是使用new操作符时被调用的函数，这些函数和普通的函数并没有什么不同

它不属于某个类，也不可能实例化出一个类。

任何一个函数都可以使用new来调用，因此其实并不存在构造函数，而只有对于函数的“构造调用”。

使用new来调用函数，会自动执行下面的操作

1. 创建一个空对象，构造函数中的this指向这个空对象

1. 这个新对象被执行 [[原型]] 连接

1. 执行构造函数方法，属性和方法被添加到this引用的对象中

1. 如果构造函数中没有返回其它对象，那么返回this，即创建的这个的新对象，否则，返回构造函数中返回的对象

模拟new的函数

```javascript
function _new() {
    let target = {}; //创建的新对象
    //第一个参数是构造函数
    let [constructor, ...args] = [...arguments];
    //执行[[原型]]连接;target 是 constructor 的实例
    target.__proto__ = constructor.prototype;
    //执行构造函数，将属性或方法添加到创建的空对象上
    let result = constructor.apply(target, args);
    if (result && (typeof (result) == "object" || typeof (result) == "function")) {
        //如果构造函数执行的结构返回的是一个对象，那么返回这个对象
        return result;
    }
    //如果构造函数返回的不是一个对象，返回创建的新对象
    return target;
}

var personFun =  function(name) {
 this.name = name
}

person.__proto__ === personFun.prototype
```

```javascript
function createPerson(name) {
  this.name = name
  this.sayHello = function() {
    console.log('我是' + this.name)
  }
}
var person = new createPerson('张三')

console.log('我是' + person.name)
person.sayHello()
```

null或者是undefined作为this的绑定对象传入call、apply或者是bind,这些值在调用时会被忽略，实际应用的是默认绑定规则

### 默认绑定

不属于前3种绑定的都属于默认绑定

this指向全局对象（非严格模式下），严格模式下，this指向undefined，undefined上没有this对象，会抛出错误

```javascript
function sayHello() {
  console.log('我是' + this.name)
}
var name = '张三'
var hello = sayHello
sayHello()
hello.call(null)
```

## 绑定优先级

如果同时应用了多种规则时，优先级为:

new绑定 > 显式绑定 > 隐式绑定 > 默认绑定

## 箭头函数

箭头函数没有自己的this，它的this继承于外层代码库中的this

```javascript
var person = {
  name: '张三',
  sayHello: function() {
    console.log('function 我是' + this.name)
    return () => {
      console.log('() => 我是' + this.name)
    }
  }
}
var name = '李四'

var sayHello1 = person.sayHello
var hello1 = sayHello1()
hello1()

var sayHello2 = person.sayHello.bind(person)
var hello2 = sayHello2()
hello2()
```

# 作用域

在运行时代码中的某些特定部分中变量，函数和对象的可访问性，作用域决定了代码区块中变量和其他资源的可见性

```javascript
var name = '李四'
function hello() {
  var name = '张三'
  console.log(name)
}
hello()
console.log(name)
```

## 全局作用域和函数作用域

作用域就是一个独立的地盘，让变量不会外泄、暴露出去，隔离变量，不同作用域下同名变量不会有冲突

ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域

全局作用域有个弊端，污染全局命名空间, 容易引起命名冲突

作用域是分层的，内层作用域可以访问外层作用域的变量

```javascript
function fun() {
  var age = 18
  window.gender = '男'
  name = '张三'
  console.log(name, window.gender, age)
}
fun()
// console.log(age)
console.log(gender)
console.log(name)
```

## 块级作用域

let和const声明，所声明的变量在指定块的作用域外无法被访问

注意点

- 声明变量不会提升到代码块顶部

- 禁止重复声明

- 循环中的绑定块作用域

```javascript
console.log(value1)
console.log(value2)
var value1 = 1
let value2 = 2
let value2 = 22

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  }
}
console.log('a[6]' + a[6]())
var b = []
for (let j = 0; j < 10; j++) {
  let k = '123'
  b[j] = function () {
    console.log(j);
  }
}
console.log('b[6]' + b[6]())
// console.log(k)
```

# 闭包

在理解闭包之前，有个重要的概念需要先了解一下，就是 js 执行上下文

## 执行上下文

当js引擎解析到可执行代码片段（通常是函数调用阶段）的时候，就会先做一些执行前的准备工作，这个 **“准备工作”**，就叫做 "执行上下文(execution context 简称 `EC`)" 或者也可以叫做**执行环境**。

> **执行上下文** 为我们的可执行代码块提供了执行前的必要准备工作，例如变量对象的定义、作用域链的扩展、提供调用者的对象引用等信息。

### 执行上下文的类型

- **全局执行上下文**：它是为运行代码主体而创建的执行上下文，也就是说它是为那些存在于函数之外的任何代码而创建的。

- **函数执行上下文**：每个函数会在执行的时候创建自己的执行上下文。

- **Eval 函数执行上下文**：使用 `eval()` 函数也会创建一个新的执行上下文。

### 执行上下文的创建

1. 确定 `this`，即我们所熟知的 `this` 绑定。

1. 创建 **词法环境（LexicalEnvironment）** 组件。

1. 创建 **变量环境组件（VariableEnvironment）** 组件。

### 词法环境

词法环境是一个包含标识符变量映射的结构，这里的标识符表示变量（函数）的名称，变量是对实际对象（包括函数类型对象）或原始值的引用。

如：`var name = 1;`。标识符是 `name`，引用是 `1`。

词法环境由**环境记录器**与对**外部环境的引用**两个组件组成。

- 环境记录器用于存储当前环境中的变量和函数声明的实际位置。

- 外部环境的引用对应着可以访问的其它外部环境。（所以子作用域可以访问父作用域）

### 创建变量环境

变量环境与词法环境十分相似。在 ES6 中，词法环境和变量环境的明显不同就是前者被用来存储函数声明和变量（let/const）的绑定，而后者只用来存储 var 变量的绑定。

## 闭包

闭包是由 **函数** 以及声明该函数的 **词法环境** 组合而成的。词法环境存储着父级词法环境（作用域）的引用

> **MDN 上面这么说**：**闭包是一种特殊的对象**。它由两部分构成：函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。

### 产生一个闭包

创建闭包最常见方式，就是在一个函数内部创建另一个函数

闭包的作用域链包含着它自己的作用域，以及包含它的函数的作用域和全局作用域。

```javascript
function func(){
  var a = 1,b = 2;
  
  function closure(){
    return a+b;
  }
  return closure;
}
```

### 闭包的注意事项

函数的作用域及其所有变量都会在函数执行结束后被销毁。但是，在创建了一个闭包以后，这个函数的作用域就会一直保存到闭包不存在为止

闭包只能取得包含函数中任何变量的最后一个值，这是因为闭包所保存的是整个变量对象，而不是某个特殊的变量

```javascript
function test(){
  var arr = [];
  for(var i = 0;i < 10;i++){
    arr[i] = function(){
      return i;
    };
  }
  for(var a = 0;a < 10;a++){
    console.log(arr[a]());
  }
}
test(); // 连续打印 10 个 10
```

### 闭包的应用

```text
function personInfo() {
  var name = '张三'
  return function() {
    console.log('我是' + name)
  }
}
var name = '李四'
var person = personInfo()
person()
function animalInfo() {
  var name = '动物'
  this.introduce = function() {
    return name
  }
}
var animal = new animalInfo()
console.info('这是一个' + animal.name)
console.info('这是一个' + animal.introduce())
```

闭包实现柯里化

## 柯里化

在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

```text
function animalAction(action, animalName) {
  console.log(animalName + '在' + action)
}
animalAction('跑', '小狗')
animalAction('睡觉', '小狗')
animalAction('跑', '小猫')
animalAction('睡觉', '小猫')
```

```text
var actionFun = _curry(animalAction)
var run = actionFun('跑')
var sleep = actionFun('睡觉')
run('小狗')
run('小猫')
sleep('小狗')
sleep('小猫')
run('小兔')
```

柯里化实际是把简答的问题复杂化了，但是复杂化的同时，我们在使用函数时拥有了更加多的自由度。 而这里对于函数参数的自由处理，正是柯里化的核心所在。 柯里化本质上是降低通用性，提高适用性。

从功能上通用性降低了，但适用性提升了。 柯里化的这种用途可以被理解为：**参数复用**

### 封装柯里化工具函数

我们有两种思路：

1. 通过函数的 length 属性，获取函数的形参个数，形参的个数就是所需的参数个数

1. 在调用柯里化工具函数时，手动指定所需的参数个数

```text
const curry = (fn, ...args) => 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
```















