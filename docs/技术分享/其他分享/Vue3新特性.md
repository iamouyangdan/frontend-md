# Vue3新特性
## 一、demo:

[https://github.com/Pizhong/vue3-new-feature](https://github.com/Pizhong/vue3-new-feature)

or

[https://gitee.com/pizhong/vue3-new-feature](https://gitee.com/pizhong/vue3-new-feature)

## 二、v-for中的Ref数组

1、官方地址：[https://v3.cn.vuejs.org/guide/migration/array-refs.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5](https://v3.cn.vuejs.org/guide/migration/array-refs.html#%E8%BF%81%E7%A7%BB%E7%AD%96%E7%95%A5)

2、例子演示：/ref

3、总结：

vue2中，我们可以直接通过`this.$refs.$property` 去直接获取到数组，

vue3中，我们需要定义一个数组，并且通过一个ref绑定的函数去获取数组



## 三、$children

1、官方地址：[https://v3.cn.vuejs.org/guide/migration/children.html#%E6%A6%82%E8%A7%88](https://v3.cn.vuejs.org/guide/migration/children.html#%E6%A6%82%E8%A7%88)

2、例子演示：

3、总结：

在vue2中，我们可以在父组件可以通过`this.$children`获取到子组件的实例和属性在vue3中，$children这个属性已经被废除，使用`this.$refs.$child`去获取到子组件的实例以及属性



## 四、slot插槽

1、例子演示

2、总结：/slot

在vue2中，支持slot="name",slot-scope="scope"这样的写法

在vue3中，不支持上述写法，需改为`v-solt:name = "scope"`或者`#name="scope"`的写法



## 五、Composition API

1、官方地址：[https://v3.cn.vuejs.org/guide/composition-api-introduction.html](https://v3.cn.vuejs.org/guide/composition-api-introduction.html)

2、例子：/compositionApi

3、总结：

（1）所有的数据以及方法都写在`setup(){}`里面

（2）setup里面避免使用this。因为执行 setup 时，组件实例尚未被创建（在 setup() 内部，

this 不会是该活跃实例的引用，即不指向vue实例，Vue 为了避免我们错误的使用，直接将 

setup函数中的this修改成了 undefined

（3）vue3仍然支持vue2中Options API的写法，但更推进Composition API的写法

原因：[vue2中Options API 和 vue3中Composition API 的对比](https://www.jianshu.com/p/e35a68fa206f)



## 六、setup

1、官方地址：[https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E5%8F%82%E6%95%B0](https://v3.cn.vuejs.org/guide/composition-api-setup.html#%E5%8F%82%E6%95%B0)

2、例子：/setUp

3、总结：

（1）`setup`的生命周期在`beforeCreate`之前,因此，组件实例尚未被创建，所以避免

使用`this`

（2）`setup`接收两个参数，`props`和`context` 

`props`：和vue2中组件中`props`意思一样，都是接收传过来的参数必须对props传过来的参数先进行声明，如果没声明，传过来的参数将出现在`attrs`中

`context`：`attrs` 、 `emit` 、`slots`

① `attrs `:在此部分，接收在父组件传递过来的，并且没有在props中声明的参数。

② `emit`：子组件对父组件发送事件在vue2中，子对父发送事件采用`this.$emit`对父组件发送事件，在vue3中子组件对父组件发送事件采用`context.emit`发送事件

③ `slots`：和vue2中的插槽使用类似

## 七、setup中的生命周期

1、官方地址：[https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html](https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html)

2、例子：/lifeCycle



## 八、computed、watch

1、官方地址：[https://v3.cn.vuejs.org/api/computed-watch-api.html#computed](https://v3.cn.vuejs.org/api/computed-watch-api.html#computed)

2、例子：/computed、/watch

3、总结：

（1）当`Computed`只有一个回调函数的话，那么该回调函数默认就是`Computed`中的

`Getter`

（2）当`Computed`的参数为一个对象时，对象中就可以指定`setter`与`getter`函数了

（3）`watch`监听`reative`响应式对象时，需要加上深度监听的属性，需要 `deep` 选项设置为 true。

（4）`immediate`属性为true时，页面刷新会监听数据，false时只有数据发生变化才会监听



## 九、拓展：

1、关于vue2和vue3响应式的区别

[vue2与vue3的响应式原理](https://www.jianshu.com/p/2c3086f31ff0)

[vue2的响应式原理学“废”了吗？继续观摩vue3响应式原理Proxy](https://www.136.la/jingpin/show-200649.html)

2、已经有vue2基础的，想快速上手vue3可以阅读下官方提供的vue3迁移指南

[https://v3.cn.vuejs.org/guide/migration/introduction.html](https://v3.cn.vuejs.org/guide/migration/introduction.html)

3、[https://cn.vitejs.dev/](https://cn.vitejs.dev/)

4、[Vue 3.0 到底好在哪里？(尤雨溪点赞文)](https://blog.csdn.net/weixin_46837985/article/details/105852706)

5、[Vue3的优势](https://zhuanlan.zhihu.com/p/351445575)

6、



## 十、思考：

在什么情况下会使用vue3开发新项目？

