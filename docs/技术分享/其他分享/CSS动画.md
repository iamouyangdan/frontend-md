# CSS动画

[animation.zip](/animation.zip)
## 一、animation

| 值                         | 描述                                            |
| ------------------------- | --------------------------------------------- |
| @keyframes                | 定义一个动画,@keyframes定义的动画名称用来被animation-name所使用  |
| animation-name            | 动画名称 ,必须与规则@keyframes配合使用，因为动画名称由@keyframes定义 |
| animation-duration        | 动画的持续时间                                       |
| animation-delay           | 动画的延迟时间                                       |
| animation-iteration-count | 动画的循环次数                                       |
| animation-timing-function | 动画的过渡类型                                       |
| animation-direction       | 指定是向前播放、向后播放还是交替播放动画                          |
| animation-fill-mode       | 指定动画的填充模式                                     |
| animation-play-state      | 动画的状态                                         |

## 1、@keyframes

定义一个动画,`@keyframes`定义的动画名称用来被`animation-name`所使用

```css
@keyframes 动画名 {
    from {} // 相当于0%
    to {} // 相当于100%
}

or

@keyframes 动画名 {
    0% {}
    50% {}
	100% {}
}

```

## 2、animation-name

定动画名称 ,必须与规则`@keyframes`配合使用，因为动画名称由`@keyframes`定义

## 3、animation-duration

动画的持续时间。如果未指定 `animation-duration` 属性，则动画不会发生，默认值 0s。

```css
.div1 {
	width: 100px;
	height: 100px;
	background: red;
	animation-name: example;
	animation-duration: 3s;
}

@keyframes example {
	from {
		width: 100px;
		height: 100px;
	}
	to {
		width: 300px;
		height: 300px;
	}
}

```

## 4、animation-delay 

动画的延迟时间。

## 5、animation-iteration-count

动画的循环次数

```css
animation-iteration-count: 3
animation-iteration-count: infinite; // 无限循环
```

## 6、animation-timing-function

动画的过渡类型

| 值                     | 描述                                                |
| --------------------- | ------------------------------------------------- |
| ease                  | 默认。动画以低速开始，然后加快，在结束前变慢。                           |
| linear                | 动画从头到尾的速度是相同的。                                    |
| ease-in               | 动画以低速开始。                                          |
| ease-out              | 动画以低速结束。                                          |
| ease-in-out           | 动画以低速开始和结束。                                       |
| cubic-bezier(n,n,n,n) | 在 cubic-bezier(三次贝塞尔函数) 函数中自己的值。可能的值是从 0 到 1 的数值。 |

## 7、animation-direction

指定是向前播放、向后播放还是交替播放动画

| 值                 | 描述                                      |
| ----------------- | --------------------------------------- |
| normal            | 动画正常播放（向前）。默认值                          |
| reverse           | 动画以反方向播放（向后）                            |
| alternate         | 动画先向前播放（奇数次1、3、5...），然后向后（偶数次2、4、6...）  |
| alternate-reverse | 动画先向后播放（奇数次1、3、5...) ，然后向前（偶数次2、4、6...） |

## 8、animation-fill-mode

指定动画的填充模式

CSS 动画不会在第一个关键帧播放之前或在最后一个关键帧播放之后影响元素。`animation-fill-mode` 属性能够覆盖这种行为。

| 值         | 描述                                                                      |
| --------- | ----------------------------------------------------------------------- |
| none      | 默认值。动画在执行之前或之后不会对元素应用任何样式                                               |
| forwards  | 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count） |
| backwards | 元素将获取由第一个关键帧设置的样式值，并在动画延迟期间保留该值                                         |
| both      | 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性                                          |

## 9、animation-play-state

动画的状态。默认：`running`。暂停：`paused`

```javascript
function stop() {
	console.log('stop')
	document.querySelector('.div1').style.animationPlayState = 'paused'
}

function start() {
	console.log('start')
	document.querySelector('.div1').style.animationPlayState = 'running'
}

```

简写：

```css
animation: name duration timing-function delay iteration-count direction;
```

## 二、tansition

| 值                          | 描述                         |
| -------------------------- | -------------------------- |
| transition-property        | 指定CSS属性的name               |
| transition-duration        | transition效果需要指定多少秒或毫秒才能完成 |
| transition-timing-function | 指定transition效果的转速曲线        |
| transition-delay           | 延迟时间                       |

1、`transition-timing-function`改变动画在每一帧的快慢

| 值           | 描述                      |
| ----------- | ----------------------- |
| linear      | 默认。规定以相同速度开始至结束的过渡效果    |
| ease        | 规定慢速开始，然后变快，然后慢速结束的过渡效果 |
| ease-in     | 规定以慢速开始的过渡效果            |
| ease-out    | 规定以慢速结束的过渡效果            |
| ease-in-out | 规定以慢速开始和结束的过渡效果         |

简写：

```css
transition: property duration timing-function delay;
```

## 三、transform

## 1、rotate 旋转

`rotate`，`rotateX`，`rotateY`。分别代表在平面上根据指定角度进行旋转、沿着X轴进行指定角度的旋转、沿着Y轴进行制定角度的旋转。

## 2、translate 移动

`translate(x,y)`，`translateX(x)`，`translateY(Y)`。分别代表水平方向和垂直方向同时移动、仅水平方向移动、仅垂直方向移动。

## 3、scale 缩放

`scale(x,y)`，`scaleX(x)`，`scaleY(Y)`。分别代表水平方向和垂直方向同时缩放、仅水平方向缩放、仅垂直方向缩放。但它们具有相同的缩放中心点和基数，其中心点就是元素的中心位置，缩放基数为1，如果其值大于1元素就放大，反之其值小于1，元素缩小。

## 4、skew 扭曲

`skew(x,y)`，`skew(x)`，`skewY(Y)`。分别代表水平方向和垂直方向同时扭曲、仅水平方向扭曲、仅垂直方向扭曲。

## 5、transform-origin

原点` transform-origin(x,y)` x，y可以用百分比来表示


## 参考资料

[https://www.w3school.com.cn/css/css3_animations.asp](https://www.w3school.com.cn/css/css3_animations.asp)

[https://www.w3school.com.cn/cssref/pr_transition.asp](https://www.w3school.com.cn/cssref/pr_transition.asp)

[https://animate.style/](https://animate.style/)







