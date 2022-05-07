# 一、什么是单元测试

通俗的讲，在前端，单元可以理解为一个独立的模块文件，单元测试就是对这样一个模块文件的测试。

# 二、为什么要做单元测试？

1、更快的发现BUG

2、减少BUG的产出

3、有利于项目维护、升级、重构

4、方便调试

# 三、常见的单元测试框架

## 1、Jest

[https://jestjs.io/zh-Hans/](https://jestjs.io/zh-Hans/)

## 2、Mocha

[https://mochajs.cn/](https://mochajs.cn/)

## 3、 Jasmine

[https://jasmine.github.io/](https://jasmine.github.io/)

## 4、AVA

[https://github.com/avajs/ava-docs/blob/main/zh_CN/readme.md](https://github.com/avajs/ava-docs/blob/main/zh_CN/readme.md)

## 5、Puppeteer

[https://zhaoqize.github.io/puppeteer-api-zh_CN/](https://zhaoqize.github.io/puppeteer-api-zh_CN/)

# 四、Jest快速上手

## 1、项目初始化

**创建工程**

```shell
mkdir jest-start
```

```shell
cd jest-start
```

**初始化**

```text
yarn init || npm init
```

**安装依赖**

```shell
yarn add --dev jest || npm install --save-dev jest
```

## 2、快速上手

**初始化Jest默认配置**

```shell
npx jest --init
```

**安装babel**

```shell
yarn add  babel-jest @babel/core @babel/preset-env -D
```

配置`.babelrc`

```shell
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```

根目录创建`src/sum.js`

```shell
function sum(a, b) {
  return a + b
}
module.exports = sum
```

根目录创建`tests/sum.test.js`

```shell
const sum = require('../src/sum')
// 期望sum(1, 2)执行后结果为3
test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```

运行`yarn test`或`npm run test`



## 3、生成代码覆盖率

（1）修改`jest.config.js`中的`coverageDirectory`的值为`coverage`（自定义）

 （2）终端运行`npx jest --coverage`,终端输出代码覆盖率报告

    (3）项目根目录自动生成`coverage`文件夹，进入`\coverage\lcov-report`， 打开`index.html`可以看到对应的代码覆盖率报告



# 五、匹配器的使用

1、`toBe`

```shell
// 精确匹配 判断基本类型数据 ===
test('2 + 2 等于 4', () => {
  expect(2+2).toBe(4)
})
```

2、`toEqual`

```shell
// 判断引用类型 ==
test('对象赋值', () => {
  const data = {one: 1}
  data['two'] = 2
  // expect(data).toBe({one: 1, two: 2}) //测试不匹配u
  expect(data).toEqual({one: 1, two: 2})
})
```

3、`not`修饰符

```shell
// not就是对matcher的否定
test('not修饰符', () => {
  const a = 0
  expect(a).not.toBe(1)
})
```

## 4、真值

`toBeNull` 只匹配 `null`

`toBeUndefined` 只匹配 `undefined`

`toBeDefined` 与`toBeUndefined`相反

`toBeTruthy`匹配任何`if` 语句为真

`toBeFalsy` 匹配任何 `if` 语句为假

```javascript
test('变量a是否为null', () => {
  const a = null
  expect(a).toBeNull()
})
​
test('变量a是否为undefined', () => {
  const a = undefined
  expect(a).toBeUndefined()
})
​
test('变量a是否为defined', () => {
  const a = null
  expect(a).toBeDefined()
})
​
test('变量a是否为true', () => {
  const a = 1
  expect(a).toBeTruthy()
})
​
test('变量a是否为false', () => {
  const a = 0
  expect(a).toBeFalsy()
})
```

## 5、数字

```javascript
test('two plus two', () => {
  const value = 2 + 2;
  // 判断数value是否大于某个数
  expect(value).toBeGreaterThan(3);
  // 判断数value是否大于等于某个数
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeGreaterThanOrEqual(4);
  // 判断数value是否小于某个数
  expect(value).toBeLessThan(5);
  // 判断数value是否小于等于某个数
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBeLessThanOrEqual(4);
​
  // toBe 和 toEqual 对数值的判断是等效的
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
​
// 测试浮点数使用toBeCloseTo
test('测试浮点数', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3) //这句会报错，因为浮点数有舍入误差
  expect(value).toBeCloseTo(0.3) 
​
})
```

## 6、字符串

```javascript
// 判断字符串是否和toMatch提供的模式匹配 类似正则
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});
​
test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

## 7、数组

```javascript
// toContain 判断数组或者集合是否包含某个元素
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];
​
test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

```javascript
// 判断数组的长度
test('toHaveLength', () => {
  expect(shoppingList).toHaveLength(5)
})
```

## 8、异常

```javascript
// 判断抛出的异常是否符合预期
function throwError() {
  throw new Error('I throw a error')
}
​
test('toThrow', () => {
  expect(() => throwError()).toThrow(/I throw a error/)
})
```

# 六、测试异步代码

## 1、定时器

（1）待测试文件`timeout.js`

```javascript
export default (fn) => {
  setTimeout(() => {
    fn()
    console.log('1111111');
  }, 2000)
}
```

（2）测试文件`timeout.test.js`

```javascript
import timeout from '../src/timeout'
test('测试定时器', () => {
    timeout(() => {
    expect(1+1).toBe(2)
  })
})
// ----------------------------------
test('测试定时器', (done) => {
    timeout(() => {
    expect(1+1).toBe(2)
    done()
  })
})
```

（3）使用`fakeTimers`提高测试效率`fakeTimers`模拟真实的定时器。

这个`fakeTimers`在遇到定时器时，允许我们立即跳过定时器等待时间，执行内部逻辑

因此，上面的例子可以修改成为

```javascript
//首先，我们使用jest.fn()生成一个jest提供的用来测试的函数，这样我们之后回调函数不需要自己去写一个
//其次，我们使用jest.useFakeTimers()方法启动fakeTimers
//最后，我们可以通过jest.advanceTimersByTime()方法，参数传入毫秒时间，jest会立即跳过这个时间值，还可以通过toHaveBeenCalledTimes()这个mathcer来测试函数的调用次数。
​
test('测试timer', () => {
  jest.useFakeTimers()
  // 使用jest.fn()生成测试函数
  const fn = jest.fn()
  timeout(fn)
  // 时间快进2秒
  jest.advanceTimersByTime(2000)
  expect(fn).toHaveBeenCalledTimes(1)
})
```

### （4）关于嵌套定时器

可以通过调用`jest.runAllTimes()`执行所有的定时器

待测试文件`timeoutNest.js`

```javascript
export default (fn) => {
  setTimeout(() => {
    fn()
    console.log('this is timeout outside!')
    setTimeout(() => {
      fn()
      console.log('this is timeout inside!')
    }, 3000)
  }, 2000)
}
```

测试文件`timeoutNest.test.js`

```javascript
test('测试timer', () => {
  jest.useFakeTimers()
  const fn = jest.fn()
  timeoutNest(fn)
  jest.runAllTimers()
  expect(fn).toHaveBeenCalledTimes(2)
})
```

## 2、Promise

使用传统的`Promise`获取数据，可以在测试中返回一个`Promise`,

`Jest`会等待`Promise`中的`resolve`，如果 Promise 被拒绝，则测试将自动失败。

`request.js`

```javascript
import axios from 'axios'
​
export const request = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
```

`request.test.js`

```javascript
import { request } from '../src/request'
​
test('测试request', () => {
  return request().then(data => {
      expect(data.data).toEqual({
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        })
  })
})
```

## 3、async/await

可以在测试中使用 `async` 和 `await`。 写异步测试用例时，可以在传递给`test`的函数前面加上`async`

`requestAsyncAwait.test.js`

```javascript
import { request } from '../src/request'
​
// 写法一
test('测试request', async () => {
  const res = await request()
  expect(res.data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  })
})
// 写法二 将 async and await和 .resolves or .rejects一起使用。
test('测试request', async () => {
  await expect(request()).resolves.toMatchObject({
      data: {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
          }
      })
})
```

## 4、请求错误

在日常项目中，我们请求接口有时会报错，这时候需要对这种接口请求做错误处理，同样，也需要对异常情况编写测试代码。

在`request.js`新增一个方法，该方法请求一个不存在的接口地址，因此会返回`404`

```javascript
export const requestErr = fn => {
    return axios.get('https://jsonplaceholder.typicode.com/sda')
}
```

`request.test.js`

```javascript
test('测试request 404', () => {
  return expect(requestErr()).rejects.toThrow(/404/)
})
```

或者可以用`async/await`

```javascript
test('测试request 404', async () => {
  await expect(requestErr()).rejects.toThrow(/404/)
})
// 或者可以使用try catch语句写的更完整
test('测试request 404', async () => {
  try {
      await requestErr()
  } catch (e) {
      expect(e.toString()).toBe('Error: Request failed with status code 404')
  }
})
```

# 七、Mock（模拟）函数

## 1、为什么要使用Mock函数

在项目中，一个模块的方法内常常会去调用另外一个模块的方法。在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，只想知道它是否被正确调用即可，甚至会指定该函数的返回值。此时，使用Mock函数是十分有必要。

## 2、jest.fn()

`jest.fn()`是创建Mock函数最简单的方式，如果没有定义函数内部的实现

`jest.fn()`会返回`undefined`作为返回值。

```javascript
// jestFn.test.js
test('测试jest.fn()调用', () => {
  let mockFn = jest.fn();
  let result = mockFn(1, 2, 3);
​
  // 断言mockFn的执行后返回undefined
  expect(result).toBeUndefined();
  // 断言mockFn被调用
  expect(mockFn).toBeCalled();
  // 断言mockFn被调用了一次
  expect(mockFn).toBeCalledTimes(1);
  // 断言mockFn传入的参数为1, 2, 3
  expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
})
```

`jest.fn()`所创建的Mock函数还可以**设置返回值**，**定义内部实现**或返回`Promise`对象。

```javascript
​
test('测试jest.fn()返回固定值', () => {
  let mockFn = jest.fn().mockReturnValue('default');
  // 断言mockFn执行后返回值为default
  expect(mockFn()).toBe('default');
})
​
test('测试jest.fn()内部实现', () => {
  let mockFn = jest.fn((num1, num2) => {
    return num1 * num2;
  })
  // 断言mockFn执行后返回100
  expect(mockFn(10, 10)).toBe(100);
})
​
test('测试jest.fn()返回Promise', async () => {
  let mockFn = jest.fn().mockResolvedValue('default');
  let result = await mockFn();
  // 断言mockFn通过await关键字执行后返回值为default
  expect(result).toBe('default');
  // 断言mockFn调用后返回的是Promise对象
  expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
})
```

## 3、模拟接口中获取的数据

很多时候，我们在前端开发过程中，后端接口还没有提供，我们需要去`mock`接口返回的数据。

首先在`mock.js`中编写一个简单的请求数据的代码：

```javascript
import axios from 'axios'
​
export const request = fn => {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
```

在`mock.test.js`中，使用`jest.mock()`方法模拟`axios`，

使用`mockResolvedValue`和`mockResolvedValueOnce`方法模拟返回的数据，

同样的，`mockResolvedValueOnce`方法只会改变一次返回的数据：

```javascript
import axios from 'axios'
import { request } from '../src/mock'
​
jest.mock('axios')
​
test('测试request', async () => {
    axios.get.mockResolvedValueOnce({ data: 'Jordan', position: 'SG' })
    axios.get.mockResolvedValue({ data: 'kobe', position: 'SG' })
    await request().then((res) => {
        expect(res.data).toBe('Jordan')
    })
    await request().then((res) => {
        expect(res.data).toBe('kobe')
    })
})
```

# 八、分组测试和钩子函数

所谓分组测试，核心在于，将不同的测试进行分组，再结合勾子函数（生命周期函数），完成不同分组的定制化测试，以满足测试过程重的复杂需求。

`hook.js`

```javascript
export default class Count {
  constructor () {
      this.count = 2
  }
  increase () {
      this.count ++
  }
​
  decrease () {
      this.count --
  }
​
  double () {
      this.count *= this.count
  }
​
  half () {
      this.count /= this.count
  }
} 
```

我们想要对`Count`类的四个方法单独测试，数据互相不影响，当然我们可以自己去直接实例化`4`个对象，不过，`jest`给了我们更优雅的写法---分组，我们使用`~~describe~~`函数分组，如下：

```javascript
describe('分别测试Count的4个方法', () => {
    test('测试increase', () => {
        
    })
    test('测试decrease', () => {
        
    })
    test('测试double', () => {
        
    })
    test('测试half', () => {
        
    })
})
```

这样我们就使用`describe`函数配合`test`将测试分为了四组，接下来，为了能更好的控制每个`test`组，我们就要用到`jest`的勾子函数。 我们这里要介绍的是`jest`里的四个勾子函数:

`beforeEach`：是在每一个test函数执行之前，会被调用

`beforeAll`：是在所有test函数执行之前调用

`afterEach`：每一个test函数执行之后调用

`afterAll`：所有test函数执行之后调用

`hook.test.js`

```javascript
import Count from "../src/hook"
​
describe('分别测试Count的4个方法', () => {
    let count
    beforeAll(() => {
        console.log('before all tests!')
    })
​
    beforeEach(() => {
        console.log('before each test!')
        // 每个test执行之前，beforeEach里面重新实例化了count
        count = new Count()
    })
​
    afterAll(() => {
        console.log('after all tests!')
    })
​
    afterEach(() => {
        console.log('after each test!')
    })
​
    test('测试increase', () => {
        count.increase()
        console.log(count.count)
    })
    test('测试decrease', () => {
        count.decrease()
        console.log(count.count)
    })
    test('测试double', () => {
        count.double()
        console.log(count.count)
    })
    test('测试half', () => {
        count.half()
        console.log(count.count)
    })
})
```

参考

[前端测试之Jest深入浅出](https://juejin.cn/post/6844904196244766728#heading-23)

[一杯茶的时间，上手 Jest 测试框架](https://juejin.cn/post/6844904118834692109)

[如何做前端单元测试](https://juejin.cn/post/7039108357554176037#heading-13)

录制视频

[__https://meeting.tencent.com/user-center/shared-record-info?id=27568c9b-ccc2-46b0-b8da-de7ead8fabd7&from=6&click_source_for_middle_login=1__](https://meeting.tencent.com/user-center/shared-record-info?id=27568c9b-ccc2-46b0-b8da-de7ead8fabd7&from=6&click_source_for_middle_login=1)



