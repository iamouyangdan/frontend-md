# React源码

## React性能优化
[React性能优化](https://juejin.cn/post/6935584878071119885)

## Redux
问：Redux 的 reducer 中不能做异步操作？

>下面解释一下为什么Redux的reducer里不能有异步操作。

>先从Redux的设计层面来解释为什么Reducer必须是纯函数
如果你经常用React+Redux开发，那么就应该了解Redux的设计初衷。Redux的设计参考了Flux的模式，作者希望以此来实现时间旅行，保存应用的历史状态，实现应用状态的可预测。所以整个Redux都是函数式编程的范式，要求reducer是纯函数也是自然而然的事情，使用纯函数才能保证相同的输入得到相同的输入，保证状态的可预测。所以Redux有三大原则：

>单一数据源，也就是state
state 是只读，Redux并没有暴露出直接修改state的接口，必须通过action来触发修改
使用纯函数来修改state，reducer必须是纯函数
下面在从代码层面来解释为什么reducer必须是纯函数
那么reducer到底干了件什么事，在Redux的源码中只用了一行来表示：

>currentState = currentReducer(currentState, action)
这一行简单粗暴的在代码层面解释了为什么currentReducer必须是纯函数。currentReducer就是我们在createStore中传入的reducer（至于为什么会加个current有兴趣的可以自己去看源码），reducer是用来计算state的，所以它的返回值必须是state，也就是我们整个应用的状态，而不能是promise之类的。

>要在reducer中加入异步的操作，如果你只是单纯想执行异步操作，不会等待异步的返回，那么在reducer中执行的意义是什么。如果想把异步操作的结果反应在state中，首先整个应用的状态将变的不可预测，违背Redux的设计原则，其次，此时的currentState将会是promise之类而不是我们想要的应用状态，根本是行不通的。

>其实这个问题应该是Redux中为什么不能有副作用的操作更合适。
