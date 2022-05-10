# JavaScript基础(二)
## 一、事件冒泡与捕获

### 1、什么是事件冒泡、事件捕获

**事件冒泡**：最具体的元素接收，然后逐级向上传播到较为不具体的节点（IE提出）

**事件捕获**：不太具体的DOM节点应该更早接收到事件，而最具体的节点应该最后接收到事件（网景）

**DOM事件流**：事件流分为三个阶段：事件捕获阶段、目标阶段、事件冒泡阶段。目标阶段前不会触发事件。目标阶段以及事件冒泡阶段会触发事件。

我们现在浏览器默认的事件触发是遵循**DOM事件流**规则。

![](https://tcs-devops.aliyuncs.com/storage/112c50ad348d26c0ccb8a4995ce85f2b4409?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmM1MGFkMzQ4ZDI2YzBjY2I4YTQ5OTVjZTg1ZjJiNDQwOSJ9.KI5MEwKah9-V45F5qz8j6_HzFCQznqujPniid-D-oGc&download=image.png "")

```text
<div class="red">
  <div class="green">
    <div class="blue">
    </div>
  </div>
</div>

<script>
  const capture = false // 是否在捕获阶段就触发事件
  // 事件绑定
  document.querySelector('.red').addEventListener('click', (e) => {
    console.log('red')
  }, capture)
  document.querySelector('.green').addEventListener('click', (e) => {
    console.log('green')
    // 阻止事件继续传递(默认的情况下是阻止事件冒泡, 但是如果是捕获阶段可以阻止事件捕获)
    e.stopPropagation()
  }, capture)
  document.querySelector('.blue').addEventListener('click', (e) => {
    console.log('blue')
  }, capture)

</script>
```

运用场景：

由于事件冒泡机制， 有些场景中我们需要阻止事件的继续传递。例如我们常见的购物车页面，数量增减的点击事件需要阻止事件的继续传递。

![](https://tcs-devops.aliyuncs.com/storage/112c32752b4f00badd5dc5956a4e3a041746?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmMzMjc1MmI0ZjAwYmFkZDVkYzU5NTZhNGUzYTA0MTc0NiJ9.7PbDJVNSt-Ixb_jDZBBTuBKlaQJY97UtZ3S4NYSovgQ&download=df32dc5e89eaac65c23b2bd9be42255.jpg "")



## 二、原型与原型链

### 1、prototype

在JavaScript中，每个函数都有一个prototype属性，这个属性指向函数的原型对象。

例如： 有小黑和小白两条狗，他们都属于狗，所以他们都会有狗的特性，如：汪汪汪。

```text
function Dog(name) {
    this.name = name
}
Dog.prototype.wang = function () {
	console.log('汪汪汪')
}
var blackDog = new Dog('小黑')
var whiteDog = new Dog('小白')
console.log(blackDog.wang()) // 汪汪汪
console.log(whiteDog.wang())  // 汪汪汪
```

函数的prototype指向了一个对象，而这个对象正是调用构造函数时创建的实例的原型，也就是blackDog和whiteDog的原型。

**原型的概念**：每一个javascript对象(除null外)创建的时候，就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型中“继承”属性。例如：我们定义的每一个数组，都有数组的方法 push、shift等。

构造函数和实例原型之间的关系：

![](https://tcs-devops.aliyuncs.com/storage/112c44e8f22ef6b9a95bc39da711880c89f2?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmM0NGU4ZjIyZWY2YjlhOTViYzM5ZGE3MTE4ODBjODlmMiJ9.5hWEKJTdrtA7jHhWksrUFxsf14qL8qFdKOxr4IoWj-g&download=image.png "")



### 2、__proto__

这是每个对象(除null外)都会有的属性，叫做__proto__，这个属性会指向该对象的原型。

```text
function Dog(name) {
    this.name = name
}
var dog = new Dog();
console.log(dog.__proto__ === Dog.prototype); // true
```

关系: 

![](https://tcs-devops.aliyuncs.com/storage/112c9caab585e3b316de0e756c1e41313103?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmM5Y2FhYjU4NWUzYjMxNmRlMGU3NTZjMWU0MTMxMzEwMyJ9.BT4G8l-Rgr9HSykgDCJsSEE-7tI-Roc7Ahrenvb8Vlg&download=image.png "")

### 3、constructor

每个原型都有一个constructor属性，指向该关联的构造函数(构造器)。实例也有constructor属性，也指向该实例的构造函数。

```text
function Dog(name) {
    this.name = name
}
var dog = new Dog();
console.log(Dog===Dog.prototype.constructor)  //true
console.log(Dog===dog.constructor)  //true

```

### 4、实例与原型

当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。

如：

```text
function Dog(name) {
    this.name = name
}
Dog.prototype.wang = function () {
	console.log('汪汪汪')
}
var blackDog = new Dog('小黑')
var whiteDog = new Dog('小白')

// 教会小黑规律的叫
blackDog.wang = () => {
	console.log('汪, 汪汪, 汪汪汪汪汪汪')
}

console.log(blackDog.wang()) // 汪, 汪汪, 汪汪汪汪汪汪
console.log(whiteDog.wang())  // 汪汪汪
```

在例子中，blackDog 定义了 wang 的方法,所以读取时会优先读取blackDog 已经定义了的方法，若查不到再找原型的方法（whiteDog 找到了它原型有 wang方法）。若再找不到该方法，则会去找原型的原型的方法。

这里我们知道 blackDog 和 whiteDog 的原型指向 原型对象 Dog.prototype。那么 Dog.prototype 的原型又是什么呢？



### 5、原型的原型

原型对象(Dog.prototype)也是一个对象，既然是对象，我们就可以用最原始的方式创建它。或者我们可以直接 使用  `Dog.prototype.__proto__`  来看看它的原型是什么

```text
function Dog(name) {
    this.name = name
}

var blackDog = new Dog('小黑')

console.log(blackDog.__proto__.__proto__)
console.log(blackDog.__proto__.__proto__ === Object.prototype) // true
```

关系图: 

![](https://tcs-devops.aliyuncs.com/storage/112c75ef61d6b10112928ad03fb5a24de6c3?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmM3NWVmNjFkNmIxMDExMjkyOGFkMDNmYjVhMjRkZTZjMyJ9.mLV5dtDay7PjCEsvHcv-L1UaaTO67qq6Zds0y8twHeo&download=image.png "")



### 6、原型链

简单的回顾一下构造函数、原型和实例的关系：

每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。

那么假如我们让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立。如此层层递进，就构成了实例与原型的链条。这就是所谓的原型链的基本概念。

Object.prototype.__proto__ 的值为 null ， 或者说 Object.prototype 没有原型。

![](https://tcs-devops.aliyuncs.com/storage/112c0c2bc1f11b2ce78b86081bb4f1df7c3a?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU3MywiaWF0IjoxNjUxODk2NzczLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmMwYzJiYzFmMTFiMmNlNzhiODYwODFiYjRmMWRmN2MzYSJ9.nyFc0vzXtWrQWI0z1e5jQD6Gbr9xENcXFkoUfr6JJYQ&download=image.png "")

**原型链**: 相互关联的原型组成的链状结构就是原型链（橙色）

即： 实例 => 实例的原型 => 实例的原型的原型 => 实例的原型的原型的原型



### 参考文献:

原型与原型链：





## 会议视频

主题 :赵志星的快速会议

日期 :2021-12-08 19:01:52

录制文件：https://meeting.tencent.com/v2/cloud-record/share?id=cda8734e-b888-443b-90ae-393b6196ec30&from=3&is-single=true