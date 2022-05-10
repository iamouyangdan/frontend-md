# Typescript基础与进阶

# Typescript基础



# Typescript进阶

## 一、类型别名

### 1、作用

类型别名用来给一个类型起个新名字

### 2、使用

类型别名通过使用`type`来创建类型别名，类型别名常使用与联合类型

### 3、栗子

```typescript
type Name = string;
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if(typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
```

## 二、字符串字面量类型

### 1、作用

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

### 2、栗子

```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
​
handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'
```

注意：类型别名与字符串字面量类型都是使用 `type` 进行定义。

## 三、元组

### 1、作用

约束子元素为不同类型的数组

### 2、栗子

定义一对值分别为 `string` 和 `number` 的元组：

```typescript
let tom: [string, number] = ['Tom', 25];
```

当赋值或访问一个已知索引的元素时，会得到正确的类型：

```typescript
let tom!: [string, number];
tom = ['Jack',18];
tom[0] = 'Tom';
tom[1] = 25;
​
tom[0].slice(1);
tom[1].toFixed(2);
```

也可以只赋值其中一项：

```typescript
let tom: [string, number];
tom[0] = 'Tom';
```

当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项

```typescript
let tom: [string, number];
tom = ['Tom', 25];
```

```typescript
let tom: [string, number];
tom = ['Tom', 0];
​
// Property '1' is missing in type '[string]' but required in type '[string, number]'.
```

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```typescript
let tom: [string, number];
tom = ['Tom', 25];
tom.push('male');
tom.push(true);
​
// Argument of type 'true' is not assignable to parameter of type 'string | number'
```

## 四、枚举

### 1、作用

枚举（`Enum`）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等。

### 2、栗子

```typescript
// 枚举使用 enum 关键字来定义：
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
​
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
```

### 3、手动赋值

```typescript
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};
​
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
// 未手动赋值的枚举项会接着上一个枚举项递增。
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
```

如果未手动赋值的枚举项与手动赋值的重复了，TypeScript 是不会察觉到这一点的：

```typescript
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
​
console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
// Days[3] 的值先是 "Sun"，而后又被 "Wed" 覆盖了
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true
```

手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 `tsc` 无视类型检查

```typescript
enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};
```

手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 `1`

```typescript
enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
​
console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1.5); // true
console.log(Days["Tue"] === 2.5); // true
console.log(Days["Sat"] === 6.5); // true
```

### 4、常数项和计算所得项

枚举项有两种类型：常数项（constant member）和计算所得项（computed member）。

**常数项**

```typescript
enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
```

**计算所得项**

```typescript
enum Color {Red, Green, Blue = "blue".length};
```

*注意：****如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错****：*

```typescript
enum Color {Red = "red".length, Green, Blue};
​
// index.ts(1,33): error TS1061: Enum member must have initializer.
// index.ts(1,40): error TS1061: Enum member must have initializer.
```

### 5、常数枚举

常数枚举是使用 `const enum` 定义的枚举类型：

常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。

```typescript
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
​
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

假如包含了计算成员，则会在编译阶段报错：

```typescript
const enum Color {Red, Green, Blue = "blue".length};
​
// index.ts(1,38): error TS2474: In 'const' enum declarations member initializer must be constant expression.
```

### 6、外部枚举

外部枚举（Ambient Enums）是使用 `declare enum` 定义的枚举类型：`declare` 定义的类型只会用于编译时的检查，编译结果中会被删除。

```typescript
declare enum Directions {
    Up,
    Down,
    Left,
    Right
}
​
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

*外部枚举与声明语句一样，常出现在声明文件中。*

7、同时使用 `declare` 和 `const` 也是可以的：

```typescript
declare const enum Directions {
    Up,
    Down,
    Left,
    Right
}
​
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
```

## 五、类

### 1、TS中类的用法

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 `public` 的

- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问

- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

### 2、栗子

```typescript
class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}
​
let a = new Animal('Jack');
// name 被设置为了 public，所以直接访问实例的 name 属性是允许的。
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
```

 很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 `private` 了：

```typescript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}
​
let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
​
// index.ts(9,13): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// index.ts(10,1): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```

使用 `private` 修饰的属性或方法，在子类中也是不允许访问的：

```typescript
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}
​
class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
​
// index.ts(11,17): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```

而如果是用 `protected` 修饰，则允许在子类中访问：

```typescript
class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}
​
class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```

当构造函数修饰为 `private` 时，该类不允许被继承或者实例化：

```typescript
class Animal {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}
​
let a = new Animal('Jack');
​
// index.ts(7,19): TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
// index.ts(13,9): TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.
```

当构造函数修饰为 `protected` 时，该类只允许被继承：

```typescript
class Animal {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}
​
let a = new Animal('Jack');
​
// index.ts(13,9): TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.
```

### 3、参数属性

修饰符和`readonly`还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。

```typescript
class Animal {
  // public name: string;
  public constructor(public name) {
    // this.name = name;
  }
}
```

`readonly`

只读属性关键字，只允许出现在属性声明或索引签名或构造函数中。

```typescript
class Animal {
  readonly name;
  public constructor(name) {
    this.name = name;
  }
}
​
let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
​
// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
```

注意如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面。

```typescript
class Animal {
  // public readonly name;
  public constructor(public readonly name) {
    // this.name = name;
  }
}
```

### 4、抽象类

`abstract` 用于定义抽象类和其中的抽象方法。

首先，抽象类是不允许被实例化的：

```typescript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
// 在实例化抽象类的时候报错了。
let a = new Animal('Jack');
​
// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```

其次，抽象类中的抽象方法必须被子类实现

```typescript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
​
class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
}
​
let cat = new Cat('Tom');
​
// index.ts(9,7): error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.
```

正确用法：

```typescript
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}
​
class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}
​
let cat = new Cat('Tom');
```

### 5、类的类型

给类加上 TypeScript 的类型很简单，与接口类似：

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}
​
let a: Animal = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

## 六、类与接口

### 1、类实现接口

一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 `implements` 关键字来实现。

栗子

```typescript
// 声明一个报警器接口
interface Alarm {
    alert(): void;
}
// 声明一个门类
class Door {
}
// 声明一个防盗门类继承Door,实现接口Alarm
class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}
// 声明一个车类实现接口Alarm
class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}
```

一个类可以实现多个接口：

```typescript
interface Alarm {
    alert(): void;
}
​
interface Light {
    lightOn(): void;
    lightOff(): void;
}
​
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

### 2、接口继承接口

接口与接口之间可以是继承关系：

```typescript
interface Alarm {
    alert(): void;
}
​
interface LightableAlarm extends Alarm {
    lightOn(): void;
    lightOff(): void;
}
```

### 3、接口继承类

常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：

为什么 TypeScript 会支持接口继承类呢？

实际上，当我们在声明 `class Point` 时，除了会创建一个名为 `Point` 的类之外，同时也创建了一个名为 `Point` 的类型（实例的类型）。

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
​
interface Point3d extends Point {
    z: number;
}
​
let point3d: Point3d = {x: 1, y: 2, z: 3};
```

因此，我们既可以将 `Point` 当做一个类来用（使用 `new Point` 创建它的实例）：

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
​
const p = new Point(1, 2);
```

也可以将 `Point` 当做一个类型来用（使用 `: Point` 表示参数的类型）：

```typescript
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
​
function printPoint(p: Point) {
    console.log(p.x, p.y);
}
​
printPoint(new Point(1, 2));
```

所以「接口继承类」和「接口继承接口」没有什么本质的区别。

值得注意的是，声明 `Point` 类时创建的 `Point` 类型只包含其中的实例属性和实例方法：

```typescript
class Point {
    /** 静态属性，坐标系原点 */
    static origin = new Point(0, 0);
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p: Point) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例属性，x 轴的值 */
    x: number;
    /** 实例属性，y 轴的值 */
    y: number;
    /** 构造函数 */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}
​
interface PointInstanceType {
    x: number;
    y: number;
    printPoint(): void;
}
​
let p1: Point;
let p2: PointInstanceType;
```

## 七、泛型

### 1、定义

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

```typescript
//在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了。
// 接着在调用的时候，可以指定它具体的类型为 string。
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
​
createArray<string>(3, 'x'); // ['x', 'x', 'x']
// 当然，也可以不手动指定，而让类型推论自动推算出来：
createArray(3, 'x'); // ['x', 'x', 'x']
```

### 2、多个类型参数

定义泛型的时候，可以一次定义多个类型参数：

```typescript
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
​
swap([7, 'seven']); // ['seven', 7]
```

### 3、泛型约束

在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

```typescript
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}
// 泛型 T 不一定包含属性 length，所以编译的时候报错了。
// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
```

可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束：

```typescript
interface Lengthwise {
    length: number;
}
// 使用了 extends 约束了泛型 T 必须符合接口 Lengthwise 的形状，也就是必须包含 length 属性。
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

多个类型参数之间也可以互相约束：

```typescript
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}
​
let x = { a: 1, b: 2, c: 3, d: 4 };
```

### 4、泛型接口

以使用含有泛型的接口来定义函数的形状：

```typescript
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}
​
let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
​
createArray(3, 'x'); // ['x', 'x', 'x']
```

进一步，我们可以把泛型参数提前到接口名上：

```typescript
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}
// 注意，此时在使用泛型接口的时候，需要定义泛型的类型。
let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
​
createArray(3, 'x'); // ['x', 'x', 'x']
```

### 5、泛型类

泛型也可以用于类的类型定义中：

```typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
​
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```

### 6、泛型参数的默认类型

在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

```typescript
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```

## 八、声明合并

### 1、使用

如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：

### 2、函数的合并

```typescript
// 我们可以使用重载定义多个函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 3、接口的合并

接口中的属性在合并时会简单的合并到一个接口中：

```typescript
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}
```

相当于

```typescript
interface Alarm {
    price: number;
    weight: number;
}
```

注意，**合并的属性的类型必须是唯一的**：

```typescript
interface Alarm {
    price: number;
}
interface Alarm {
    price: number;  // 虽然重复了，但是类型都是 `number`，所以不会报错
    weight: number;
}
```

```typescript
interface Alarm {
    price: number;
}
interface Alarm {
    price: string;  // 类型不一致，会报错
    weight: number;
}
​
// index.ts(5,3): error TS2403: Subsequent variable declarations must have the same type.  Variable 'price' must be of type 'number', but here has type 'string'.
```

接口中方法的合并，与函数的合并一样：

```typescript
interface Alarm {
    price: number;
    alert(s: string): string;
}
interface Alarm {
    weight: number;
    alert(s: string, n: number): string;
}
```

相当于：

```typescript
interface Alarm {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}
```

### 4、类的合并

类的合并与接口的合并规则一致。

# 学习资料





Typescript在线平台： [__https://www.typescriptlang.org/play__](https://www.typescriptlang.org/play)