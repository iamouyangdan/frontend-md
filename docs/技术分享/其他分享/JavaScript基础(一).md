# JavaScript基础(一)
## 前言

基础很重要，只有基础好才会很少出`bug`，大多数的`bug`都是基础不扎实造成的。

## 一、数据类型

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol、BigInt。

> **注：**

> `Symbol` 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

> `BigInt` 是一种内置对象，它提供了一种方法来表示大于  `2^53 - 1`  的整数。这原本是 Javascript中可以用 `Number` 表示的最大数字。

**引用数据类型**：

- 标准普通对象：`object`

- 标准特殊对象：`Array`、`RegExp`、`Date`、`Math`、`Error`……

- 非标准特殊对象：`Number`、`String`、`Boolean`……

- 可调用/执行对象「函数」：`function`

JavaScript是一门弱类型语言。即**变量当前的类型由其值所决定，变量**上一秒钟是`String`，下一秒可能就是个`Number`类型了。这个过程可能就进行了某些操作，变量发生了**强制类型转换**。



## 数据类型判断

### typeof

![](https://tcs-devops.aliyuncs.com/storage/112c253644f472f404f9c643b2a7a70d6977?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU4NCwiaWF0IjoxNjUxODk2Nzg0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmMyNTM2NDRmNDcyZjQwNGY5YzY0M2IyYTdhNzBkNjk3NyJ9.PaogI9nsX22dxVxU17-vInQ1N4XHwc0XtXTDzN4R9gA&download=image.png "")

### instanceof

> `instanceof` **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。语法：

> object instanceof constructor

> `object`：某个实例对象     `constructor`：某个构造函数

> 用来检测  `constructor.prototype `是否存在于参数  `object` 的原型链上。

```javascript
123 instanceof Number, //false
'dsfsf' instanceof String, //false
false instanceof Boolean, //false
[1,2,3] instanceof Array, //true
{a:1,b:2,c:3} instanceof Object, //true
function(){console.log('aaa');} instanceof Function, //true
undefined instanceof Object, //false
null instanceof Object, //false
new Date() instanceof Date, //true
/^[a-zA-Z]{5,20}$/ instanceof RegExp, //true
new Error() instanceof Error //true

```

### constructor

- `constructor` 是 `prototype` 对象上的属性，指向构造函数

```javascript
var num  = 123;
var str  = 'abcdef';
var bool = true;
var arr  = [1, 2, 3, 4];
var json = {name:'wenzi', age:25};
var func = function(){ console.log('this is function'); }
var und  = undefined;
var nul  = null;
var date = new Date();
var reg  = /^[a-zA-Z]{5,20}$/;
var error= new Error();

function Person(){}
var tom = new Person();

// undefined和null没有constructor属性
console.log(
    tom.constructor==Person,
    num.constructor==Number,
    str.constructor==String,
    bool.constructor==Boolean,
    arr.constructor==Array,
    json.constructor==Object,
    func.constructor==Function,
    date.constructor==Date,
    reg.constructor==RegExp,
    error.constructor==Error
);
//所有结果均为true

```

### toString

```text
// Vue 源码的检测方法
let _toString = Object.prototype.toString;

function toRawType (value) {
    // 获取 从第九个到倒数第二个字符
    // 比如 [object string]  获取 string
    return _toString.call(value).slice(8, -1)
}

// 严格的对象类型检查，只返回true
function isPlainObject (obj) {
	return _toString.call(obj) === '[object Object]'
}

```



## 类型转换的规则

问题1：如何让if(a == 1 && a == 2)条件成立？

答案：

```text
var a = {
  value: 0,
  valueOf: function() {
    this.value++;
    return this.value;
  }
};
console.log(a == 1 && a == 2);//true
```

问题2：

```text
var result = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
// result应该是？
```

**判空**

> `javaScript` 五种虚值，分别为 `undefined，null，false，""，0，NaN`

> `Javascript` 的设计是 **null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。**

### 显式类型转换

☀️**显式类型强制转换**是指当开发人员通过编写适当的代码用于在类型之间进行转换，比如：`Number(value)、String(value)、Boolean(value)`

```text
// 数值：转换后还是原来的值
Number(123) // 123

// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('123') // 123

// 字符串：如果不可以被解析为数值，返回 NaN
Number('123abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined：转成 NaN
Number(undefined) // NaN

// null：转成0
Number(null) // 0

Number({ a : 1 })
Number([ 1, 2, 3 ]) 
Number([ 5 ])
```

```text
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
```

```javascript
// boolean类型仅5种虚值转换为false，其他转换都为true
Boolean([]) // true
Boolean({}) // true
Boolean(new Error()) // true
Boolean(Symbol()) // true
```

> 5种虚值有：`undefined
、null
、+-0
、NaN、false、'' `

### 隐式类型转换

🌛**隐式类型转换**是指在对不同类型的值使用运算符时，值可以在类型之间自动的转换，比如 `1 == null`。

我们需要知道的是：**在 JS 中只有 3 种类型的转换**

- 转化为 Number 类型：`Number()` / `parseFloat()` / `parseInt()`

- 转化为 String 类型：`String()` / `toString()`

- 转化为 Boolean 类型: `Boolean()`

类型转换的逻辑无论在原始类型和对象类型上，他们都只会转换成上面 3 种类型之一。所以只需要弄清在**什么场景下**应该转成**哪种类型**就可以了



### 转换为boolean

☀️`显式`：`Boolean()`方法可以用来显式将值转换成布尔型。🌛`隐式`：隐式类型转换通常在逻辑判断或者有逻辑运算符时被触发（|| && !）。

```js copyable
Boolean(2)    // 显示类型转换
if(2) {}      // 逻辑判断触发隐式类型转换
!!2           // 逻辑运算符触发隐式类型转换
2 || 'hello'  // 逻辑运算符触发隐式类型转换
```

逻辑运算符（比如 || 和 &&）是在内部做了 boolean 类型转换，但实际上返回的是原始操作数的值，即使他们都不是 boolean 类型。

```js copyable
// 返回 number 类型 123，而不是 boolean 型 true
// 'hello' 和 '123' 仍然在内部会转换成 boolean 型来计算表达式
let x = 'hello' && 123  // x === 123
```

boolean 类型转换只会有 true 或者 false 两种结果。**除了“0/NaN/空字符串/null/undefined”五个值是false，其余都是true**

### 转换为string

☀️`显式`：`String()`方法可以用来显式将值转为字符串。

```js copyable
String([1,2,3])    //"1,2,3"
String({})    //"[object Object]"
```

🌛`隐式`：隐式转换通常在有 `+` 运算符并且有一个操作数是 string 类型时被触发。

“+”代表的字符串拼接，如果下面的情况存在时会触发转换

1. 有两边，一边是字符串，则会变成字符串拼接；

1. 有两边，一边是对象

```js copyable
1 + '123'  //"1123"
1 + {}     //"1[object Object]"
```

### 转换为number

☀️`显式`：`Number()`方法可以用来显式将值转换成数字类型。

- 字符串转换为数字：空字符串变为0，如果出现任何一个非有效数字字符，结果都是NaN

```js copyable
Number("")           //0
Number("10px")       //NaN
Number("10")         //10
```

- 布尔转换为数字

```js copyable
Number(true)         //1
Number(false)        //0
```

- null和undefined转换成数字

```js copyable
Number(null)         //0
Number(undefined)    //NaN
```

- Symbol无法转换为数字，会报错：Uncaught TypeError: Cannot convert a Symbol value to a number

```js copyable
Number(Symbol())     //Uncaught TypeError: Cannot convert a Symbol value to a number
```

- BigInt去除“n”

```js copyable
Number(12312412321312312n)     //12312412321312312
```

- 对象转换为数字，会按照下面的步骤去执行

1. 先调用对象的 `Symbol.toPrimitive` 这个方法，如果不存在这个方法

1. 再调用对象的 `valueOf` 获取原始值，如果获取的值不是原始值

1. 再调用对象的 `toString` 把其变为字符串

1. 最后再把字符串基于`Number()`方法转换为数字

```js copyable
let obj ={
    name:'xxx'
}
console.log(obj-10) // 数学运算：先把obj隐式转换为数字，再进行运算
//运行机制
obj[Symbol.toPrimitive] //undifined 
obj.valueof() // {name:xxx}
obj.toString() // [object object]
Number ("[object object]") // NaN
NaN-10 // NaN 
```

🌛`隐式`：number 的隐式类型转换是比较复杂的，因为它可以在下面多种情况下被触发。

- 比较操作（>, <, <=, >=）

- 按位操作（| & ^ ~）

- 算数操作（- + * / %）， **注意**：当 + 操作存在任意的操作数是 string 类型时，不会触发 number 类型的隐式转换

- 一元 + 操作

## 操作符==两边的隐式转换规则

如果两边数据类型不同，需要先转为相同类型，然后再进行比较，以下几种情况需要注意一下：

### 对象==字符串

将对象转换为字符串

```js copyable
[1,2,3]=='1,2,3'              //true
[1,2,3][Symbol.toPrimitive]   //undefined
[1,2,3].valueOf()             //[1, 2, 3]
[1,2,3].toString()            //"1,2,3"
```

### null/undefined

```js copyable
null==undefined      //true
null===undefined     //false
//null/undefined和其他任何值都不相等
```

### 对象==对象

比较的是堆内存地址，地址相同则相等

```js copyable
{}=={}      //false   因为比较的是地址
```

### NaN

除了以上情况，只要两边类型不一致，剩下的都是转换为数字，然后再进行比较

## 需要注意的情况

```js copyable
{} + [] === 0               // true
[] + {} === 0               // false

{} + []
/**
  * 对于编译器而言，代码块不会返回任何的值
  * 接着+[]就变成了一个强制转number的过程
  * []通过oPrimitive变成''，最后''通过ToNumber操作转换成0
  **/
{}; +[];
```



## 对象转原始类型

> [Symbol.*toPrimitive* - JavaScript | MDN](https://www.baidu.com/link?url=1DE97l59T0d9BcHHZWlUk2HztuD9l71rLhr0yFwA9XrYRt6O8gvt3Eh1qiLXKI3d0zS6DWMFmZccAS6ohjoOUe-m-5RAUJMgSjWLyhyh_mVizSvayd40dlRdx9w0zV1srTqzX4fe81F5ec9eMhN9ba&wd=&eqid=88ad6d2f0007913a0000000661a59319)

问题：下面代码在控制台运行的打印结果是什么？

```text
var obj = {
  value: 3,
  valueOf() {
    return 4;
  },
  toString() {
    return '5'
  },
  [Symbol.toPrimitive]() {
    return 6
  }
}
console.log(obj + 1);
```

对象转原始类型，会调用内置的[ToPrimitive]函数

优先级：Symbol.toPrimitive > valueOf > toString



## 二、ES6

> **ES5之后的JS语法统称ES6，语法参考：**[__https://es6.ruanyifeng.com/__](https://es6.ruanyifeng.com/#README)

## ES6新特性

### **1. let const**

let 表示申明变量。const 表示申明常量。

- 常量定义了就不能改了。对象除外，因为对象指向的地址没变。

- const在申明是必须被赋值。

- 两者都为块级作用域。

块级作用域与函数作用域。任何一对花括号（｛和｝）中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为块级作用域。函数作用域就好理解了，定义在函数中的参数和变量在函数外部是不可见的。

```js hljs javascript
const a = 1
a = 0 //报错

```

### **2. 模块字符串``**

可以使用反引号````来进行字符拼接。${}

### **3. 解构**

可以使用{}来对数组和对象进行解构。

![image](https://img2020.cnblogs.com/blog/2248381/202104/2248381-20210414104144879-669596972.png "")

![image](https://img2020.cnblogs.com/blog/2248381/202104/2248381-20210414104158304-1032889458.png "")

### **4. 函数的参数默认值**

函数传参可以有默认值

```js hljs javascript
// ES6；
function printText(text = 'default') {
    console.log(text);
}

```

### 5. Spread / Rest 操作符`...`

Spread / Rest 操作符指的是 ...，具体是 Spread 还是 Rest 需要看上下文语境。

- 当被用于迭代器中时，它是一个 Spread 操作符：迭代器 (Iterator)是按照一定的顺序对一个或多个容 器 中的元素行进遍历的一种机制

```js hljs javascript
function foo(x,y,z) {
  console.log(x,y,z);
}
 
let arr = [1,2,3];
foo(...arr); // 1 2 3

```

- 当被用于函数传参时，是一个 Rest 操作符：当被用于函数传参时，是一个 Rest 操作符：

```js hljs javascript
function foo(...args) {
  console.log(args);
}
foo( 1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]

```

### **6. 箭头函数**

- 不需要 function 关键字来创建函数

- 省略 return 关键字

- this始终指向函数申明时所在作用域下的this值

```js hljs javascript
//es5
var fun = function() {

}
//es6
var fn = () => {

}

```

### **7. for of**

- for of遍历的是键值对中的值

- for in遍历的是键值对中的键

### **8. class类**

ES6 中支持 class 语法，不过，ES6的class不是新的对象继承模型，它只是原型链的语法糖表现形式。

```js hljs javascript
class Student {
  constructor() {
    console.log("I'm a student.");
  }
 
  study() {
    console.log('study!');
  }
 
  static read() {
    console.log("Reading Now.");
  }
}
 
console.log(typeof Student); // function
let stu = new Student(); // "I'm a student."
stu.study(); // "study!"
stu.read(); // "Reading Now."

```

### **9. 导入导出**

- 导入improt

- 导出export default

### **10. promise**

Promise 用于更优雅地处理异步请求。

```js hljs javascript
  <script>
    new Promise((resolve,reject) => {
      setTimeout(function() {
        resolve('成功了！')
      },1000)
      // reject("失败了，wuwu")
    }).then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
  </script>

```

### **11. async/await**

比promise更好的解决了回调地狱。

```js hljs javascript
async function() {
  awiat fn()
}

```

### **12. Symbol**

新的基本类型

### **13. Set集合**

存储任何类型的唯一值，即集合中所保存的元素是不重复的。类数组结构。

```js hljs javascript
arr = [1,2,3,1]
let arrNew = new Set(arr)
arrNew = [1,2,3]
```

类数组不是数组，要转化为数组`Array.form(arrNew)`这样arrNew才是数组了

## 实际应用

### 一、关于取值

取值在程序中非常常见，比如从对象`obj`中取值。

```text
const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}
```

```text
const a = obj.a;
const b = obj.b;
const c = obj.c;
const d = obj.d;
const e = obj.e;
```

或者

```text
const f = obj.a + obj.d;
const g = obj.c + obj.e;
```

**改进**：

```text
const {a,b,c,d,e} = obj;
const f = a + d;
const g = c + e;
```

解构后的属性名不一致时：

```text
const {a:a1} = obj;
console.log(a1);// 1
```

**补充**

ES6的解构赋值虽然好用。但是要注意解构的对象不能为`undefined`、`null`。否则会报错，故要给被解构的对象一个默认值。

```text
const {a,b,c,d,e} = obj || {};
```

### 二、关于合并数据

比如合并两个数组，合并两个对象。

```text
const a = [1,2,3];
const b = [1,5,6];
const c = a.concat(b);//[1,2,3,1,5,6]

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
const obj = Object.assign({}, obj1, obj2);//{a:1,b:1}
```

**改进**

```text
const a = [1,2,3];
const b = [1,5,6];
const c = [...new Set([...a,...b])];//[1,2,3,5,6]

const obj1 = {
  a:1,
}
const obj2 = {
  b:1,
}
const obj = {...obj1,...obj2};//{a:1,b:1}
```

### 三、关于拼接字符串

```text
const name = '小明';
const score = 59;
let result = '';
if(score > 60){
  result = `${name}的考试成绩及格`; 
}else{
  result = `${name}的考试成绩不及格`; 
}
```

**改进**

```text
const name = '小明';
const score = 59;
const result = `${name}${score > 60?'的考试成绩及格':'的考试成绩不及格'}`;
```

### 四、关于if中判断条件

```text
if(
    type == 1 ||
    type == 2 ||
    type == 3 ||
    type == 4 ||
){
   //...
}
```

**改进**

```text
const condition = [1,2,3,4];

if( condition.includes(type) ){
   //...
}
```

### 五、关于列表搜索

在项目中，一些没分页的列表的搜索功能由前端来实现，搜索一般分为精确搜索和模糊搜索。搜索也要叫过滤，一般用`filter`来实现。

```text
const a = [1,2,3,4,5];
const result = a.filter( 
  item =>{
    return item === 3
  }
)
```

**改进**

`find`方法中找到符合条件的项，就不会继续遍历数组。

```text
const a = [1,2,3,4,5];
const result = a.find( 
  item =>{
    return item === 3
  }
)
```

### 六、关于扁平化数组

一个部门JSON数据中，属性名是部门id，属性值是个部门成员id数组集合，现在要把有部门的成员id都提取到一个数组集合中。

```text
const deps = {
'采购部':[1,2,3],
'人事部':[5,8,12],
'行政部':[5,14,79],
'运输部':[3,64,105],
}
let member = [];
for (let item in deps){
    const value = deps[item];
    if(Array.isArray(value)){
        member = [...member,...value]
    }
}
member = [...new Set(member)]
```

**改进**

```text
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity);
```

其中使用`Infinity`作为`flat`的参数，使得无需知道被扁平化的数组的维度，支持4维、5维深度的数组。

**补充**

`flat`方法不支持IE浏览器。

### 七、关于获取对象属性值的吐槽

```text
const name = obj && obj.name;
```

**改进**

```text
const name = obj?.name;
```

### 八、关于添加对象属性

当给对象添加属性时，如果属性名是动态变化的，该怎么处理。

```text
let obj = {};
let index = 1;
let key = `topic${index}`;
obj[key] = '话题内容';
```

**改进**

```text
let obj = {};
let index = 1;
obj[`topic${index}`] = '话题内容';
```

### 九、关于输入框非空的判断

在处理输入框相关业务时，往往会判断输入框未输入值的场景。

```text
if(value !== null && value !== undefined && value !== ''){
    //...
}
```

参考：

```text
if((value??'') !== ''){
  //...
}
```

### 十、关于异步函数

异步函数很常见，经常是用 Promise 来实现。

```text
const fn1 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 300);
  });
}
const fn2 = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 600);
  });
}
const fn = () =>{
   fn1().then(res1 =>{
      console.log(res1);// 1
      fn2().then(res2 =>{
        console.log(res2)
      })
   })
}
```

**改进**

```text
const fn = async () =>{
  const res1 = await fn1();
  const res2 = await fn2();
  console.log(res1);// 1
  console.log(res2);// 2
}
```

**补充**

但是要做并发请求时，还是要用到`Promise.all()`。

```text
const fn = () =>{
   Promise.all([fn1(),fn2()]).then(res =>{
       console.log(res);// [1,2]
   }) 
}
```

如果并发请求时，只要其中一个异步函数处理完成，就返回结果，要用到`Promise.race()`。

## 三、数组

![](https://tcs-devops.aliyuncs.com/storage/112c36797b8998a05c714e216ccd8e689f05?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU4NCwiaWF0IjoxNjUxODk2Nzg0LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmMzNjc5N2I4OTk4YTA1YzcxNGUyMTZjY2Q4ZTY4OWYwNSJ9.lviwHWhEbQaLNhlSq1jdUhzpvquaYR9jenm74OoP93I&download=image.png "")

生成类似[1-100]这样的的数组：

测试大量数据的数组时可以这样生成：

```text
// fill
const arr = new Array(100).fill(0).map((item, index) => index + 1)

// Array.from()
const arr = Array.from(Array(100), (v, k) => k + 1)

// ... + array.keys() 生成的是0-99的数组
const ary = [...Array(100).keys()] 
```

`new Array(100)` 会生成一个有100空位的数组，这个数组是不能被`map()，forEach(), filter(), reduce(), every() ，some()`遍历的，因为空位会被跳过（`for of`不会跳过空位，可以遍历）。 `[...new Array(4)]` 可以给空位设置默认值`undefined`，从而使数组可以被以上方法遍历。

### 数组解构赋值应用

```text
// 交换变量
[a, b] = [b, a]
[o.a, o.b] = [o.b, o.a]
// 生成剩余数组
const [a, ...rest] = [...'asdf'] // a：'a'，rest: ["s", "d", "f"]
```

### 数组浅拷贝

```text
const arr = [1, 2, 3]
const arrClone = [...arr]
// 对象也可以这样浅拷贝
const obj = { a: 1 }
const objClone = { ...obj }
```

浅拷贝方法有很多如`arr.slice(0, arr.length)/Arror.from(arr)`等，但是用了`...`操作符之后就不会再想用其他的了~

### 数组合并

```text
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
const arr = [...arr1, ...arr2, ...arr3]
```

`arr1.concat(arr2, arr3)`同样可以实现合并，但是用了`...`操作符之后就不会再想用其他的了~

### 数组去重

```text
const arr = [1, 1, 2, 2, 3, 4, 5, 5]
const newArr = [...new Set(arr)]
```

`new Set(arr)`接受一个数组参数并生成一个set结构的数据类型。set数据类型的元素不会重复且是`Array Iterator`，所以可以利用这个特性来去重。

### 数组取交集

```text
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const duplicatedValues = [...new Set(a)].filter(item => b.includes(item))
duplicatedValues // [3, 4, 5]
```

### 数组取差集

```text
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const diffValues = [...new Set([...a, ...b])].filter(item => !b.includes(item) || !a.includes(item)) // [0, 1, 2, 6, 7, 8]
```

### 数组转对象

```text
const arr = [1, 2, 3, 4]
const newObj = {...arr} // {0: 1, 1: 2, 2: 3, 3: 4}
const obj = {0: 0, 1: 1, 2: 2, length: 3}
// 对象转数组不能用展开操作符，因为展开操作符必须用在可迭代对象上
let newArr = [...obj] // Uncaught TypeError: object is not iterable...
// 可以使用Array.form()将类数组对象转为数组
let newArr = Array.from(obj) // [0, 1, 2]
```

### 数组摊平

```text
const obj = {a: '群主', b: '男群友', c: '女裙友', d: '未知性别'}
const getName = function (item) { return item.includes('群')}
// 方法1
const flatArr = Object.values(obj).flat().filter(item => getName(item))
// 经大佬指点，更加简化（发现自己的抽象能力真的差~）
const flatArr = Object.values(obj).flat().filter(getName)
```

二维数组用`array.flat()`，三维及以上用`array.flatMap()`。`array.flat(2)`可以传参数字如 2，表示要摊平的层数。

## 数组常用遍历

数组常用遍历有 `forEach、every、some、filter、map、reduce、reduceRight、find、findIndex` 等方法，很多方法都可以达到同样的效果。数组方法不仅要会用，而且要用好。要用好就要知道什么时候用什么方法。

### 遍历的混合使用

`filter`、`map`方法返回值仍旧是一个数组，所以可以搭配其他数组遍历方法混合使用。注意遍历越多效率越低~

```text
const arr = [1, 2, 3, 4, 5]
const value = arr
    .map(item => item * 3)
    .filter(item => item % 2 === 0)
    .map(item => item + 1)
    .reduce((prev, curr) => prev + curr, 0)
```

### 检测数组所有元素是否都符合判断条件

```text
const arr = [1, 2, 3, 4, 5]
const isAllNum = arr.every(item => typeof item === 'number')
```

### 检测数组是否有元素符合判断条件

```text
const arr = [1, 2, 3, 4, 5]
const hasNum = arr.some(item => typeof item === 'number')
```

### 找到第一个符合条件的元素/下标

```text
const arr = [1, 2, 3, 4, 5]
const findItem = arr.find(item => item === 3) // 返回子项
const findIndex = arr.findIndex(item => item === 3) // 返回子项的下标
const index = arr.indexOf(3) 
```

## 数组使用误区

数组的方法很多，很多方法都可以达到同样的效果，所以在使用时要根据需求使用合适的方法。

垃圾代码产生的很大原因就是数组常用方法使用不当，这里有以下需要注意的点：

### array.includes() 和 array.indexOf()

`array.includes()` 返回布尔值，`array.indexOf()` 返回数组子项的索引。`indexOf` 一定要在需要索引值的情况下使用。

```text
const arr = [1, 2, 3, 4, 5]

// 使用indexOf，需要用到索引值
const index = arr.indexOf(1) // 0
if (~index) { // 若index === -1，~index得到0，判断不成立；若index不为-1，则~index得到非0，判断成立。
    arr.spilce(index, 1)
}

// 使用includes，不需要用到索引值
// 此时若用indexOf会造成上下文上的阅读负担：到底其他地方有没有用到这个index?
const isExist = arr.includes(6) // true
if (!isExist) {
    arr.push(6)
}
```

`array.indexOf()`找 `NaN` 会找不到，返回`-1`，`array.includes()`能找到，返回`true`

```text
[NaN].includes(NaN) // true
[NaN].indexOf(NaN) // -1
```

### array.find() 、 array.findIndex() 和 array.some()

`array.find()`返回值是第一个符合条件的数组子项，`array.findIndex()` 返回第一个符合条件的数组子项的下标，`array.some()` 返回有无复合条件的子项，如有返回`true`，若无返回`false`。注意这三个都是短路操作，即找到符合条件的之后就不在继续遍历。在需要数组的子项的时候使用`array.find()` ；需要子项的索引值的时候使用 `array.findIndex()` ；而若只需要知道有无符合条件的子项，则用 `array.some()`。

```text
const arr = [{label: '男', value: 0}, {label: '女', value: 1}, {label: '不男不女', value: 2}]

// 使用some
const isExist = arr.some(item => item.value === 2)
if (isExist) {
    console.log('哈哈哈找到了')
}

// 使用find
const item = arr.find(item => item.value === 2)
if (item) {
    console.log(item.label)
}

// 使用findIndex
const index = arr.findIndex(item => item.value === 2)
if (~index) {
    const delItem = arr[index]
    arr.splice(index, 1)
    console.log(`你删除了${delItem.label}`)
}
```

建议在只需要布尔值的时候和数组子项是字符串或数字的时候使用 `array.some()`：

```text
// 当子包含数字0的时候可能出错
const arr = [0, 1, 2, 3, 4]

// 正确
const isExist = arr.some(item => item === 0)
if (isExist) {
    console.log('存在要找的子项，很舒服~')
}

// 错误
const isExist = arr.find(item => item === 0)
if (isExist) { // isExist此时是0，隐式转换为布尔值后是false
    console.log('执行不到这里~')
}


// 当子项包含空字符串的时候也可能出错
const arr = ['', 'asdf', 'qwer', '...']

// 正确
const isExist = arr.some(item => item === '')
if (isExist) {
    console.log('存在要找的子项，很舒服~')
}

// 错误
const isExist = arr.find(item => item === '')
if (isExist) { // isExist此时是''，隐式转换为布尔值后是false
    console.log('执行不到这里~')
}
```

### array.find() 和 array.filter()

只需要知道 `array.filter()` 返回的是所有符合条件的子项组成的数组，会遍历所有数组；而 `array.find()` 只返回第一个符合条件的子项，是短路操作。不再举例~

### 合理使用 Set 数据结构

由于 es6 原生提供了 `Set` 数据结构，而 `Set` 可以保证子项不重复，且和数组转换十分方便，所以在一些可能会涉及重复添加的场景下可以直接使用 `Set` 代替 `Array`，避免了多个地方重复判断是否已经存在该子项。

```text
const set = new Set()
set.add(1)
set.add(1)
set.add(1)
set.size // 1
const arr = [...set] // arr: [1]
```

### 强大的reduce（奇巧淫技）

`array.reduce` 遍历并将当前次回调函数的返回值作为下一次回调函数执行的第一个参数。利用 `array.reduce` 替代一些需要多次遍历的场景，可以极大提高代码运行效率。

1. 利用`reduce` 输出一个数字/字符串

假如有如下每个元素都由字母's'加数字组成的数组`arr`，现在找出其中最大的数字：（`arr`不为空）

```text
const arr = ['s0', 's4', 's1', 's2', 's8', 's3']

// 方法1  进行了多次遍历，低效
const newArr = arr.map(item => item.substring(1)).map(item => Number(item))
const maxS = Math.max(...newArr)

// 方法2  一次遍历
const maxS = arr.reduce((prev, cur) => {
  const curIndex = Number(cur.replace('s', ''))
  return curIndex > prev ? curIndex : prev
}, 0)
```

1. 利用`reduce` 输出一个数组/对象

```text
const arr = [1, 2, 3, 4, 5]

 // 方法1  遍历了两次，效率低
const value = arr.filter(item => item % 2 === 0).map(item => ({ value: item }))

// 方法1  一次遍历，效率高
const value = arr.reduce((prev, curr) => {
    return curr % 2 === 0 ? [...prev, { value: curr }] : prev
}, [])
```

掌握了上面两种用法，结合实际需要，就可以用 `reduce/reduceRight` 实现各种奇巧淫技了。实例：利用 `reduce` 做下面这样的处理来生成想要的 html 字符串：

```text
// 后端返回数据
const data = {
  'if _ then s9': [
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生'
    ],
  'if C then s4': [
    '当有条件时时,结构构件满足要求,要求属于安全性、适用性和耐久性',
    '当有条件时时,住宅结构满足要求,要求属于安全性、适用性和耐久性'
  ]
}

const ifthens = Object.entries(data).reduce((prev, cur) => {
  const values = cur[1].reduce((prev, cur) => `${prev}<p>${cur}</p>`, '')
  return `
    ${prev}
    <li>
      <p>${cur[0]}</p>
      ${values}
    </li>
  `
}, '')

const html = `
  <ul class="nlp-notify-body">
    ${ifthens}
  </ul>
`
```

生成的 html 结构如下：

```text
<ul class="nlp-notify-body">            
  <li>
    <p>if _ then s9</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
  </li>
  <li>
    <p>if C then s4</p>
    <p>当有条件时时,结构构件满足要求,要求属于安全性、适用性和耐久性</p>
    <p>当有条件时时,住宅结构满足要求,要求属于安全性、适用性和耐久性</p>
  </li>
</ul>
```

这里还有一个替代 `reverse` 函数的技巧由于 `array.reverse()` 函数会改变原数组自身，这样就限制了一些使用场景。如果我想要一个不会改变数组自身的 `reverse` 函数呢？拿走！

```text
const myReverse = (arr = []) => {
    return  arr.reduceRight((prev, cur) => [...prev, cur], []) // 也可以返回逗号表达式 (prev.push(cur), prev)
}
```

`reduce` 太强大了，这里只能展示基本用法。了解更多用法推荐查看这篇[《25个你不得不知道的数组reduce高级用法》](https://juejin.cn/post/6844904063729926152 "https://juejin.cn/post/6844904063729926152")

