# vue响应式原理
简单实现的例子



v2.6源码



## Vue 数据双向绑定

Vue 最独特的特性之一，是其非侵入性的响应式系统。数据模型仅仅是普通的 JavaScript 对象。而当你修改它们时，视图会进行更新。这使得状态管理非常简单直接





```javascript
 var app = new Vue({
 el: '#app',
  template: `<div>
    <div>消息</div>
    <div>{{ msg }}</div>
    <input v-model="msg">
    <button @click="changeMsg">改变值</button>
  </div>`,
  data: {
    msg: 'hello'
  },
  methods: {
    changeMsg () {
      this.msg = 'hello world'
    }
  }
})

```

## 原理

把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。Object.defineProperty 是 ES5 中一个无法 shim 的特性，这也就是 Vue 不支持 IE8 以及更低版本浏览器的原因。

在 property 被访问和修改时通知变更，每个组件实例都对应一个 watcher 实例，它会在组件渲染的过程中把“接触”过的数据 property 记录为依赖。之后当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

### Object.defineProperty

```javascript
var obj = {
  name: '张三',
  age: 18
}
Object.defineProperty(obj, 'name', {
  get() {
    console.log('访问了name')
    return obj.name
  },
  set(value) {
    console.log('设置name')
    obj.name = value
  }
})

Object.defineProperty(obj, 'age', {
  let value = obj['age']
  get() {
    console.log('访问了age')
    return value
  },
  set(newValue) {
    if (newValue < 18) {
      throw new Error('不可小于18岁')
    }
    console.log('设置age')
    value = newValue
  }
})

console.log(obj.name)
console.log(obj.age)
obj.name = '李四'
// obj.age = 10
obj.age = 20

```

### 简单实现





### v2.6源码-数据响应简单介绍

src\core\observer

### v2.6数组方法重写

src\core\observer\array.js

```javascript
import { def } from '../util/index'
const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})

```

### v2.6 $set方法

![](https://tcs-devops.aliyuncs.com/storage/112a73ee6ed80f7d0202fddbff3afe258970?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTYwMiwiaWF0IjoxNjUxODk2ODAyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmE3M2VlNmVkODBmN2QwMjAyZmRkYmZmM2FmZTI1ODk3MCJ9.2cRo_yKxUVkzOnElS3PL149kFfPoqd2ax-pCXkadbjY&download=image.png "")

src\core\observer\index.js

```javascript
export function set (target: Array<any> | Object, key: any, val: any): any {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(`Cannot set reactive property on undefined, null, or primitive value: ${(target: any)}`)
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val
    return val
  }
  const ob = (target: any).__ob__
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return val
  }
  if (!ob) {
    target[key] = val
    return val
  }
  defineReactive(ob.value, key, val)
  ob.dep.notify()
  return val
}

```

### v2.6 $forceUpdate方法

![](https://tcs-devops.aliyuncs.com/storage/112aa4f82fee1e4158c497508dfdefc53fce?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTY1MjUwMTYwMiwiaWF0IjoxNjUxODk2ODAyLCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExMmFhNGY4MmZlZTFlNDE1OGM0OTc1MDhkZmRlZmM1M2ZjZSJ9.T4SFoHVhDzK7Ni3yTTRNMjEq1zB7HHX8H179tzXpE8A&download=image.png "")

src\core\instance\`lifecycle.js`

```javascript
Vue.prototype.$forceUpdate = function () {
    const vm: Component = this
    if (vm._watcher) {
      vm._watcher.update()
    }
  }

```

### Vue入口文件

src\core\instance\index.js

### Vue3的数据监听

Proxy 用于修改某些操作的默认行为，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

```javascript
var obj1 = {
  name: '张三',
  age: 18
}

var obj2 = new Proxy(obj1, {
  get(target, key) {
    console.log('访问' + key)
    return Reflect.get(target, key)
  },
  set(target, key, value) {
    console.log('访问' + key)
    return Reflect.set(target, key, value)
  }
})

obj1.name = '李四'

obj2.name = '王五'

```

## 参考文献







