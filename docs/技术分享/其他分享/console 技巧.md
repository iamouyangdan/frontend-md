# console 技巧
# 简介

Console 对象用于 JavaScript 调试。

JavaScript 原生中默认是没有 Console 对象,这是宿主对象（浏览器、node.js环境）提供的内置对象。 用于访问调试控制台, 在不同的浏览器里效果可能不同。



Console 对象常见的两个用途：

- 显示网页代码运行时的错误信息。

- 提供了一个命令行接口，用来与网页代码互动。



以 Chrome浏览器为例，我们可以通过按 F12 或者 Control+Shift+i（PC平台）/ Option+Command+i（Mac平台）来打开 Console 窗口。



# console对象方法

![](https://cdn.nlark.com/yuque/0/2021/png/2181619/1635065434366-91d49914-03e7-4231-bd6a-6433369872e5.png "")



# console对象方法的使用

## assert()

**描述：**

如果断言为false，则将一个错误消息写入控制台。如果断言是 true，没有任何反应。

assert方法接受两个参数，第一个参数是表达式(断言)，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

**实例：**

```javascript
console.assert(true === false, "判断条件不成立")
// Assertion failed: 判断条件不成立
```

## clear()

**描述：**

清除当前控制台的所有输出，将光标回置到第一行。

需要的注意的一点是在Google Chrome浏览器中，如果用户在设置中勾选了“Preserve log”选项，console.clear()将不会起作用。 

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

**实例：**

```text
console.clear()
```

## context()

**描述：**打印出所有的console对象的方法(除了本身console.text()不会被打印出来)

## count()

**描述：**

用于计数，输出它被调用了多少次。

如果有 label，此函数输出为那个指定的 label 和 count() 被调用的次数。

如果 label 被忽略，此函数输出 count() 在其所处位置上被调用的次数。

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

**实例：**

```javascript
(function() {
  for (var i = 0; i < 5; i++) { 
    console.count('count'); 
  }
})();
```

## countReset()

**描述：**

重置计数器。此函数有一个可选参数 label(字符串)， 若传入此参数 countReset() 重置此label的count为0。

若忽略此参数  countReset() 重置count()默认的 default 字段的count为0

**实例：**

console.countReset('count')



## debug()

**描述：**输出“调试”级别的消息且仅仅控制台配置为显示调试输出时才显示该消息。



## dir()

**描述：**在控制台中显示指定JavaScript对象的属性，并通过类似文件树样式的交互列表显示。

**非标准:** 该特性是非标准的，请尽量不要在生产环境中使用它！

**实例：**

```text
console.dir(document)
```

## dirxml()

**描述：**显示一个明确的XML/HTML元素的包括所有后代元素的交互树。 如果无法作为一个element被显示，那么会以JavaScript对象的形式作为替代。 它的输出是一个继承的扩展的节点列表，可以让你看到子节点的内容。

**实例：**

```text
console.dirxml(document)
```

## error()

**描述：**输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈。

**实例：**

```text
console.error("Error")
```



## group()

**描述：**用于将显示的信息分组，可以把信息进行折叠和展开。

**实例：**

```javascript
console.group('第一层');
  console.group('第二层');

    console.log('error');
    console.error('error');
    console.warn('error');

  console.groupEnd(); 
console.groupEnd();
```



## groupCollapsed()

**描述：**

与console.group方法很类似，唯一的区别是该组的内容，在第一次显示时是收起的（collapsed），而不是展开的。

**实例：**

```javascript
console.groupCollapsed('第一层');
  console.groupCollapsed('第二层');

    console.log('error');
    console.error('error');
    console.warn('error');

  console.groupEnd(); 
console.groupEnd();
```



## groupEnd()

**描述：**结束内联分组

## info()

**描述：**console.log 别名，输出信息



## log()

**描述：**输出信息

## memory()

**描述：**查看浏览器内存信息，以字节计算（Byte）

jsHeapSizeLimit: 内存大小限制

totalJSHeapSize: 可使用的内存

usedJSHeapSize: JS对象(包括V8引擎内部对象)占用的内存，不能大于totalJSHeapSize，如果大于，有可能出现了内存泄漏

ps: 1Byte = 8bit  1KB = 1024Bytes  1MB = 1024KB  1GB = 1024MB  1TB = 1024GB



## table()

**描述：**将复合类型的数据转为表格显示。

**实例：**

```javascript
	
var arr= [ 
         { num: "1"},
         { num: "2"}, 
         { num: "3" }
    ];
console.table(arr);

var obj= {
     a:{ num: "1"},
     b:{ num: "2"},
     c:{ num: "3" }
};
console.table(obj);
```



## time()

**描述：**计时开始

**实例：**

```javascript
console.time('计时器1');
for (var i = 0; i < 100; i++) {
  for (var j = 0; j < 100; j++) {
	console.timeLog('计时器1')
  }
}
console.timeEnd('计时器1');
console.time('计时器2');
for (var i = 0; i < 1000; i++) {
  for (var j = 0; j < 1000; j++) {}
}
console.timeEnd('计时器2');
```

## timeEnd()

**描述：**计时结束

## timeLog()

**描述：**在控制台输出计时器的值，该计时器必须已经通过 [console.time()](https://developer.mozilla.org/zh-CN/docs/Web/API/Console/time) 启动。

## trace()

**描述：**追踪函数的调用过程

**实例：**

```javascript
function d(a) { 
  console.trace();
  return a;
}
function b(a) { 
  return c(a);
}
function c(a) { 
  return d(a);
}
var a = b('123');
```

## warn()

**描述：**输出警告信息

**实例：**

```javascript
console.warn("警告")
```





# console占位符

| 占位符      | 作用               |
| -------- | ---------------- |
| %s       | 字符串              |
| %d or %i | 整数               |
| %f       | 浮点数              |
| %o       | 可展开的DOM          |
| %O       | 列出DOM的属性         |
| %c       | 根据提供的css样式格式化字符串 |

实例：

```javascript
console.log('%o',document.body); 
console.log("%d年%d月%d日",2021,10,26);
console.log('%c雷\n神','color:red;font-size:50px;background:url("https://p9-passport.byteacctimg.com/img/user-avatar/c00d0e8abc382d1e49a0d5003960f6f3~300x300.image");background-size:100%')
```

# node.js中的console

node.js中可以创建Console实例，stdout 是用于打印日志或信息输出的可写流。 stderr 用于警告或错误输出。

```javascript
const fs = require('fs')
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// 自定义的简单记录器
const logger = new Console({ stdout: output, stderr: errorOutput });
// 像控制台一样使用它
const count = 5;
logger.log('count: %d', count);
logger.error('error: %d', count)
```

console.dirxml()

此方法调用 console.log() 将接收到的参数传给它。 此方法不会产生任何 XML 格式。



## 其他调试技巧

**浏览器断点调试**

适合看源码之类的比较复杂的代码，不复杂的代码调试还是console.log()方便





**移动端调试**

**vconsole**



**weinre**



**通过USB、手机端加电脑端浏览器进行调试**





# 资料











