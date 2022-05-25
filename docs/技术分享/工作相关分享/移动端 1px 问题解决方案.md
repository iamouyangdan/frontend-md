# 移动端 1px 问题解决方案
> 作者：前端工匠 公号 / 糖醋草莓皮（本文来自作者投稿）



## 高清屏中1px线问题

在移动端web开发中，UI设计稿中设置边框为1像素，前端在开发过程中如果出现border:1px，测试会发现在retina屏机型中，1px会比较粗，即是较经典的移动端1px像素问题。

## 为什么高清屏下1px更宽

高清屏（retina屏）是指**高dpr的设备**，其**物理像素的密度更大**。又分为有两倍屏，三倍屏。

> dpr:物理像素/css像素

在**普通屏**，**1个css像素对应1个物理像素**；**2倍屏中**，**一个css像素对应4个物理像素**；三倍屏中则是9个。

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image1.png)

按照这样的置换规则后一张相同的图片在不同的设备上才会显示相同的大小。

1px的线在高清屏下本应不需要做特殊处理。两倍屏下会自动用**两排**物理像素去展示‘1px’的细线，普通屏用**一排**物理像素去展示‘1px’的细线，他们应该看起来是相同的。但是，就像数学中的概念：线是没有宽度的，点是没有大小的。像素同样是没有大小的。

**两倍屏的物理像素密度是普通屏的两倍**，并不是每一个物理像素是普通屏的1/4大小，而**是物理像素的间距是普通屏间距的1/2。**

**用两倍屏下用两排像素去展示**，自然会比普通屏中用一排像素去展示**看起来更粗**。

**如何修正高清屏下的1px问题**

要解决1px问题，本质就是**让高清屏用一个物理像素去展示一个css像素**。

可以按照不同屏幕的dpr作出转换，比如在2倍屏下将1px的细线写成`border:0.5px`。但这种方法只在ios上支持，安卓上会显示成被当成0px处理。

更通用的方案中，有**svg**和**伪类元素**两种。

## SVG方案

这种方案本质上**border并没有变细**，但是boder被一分为二，**靠内侧的是透明的**。

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image2.png)

关键的样式代码是css中的svg生成函数。

> SVG即矢量图，用xml标签写在html文件中。

通过`postcss-write-svg`这个postcss插件**将css中svg函数生成的图像处理成base64**。这样就可以在css文件直接调用svg函数。

```text

/* src/index.css */
@svg custom-name { 
  width: 4px;  
  height: 4px;  
   @rect {
       fill: transparent;
       width: 100%;
       height: 100%;
       stroke-width: 1;
       stroke: var(--color, black);  
    }
}
.svg-retina-border {
    border: 1px solid;
    border-image: svg(custom-name param(--color green)) 1 repeat;
}
.normal-border {
    border: 1px solid green;
}


```

处理过后的样子

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image3.png)

**剩余完整代码**

```text
import './index.css'
const root = document.getElementById('root')
const div2 = document.createElement('div')
div2.innerHTML = 'SVG-retina-border'
div2.className = 'svg-retina-border'
root.append(div2)
root.append(document.createElement('br'))
const div3 = document.createElement('div')
div3.innerHTML = 'normal-border'
div3.className = 'normal-border'
root.append(div3)


<!-- src/index.html -->
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />    	 		 <title>Document</title>
    </head>  
    <body>    	
        <div id="root"></div>  
    </body>
</html>

```

```text
// webpack.config.js
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
    entry: {
    	entry1: './src/index.js'  
    },  
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'  
    },  
    module: {
    	rules: [{
        	test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }]  
    },  
    plugins: [
    	new HtmlPlugin({
        	template: './src/index.html'    
        }) 
    ],  
    devServer: {
    	contentBase: path.resolve(__dirname, 'dist'),
        host: '0.0.0.0', 
        port: 3005,
        compress: true,
        disableHostCheck: true  
    }
}

```

SVG

分别直接用xml的svg标签和css实现了两个100px，边框宽为1的矩形。

高清屏下效果如下。

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image4.png)

```xml

  <-- 视口大小-->  
  <svg xmlns="custom-namespace" width="100" height="100">
      <rect        
      <--矩形大小-->
      width="100"
      height="100"
      fill="transparent"
      <--svg中所有的单位都是px-->
      stroke-width="1"
      stroke="black"      
      />    
  </svg>    
  <div style="width: 100px;height: 100px;border: 1px solid black;box-sizing: border-box;"></div>

```

`stroke-width`和`border`一样，都将矩形的边设为了1px，但是用svg实现的矩形边框看起来却更细。**关键的地方**是使用svg标记的**视口大小**和使用rect标记的**矩形大小**是**相同的**。

svg中没有盒模型的概念，它的**stroke**画线并**不是对应css中的border**。**更像是不占空间的outline**。因为不占空间，它会以rect（矩形）的边界为**中心画线，一条线一半宽度在矩形内，一半在矩形外**。

**而因为视口宽度正好等于矩形的大小，看到的线宽就只有一半了**。

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image5.png)

（用**svg**画一个100px大小+1px边宽的方形）

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image6.png)

(用css画一个100px大小+1px边框的方形**border-box)**

如果把矩形缩小一点，不占满视口，这时候看到的border是完整的，所以和没处理过的1px一样粗。

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image7.png)

border-image

border-image是三个属性的缩写

```text

border-image-source: url('https://misc.aotu.io/leeenx/border-image/box.png');
border-image-slice: 33% 20% 3 fill;
border-image-repeat: stretch;

```

- border-image-source：图片链接或base64；

- border-image-slice：图片切割的四个位置。把图片切成9块，除中间一块，其他八块分别被当成边框使用。接受1-4个参数（使用类似于padding/margin的尺寸设置）。可以是百分比（相对于图片自身），也可以是数字（单位是px）。最后的fill决定中间那块图片会不会被当成background使用。

- border-image-repeat：stretch/round（平铺）/repeat（重复）上下左右四个正位的图片怎样被当成border使用。

- round（平铺）会压缩，repeat（重复）会剪裁。

border-image必须配合border使用。最终**border宽度是border-width**。**border-style也必须指定**，border-color可以不用。

**伪类元素方案**



![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image8.png)

**完整代码**

```text
// index.html
<!DOCTYPE html>
<html lang="en">
    <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" href="./index.css" />  
    </head> 
    <body> 
        <div class="retina-border">retina border</div>
        <br />   
        <div class="normal-border">normal border</div> 
    </body>
</html>

```

```text
// index.css
.retina-border {
	position: relative;
}
.retina-border::before {
	content: '';  
	position: absolute;
    width: 100%;
    height: 100%; 
    transform-origin: left top;
    box-sizing: border-box;
    pointer-events: none; 
    border-width: 1px;
    border-style: solid;
    border-color: #333;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {  .retina-border::before {   
	width: 200%; 
    height: 200%; 
    transform: scale(0.5); 
    }
}
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {  .retina-border::before {  
	width: 300%; 
    height: 300%;   
    transform: scale(0.33);
    }
}
.normal-border { 
	border: 1px solid #333;
}

```

具体实现

以两倍屏为例

```text
.retina-border {
	position: relative;
}
.retina-border::before { 
	content: ''; 
    position: absolute;
    top: 0px; 
    right: 0px; 
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;  
    box-sizing: border-box;
    pointer-events: none; 
    border-width: 1px;  
    border-style: solid;
    border-color: #333;
}

```

通过一个伪类选择器在retinaborder元素中加了一个子元素

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image9.png)

`border-width: 1px`将边框的宽度设为1px。`width:200%`然后将**伪类元素的宽高都设置成父元素的2倍**。(**但是边框还是1px**)`transform:scale(0.5)`将**伪类元素的x，y轴方向都缩放到0.5倍。**通过两次尺寸的设置，使这个伪类子元素保持内容的大小还是和父元素一样，但是`border:0.5px`的效果。`pointer-events: none`当有元素的层级重叠时，鼠标点击是无法穿透的。即绝对定位的伪类元素的层级更高，它底下的元素（即文字：retina border)无法被事件触发。置为none时，**绝对定位的元素不触发事件，底下的那层才能被选中。**

**其他css样式作用**

- 伪类元素默认的`display:inline`。而`position：absolute`会使元素`display:block`。只有块级元素的尺寸(宽/高)设置才是有效的。

- 其中伪类选择器中`content`是必填项，不然无法生效

- transform-origin的缩放的中心点，默认是元素中心,

- transform-origin的缩放的中心点，默认是元素中心,和绝对定位的top，right一样，相对的是padding+content部分整个空间的位置

- 绝对定位的元素其top和right值是相对于padding+content的，默认值是从content开始，所以要规定都是0，否则当父元素有padding时，border就移位了

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image10.png)

（如果删去position：absolute）

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image11.png)

（如果删去position：absolute+display:block）

> 当使用百分比时，其父元素的高度必须显式指定，（20px/20view）不能是由子元素撑开的，但是宽度是可以的。

## 两种方案比较

### 兼容性

svg方案经过postcss处理，最终会影响浏览器兼容性的是**border-image**属性

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image12.png)

伪类元素元素：方案最终影响兼容性的是**transform**属性

![](/images/auto/%E7%A7%BB%E5%8A%A8%E7%AB%AF1px%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/image13.png)

**结论：svg方案的兼容性更好**。

### 灵活性

由于svg只能画出特定的形状，所以无法实现圆角边框。而伪类元素方案可以。

### 学习成本

svg方案所用到的border-image属性、svg特性的理解成本较高，并且需要postcss-write-svg处理。伪类元素方案相较简单。

### 总结

通常情况，伪类元素方案更好，无论是从成本还是灵活性出发。如果是为了更高的兼容性选择svg方案，border-image属性一定要使用缩写。（不然兼容性会更差兼容性测试）







