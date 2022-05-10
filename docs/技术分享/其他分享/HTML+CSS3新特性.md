# HTML+CSS3新特性
## HTML5新特性

- 语义化标签

- WebStorage

- 等等

## 语义化标签

> 优点：使用语义化标签能让开发者更好地阅读、理解以及搜索引擎解析()

| 标签         | 描述                |
| ---------- | ----------------- |
| `<header>`   | 定义了文档的头部区域        |
| `<footer>`   | 定义了文档的尾部区域        |
| `<nav>`      | 定义文档的导航           |
|  `<section>` |  定义文档中的节          |
|  `<article>` |  定义文章             |
|  `<aside>`   |  定义页面以外的内容        |
|  `<details>` | 定义用户可以看到或者隐藏的额外细节 |
|  `<summary>` | 标签包含details元素的标题  |
|  `<dialog>`  | 定义对话框             |
| `<figure>`   | 定义自包含内容，如图表       |
| `<main>`     | 定义文档主内容           |
| `<mark>`     | 定义文档的主内容          |
| `<time>`     | 定义日期/时间           |

![](https://tcs-devops.aliyuncs.com/storage/112bf0b472eccc0e3d15af75919eb0a62130?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTM2OSwiaWF0IjoxNjUxODk2NTY5LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmJmMGI0NzJlY2NjMGUzZDE1YWY3NTkxOWViMGE2MjEzMCJ9.UZQnjltejViHgrDF4DvhInjLrPLAtUV4pbx59P0BHU8&download=image.png "")

## 增强型表单

| 输入类型           | 描述             |
| -------------- | -------------- |
| color          | 主要用于选取颜色       |
| date           | 选取日期           |
| datetime       | 选取日期(UTC时间)    |
| datetime-local | 选取日期（无时区）      |
| month          | 选择一个月份         |
| week           | 选择周和年          |
| time           | 选择一个时间         |
| email          | 包含e-mail地址的输入域 |
| number         | 数值的输入域         |
| url            | url地址的输入域      |
| tel            | 定义输入电话号码和字段    |
| search         | 用于搜索域          |
| range          | 一个范围内数字值的输入域   |

### 新增表单元素

| `<datalist>` | 用户会在他们输入数据时看到域定义选项的下拉列表 |
| ---------- | ----------------------- |
| `<progress>` | 进度条，展示连接/下载进度           |
| `<meter>`    | 刻度值，用于某些计量，例如温度、重量等     |
| `<keygen>`   | 提供一种验证用户的可靠方法生成一个公钥和私钥  |
| `<output>`   | 用于不同类型的输出比如尖酸或脚本输出      |

### 新增表单属性

| 属性           | 描述                        |
| ------------ | ------------------------- |
| placehoder   | 输入框默认提示文字                 |
| required     | 要求输入的内容是否可为空              |
| pattern      | 描述一个正则表达式验证输入的值           |
| min/max      | 设置元素最小/最大值                |
| step         | 为输入域规定合法的数字间隔             |
| height/wdith | 用于image类型`<input>`标签图像高度/宽度 |
| autofocus    | 规定在页面加载时，域自动获得焦点          |
| multiple     | 规定`<input>`元素中可选择多个值        |

## 音视频

> 音频： `<audio src=""></audio>`

```text
<audio controls>    //controls属性提供添加播放、暂停和音量控件。
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
您的浏览器不支持 audio 元素。        //浏览器不支持时显示文字
</audio>
```

> 视频：`<video src=""></video>`

```text
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
您的浏览器不支持Video标签。
</video>
```

## Canvas绘图

> 该标签默认样式为：`width: 300px; height:150px; display: inline-block`，其中宽高只能使用HTML/JS属性设定，无法使用CSS设定





## WebStorage

> 在浏览器中存储自定义数据

> 主要有：sessionStorage、localStorage

### 现有客户端存储数据技术：

- Cookie：浏览器兼容性好，但内容不能超过4KB

- ~~Flash存储：依赖Flash播放器~~

- WebStorage：不能超过8MB

- IndexedDB：可存大量数据（非标准）

### sessionStorage

> key-value式对象存储，相同网站共享，浏览器关闭则数据消失

```text
// 保存数据
sessionStorage[key] = value
// equalTo
sessionStorage.setItem(key, value)
​
// 读取数据
var value = sessionStorage[key]
// equalTo
var value = sessionStorage.getItem(key)
​
// 删除
sessionStorage.removeItem(key)
// 清除所有
sessionStorage.clear()
// 数据量
sessionStorage.length
// 获取第i个key
sessionStorage.key(i)
```

### localStorage

> 与`sessionStorage`使用无差别，但数据可永久存在

## CSS3新特性

> 选择器、边框、背景、渐变、文本效果、字体、转换和变形、过渡、动画、多列、盒子模型、弹性盒子模型、多媒体查询等等

- [选择器](https://www.runoob.com/cssref/css-selectors.html)

- [边框](https://www.runoob.com/cssref/css-reference.html#border)

- 。。。

## CSS选择器优先级





`(内联样式, id选择, 类选择、属性、伪类, 标签选择、伪元素)`

> 伪类与伪元素区别：伪元素可在文档流插入内容，而伪类则表示状态、顺序等



- 权重相同，后面覆盖前面

- `!important`优先级最高

## CSS基础





### BFC 定义

> BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

### Box：css布局的基本单位

Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。

> block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；

> inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；

### Formatting Context

> Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。



> BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

### BFC的布局规则

- 内部的盒子元素会在垂直方向顺序排列

- 盒子垂直方向的距离由margin决定。同属一个BFC的相邻盒子的margin会重叠

- 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

- BFC的区域不会与float box重叠。

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- 计算BFC的高度时，浮动元素也参与计算。

### 如何创建BFC

- float不为none

- position不为static/relative

- display为inline-block、table-cell、flex、table-caption或者inline-flex

- overflow的值不是visible

### BFC例子

1. 解决margin重叠

1. 自适应两栏布局

1. 清除浮动

## CSS常用布局











