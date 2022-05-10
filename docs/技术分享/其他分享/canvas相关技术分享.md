# canvas相关技术分享
## 一、初识canvas

**1、什么是canvas?**

`<canvas>` 是 `HTML5` 新增的，一个可以使用脚本(通常为 `JavaScript`) 在其中绘制图

像的 `HTML` 元素。它可以用来制作照片集或者制作简单(也不是那么简单)的动画，甚至可以

进行实时视频处理和渲染。

**2、canvas三要素**

id：作为唯一的标识

width：画布内容宽度的像素大小

height：画布内容高度的像素大小

*注意：如果不给 *`*<canvas>*`* 设置 *`*widht、height*`* 属性时，则默认 *`*width*`*为300、*`*height*`* 为 150，单位都是 *`*px*`*。也可以使用 *`*css*`* 属性来设置宽高，但是如宽高属性和初始比例不一致，他会出现扭曲。所以，建议永远不要使用 *`*css*`* 属性来设置 *`*<canvas>*`* 的宽高。*

```html
<canvas id="canvas" width="600" height="600"></canvas>
```

**3、替换内容**

由于某些较老的浏览器（尤其是 IE9 之前的 IE 浏览器）或者浏览器不支持 HTML 元素 `<canvas>`，在这些浏览器上你应该总是能展示替代内容。

支持 `<canvas>` 的浏览器会只渲染 `<canvas>` 标签，而忽略其中的替代内容。不支持 `<canvas>` 的浏览器则 会直接渲染替代内容。

```html
 <canvas id="canvas" width="600" height="600">
    你的浏览器不支持 canvas，请升级你的浏览器。
 </canvas>
```

## 二、canvas基本使用

*注意：canvas仅仅只是一个画布，绘制需要配合js来进行*

**1、创建画布**

```html
<canvas id="canvas1" width="600" height="600"></canvas>
```

**2、绘制**

```javascript
 // 1、找到画布对象
var canvas1 = document.querySelector('#canvas1')
// console.log(canvas1)
// 2、上下文对象（画笔）
var ctx = canvas1.getContext('2d')
// console.log(ctx)
// 3、绘制路径
ctx.rect(50, 50, 300, 300)
// 4、填充
ctx.fillStyle = '#0f87f0'
ctx.fill()
// 5、描边，渲染路径
ctx.lineWidth = 20
ctx.strokeStyle = '#0ff0a5'
ctx.stroke()
```

*注意：canvas的2D环境绘图坐标系统，原点（0，0）位于canvas元素的左上角顶点处，沿x轴向右为正值，沿y轴向下为正值*

![](https://tcs-devops.aliyuncs.com/storage/112b89f5447bde2c4b431481fb0bd2a4237b?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU5NSwiaWF0IjoxNjUxODk2Nzk1LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmI4OWY1NDQ3YmRlMmM0YjQzMTQ4MWZiMGJkMmE0MjM3YiJ9.o6SF-b8C5u3c6SYt93fA-chj0-eroc5vJ4mfxDGLgk8&download=image.png "")

## **三、canvas的属性及方法**

**1、颜色、样式和阴影**

| 属性            | 描述                    |
| ------------- | --------------------- |
| fillStyle     | 设置或返回用于填充绘画的颜色、渐变或模式。 |
| strokeStyle   | 设置或返回用于笔触的颜色、渐变或模式。   |
| shadowColor   | 设置或返回用于阴影的颜色。         |
| shadowBlur    | 设置或返回用于阴影的模糊级别。       |
| shadowOffsetX | 设置或返回阴影与形状的水平距离。      |
| shadowOffsetY | 设置或返回阴影与形状的垂直距离。      |

| 方法                     | 描述                    |
| ---------------------- | --------------------- |
| createLinearGradient() | 创建线性渐变（用在画布内容上）。      |
| createPattern()        | 在指定的方向上重复指定的元素。       |
| createRadialGradient() | 创建放射状/环形的渐变（用在画布内容上）。 |
| addColorStop()         | 规定渐变对象中的颜色和停止位置。      |

**2、线条样式**

| 属性         | 描述                    |
| ---------- | --------------------- |
| lineCap    | 设置或返回线条的结束端点样式。       |
| lineJoin   | 设置或返回两条线相交时，所创建的拐角类型。 |
| lineWidth  | 设置或返回当前的线条宽度。         |
| miterLimit | 设置或返回最大斜接长度。          |

**3、矩形**

| 方法           | 描述              |
| ------------ | --------------- |
| rect()       | 创建矩形。           |
| fillRect()   | 绘制"被填充"的矩形。     |
| strokeRect() | 绘制矩形（无填充）。      |
| clearRect()  | 在给定的矩形内清除指定的像素。 |

**4、路径**

| 方法                 | 描述                                 |
| ------------------ | ---------------------------------- |
| fill()             | 填充当前绘图（路径）。                        |
| stroke()           | 绘制已定义的路径。                          |
| beginPath()        | 起始一条路径，或重置当前路径。                    |
| moveTo()           | 把路径移动到画布中的指定点，不创建线条。               |
| closePath()        | 创建从当前点回到起始点的路径。                    |
| lineTo()           | 添加一个新点，然后在画布中创建从该点到最后指定点的线条。       |
| clip()             | 从原始画布剪切任意形状和尺寸的区域。                 |
| quadraticCurveTo() | 创建二次贝塞尔曲线。                         |
| bezierCurveTo()    | 创建三次贝塞尔曲线。                         |
| arc()              | 创建弧/曲线（用于创建圆形或部分圆）。                |
| arcTo()            | 创建两切线之间的弧/曲线。                      |
| isPointInPath()    | 如果指定的点位于当前路径中，则返回 true，否则返回 false。 |

**5、转换**

| 方法             | 描述                             |
| -------------- | ------------------------------ |
| scale()        | 缩放当前绘图至更大或更小。                  |
| rotate()       | 旋转当前绘图。                        |
| translate()    | 重新映射画布上的 (0,0) 位置。             |
| transform()    | 替换绘图的当前转换矩阵。                   |
| setTransform() | 将当前转换重置为单位矩阵。然后运行 transform()。 |

**6、文本**

| 属性           | 描述                    |
| ------------ | --------------------- |
| font         | 设置或返回文本内容的当前字体属性。     |
| textAlign    | 设置或返回文本内容的当前对齐方式。     |
| textBaseline | 设置或返回在绘制文本时使用的当前文本基线。 |

| 方法            | 描述              |
| ------------- | --------------- |
| fillText()    | 在画布上绘制"被填充的"文本。 |
| strokeText()  | 在画布上绘制文本（无填充）。  |
| measureText() | 返回包含指定文本宽度的对象。  |

**7、图像绘制**

| 方法          | 描述              |
| ----------- | --------------- |
| drawImage() | 向画布上绘制图像、画布或视频。 |

**8、像素操作**

| 属性     | 描述                               |
| ------ | -------------------------------- |
| width  | 返回 ImageData 对象的宽度。              |
| height | 返回 ImageData 对象的高度。              |
| data   | 返回一个对象，其包含指定的 ImageData 对象的图像数据。 |

| 方法                | 描述                                  |
| ----------------- | ----------------------------------- |
| createImageData() | 创建新的、空白的 ImageData 对象。              |
| getImageData()    | 返回 ImageData 对象，该对象为画布上指定的矩形复制像素数据。 |
| putImageData()    | 把图像数据（从指定的 ImageData 对象）放回画布上。      |

**9、合成**

| 属性                       | 描述                     |
| ------------------------ | ---------------------- |
| globalAlpha              | 设置或返回绘图的当前 alpha 或透明值。 |
| globalCompositeOperation | 设置或返回新图像如何绘制到已有的图像上。   |

**10、其他**

| 方法            | 描述               |
| ------------- | ---------------- |
| save()        | 保存当前环境的状态。       |
| restore()     | 返回之前保存过的路径状态和属性。 |
| createEvent() |                  |
| getContext()  |                  |
| toDataURL()   |                  |

## 四、canvas绘制线段

**1、基本步骤**

1. 创建路径起始点

1. 调用绘制方法去绘制出路径

1. 把路径封闭

1. 一旦路径生成，通过描边或填充路径区域来渲染图形。

**2、需要用到的方法**

1.  `beginPath()`新建一条路径，路径一旦创建成功，图形绘制命令被指向到路径上生成路径 

1.  `moveTo(x, y)`把画笔移动到指定的坐标`(x, y)`。相当于设置路径的起始点坐标。 

1.  `closePath()`闭合路径之后，图形绘制命令又重新指向到上下文中 

1.  `stroke()`通过线条来绘制图形轮廓 

1.  `fill()`通过填充路径的内容区域生成实心的图形 

**3、例子**

```html
<canvas id="tutorial" width="600" height="600"></canvas>
```

```javascript
var tutorial = document.querySelector('#tutorial')
var ctx = tutorial.getContext('2d')

// 新建一条路径
ctx.beginPath()
// 设置绘制的起始点
ctx.moveTo(50, 50)
// 设置经过某个位置
ctx.lineTo(50, 300)
//闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
ctx.closePath()
// 绘制路径
ctx.lineWidth = 20 // 线段宽度
ctx.strokeStyle = '#0ff0a5' // 线段颜色
ctx.stroke()
```

## 五、canvas绘制圆

**1、方法1**

**arc(x, y, r, startAngle, endAngle, anticlockwise)**: 以`(x, y)` 为圆心，以`r` 为半径，从 `startAngle` 弧度开始到`endAngle`弧度结束。`anticlosewise` 是布尔值，`true` 表示逆时针，`false` 表示顺时针(默认是顺时针)。

例子：

```html
<canvas id="circle" width="600" height="600"></canvas>
```

```javascript
var circle = document.querySelector('#circle')
var ctx = circle.getContext('2d')
ctx.arc(300, 300, 100, 0, Math.PI, false)
ctx.stroke()
```



**2、方法2**

**arcTo(x1, y1, x2, y2, radius)**: 根据给定的控制点和半径画一段圆弧，最后再以直线连接两个控制点。

例子：

```html
<canvas id="circle" width="600" height="600"></canvas>
```

```javascript
 var circle = document.querySelector('#circle')
 var ctx = circle.getContext('2d')
 ctx.beginPath()
 ctx.moveTo(50, 50)
 //参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
 ctx.arcTo(200, 50, 200, 200, 100)
 ctx.lineTo(200, 200)
 ctx.stroke()
```

## 六、绘制文本

**1、**`**fillText(text, x, y [, maxWidth])**`** 在指定的 **`**(x,y)**`** 位置填充指定的文本，绘制的最大宽度是可选的。**

**2、**`**strokeText(text, x, y [, maxWidth])**`** 在指定的 (x,y) 位置绘制文本边框，绘制的最大宽度是可选的。**

例子：

```html
<canvas id="text" width="600" height="600"></canvas>
```

```javascript
 var text = document.querySelector('#text')
 var ctx = text.getContext('2d')
 ctx.font = "100px sans-serif"
 ctx.fillText("Hello World", 10, 100)
 ctx.strokeText("Hello World", 10, 200)
```

## 七、canvas绘制图片

**1、创建图片**

```html
<canvas id="image" width="600" height="600"></canvas>
```

```javascript
 var text = document.querySelector('#image')
 var ctx = text.getContext('2d')
 // 1、创建一个<img>元素
 var img = new Image()
 // 2、设置图片源地址
 img.src = './img/cat.jpeg'
 img.onload = function() {
    // 参数 1：要绘制的 img  
 	// 参数 2、3：绘制的 img 在 canvas 中的坐标
   ctx.drawImage(img, 0, 0)
 }
```

**2、绘制 **`**img**`** 标签元素中的图片**

`img` 可以 `new` 也可以来源于我们页面的 `<img>`标签。

```html
<img src="./img/cat.jpeg">
<canvas id="image" width="600" height="600"></canvas>
```

```javascript
 var text = document.querySelector('#image')
 var ctx = text.getContext('2d')
 ctx.font = "100px sans-serif"
 var img = document.querySelector("img");
 img.onload = function() {
 ctx.drawImage(img, 0, 0)
 // 加上文字
 ctx.fillText('Hi~', 200, 300)
 }
```

**3、缩放图片**

`drawImage()` 也可以再添加两个参数：

```text
drawImage(image, x, y, width, height)
```

这个方法多了 2 个参数：`width` 和 `height`，这两个参数用来控制 当像 canvas 画入时应该缩放的大小。

```html
<canvas id="image" width="600" height="600"></canvas>
```

```javascript
  var text = document.querySelector('#image')
  var ctx = text.getContext('2d')
  var img = new Image()
  img.src = './img/cat.jpeg'
  img.onload = function() {
  ctx.drawImage(img, 0, 0, 200, 200)
  }
```

**4、图片切片**

```text
// drawImage(图片对象，图像裁剪的位置x，图像裁剪的位置y,裁剪的宽度，裁剪的高度，x位置，y位置，宽度，高度)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

```html
<canvas id="image" width="600" height="600"></canvas>
```

```javascript
 var text = document.querySelector('#image')
 var ctx = text.getContext('2d')
 var img = new Image()
 img.src = './img/cat.jpeg'
 img.onload = function() {
 ctx.drawImage(img, 100, 0, 200, 400, 0, 0, 200, 200)
 }
```

## 参考资料

[**HTML5**  **参考手册**](https://www.runoob.com/tags/ref-canvas.html)

[**学习 HTML5 Canvas 这一篇文章就够了**](https://www.runoob.com/w3cnote/html5-canvas-intro.html)

## 源码

[https://github.com/Pizhong/cavans-learn](https://github.com/Pizhong/cavans-learn)

## 练习

![](https://tcs-devops.aliyuncs.com/storage/112ba13232939dbf79f40cd168c59fdea1e1?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTU5NSwiaWF0IjoxNjUxODk2Nzk1LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmJhMTMyMzI5MzlkYmY3OWY0MGNkMTY4YzU5ZmRlYTFlMSJ9.ODjXRTMx5bPoFei1xFtYmgYk1uol9HuJ4vnZ43h4GGg&download=0ede49d4de39696fe19790f63feaf08.png "")



 