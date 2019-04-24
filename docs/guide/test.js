var numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58]
var faves = []
var magicNumber = 0

pickFavoriteNumbers()
calculateMagicNumber()
outputMsg()

function calculateMagicNumber() {
  for (let fave of faves) {
    magicNumber = magicNumber + fave
  }
}

function pickFavoriteNumbers() {
  for (let num of numbers) {
    if (num > 10 && num <= 20) {
      faves.push(num)
    }
  }
}

function outputMsg() {
  var msg = `The magic number number is: ${magicNumber}`
  console.log(msg)
}

// Now consider a very different style that accomplishes exactly the same outcome:

var sumOnlyFavorites = FP.compose([
  FP.filterReducer(FP.gte(10)),
  FP.filterReducer(FP.lte(20))
])(sum)

var printMagicNumber = FP.pipe([
  FP.reduce(sumOnlyFavorites, 0),
  constructMsg,
  console.log
])

var numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58]

printMagicNumber(numbers) // The magic number is: 42

// ***************
function sum(x, y) {
  return x + y
}
function constructMsg(v) {
  return `The magic number is: ${v}`
}

// 一元

function unary(fn) {
  debugger
  return function(arg) {
    debugger
    return fn(arg)
  }
}

;['1', '2', '3'].map(unary(parseInt))

var unary = fn => arg => fn(arg)[('1', '2', '3')].map(parseInt)
// [1,NaN,NaN]
;['1', '2', '3'].map(unary(parseInt))
;['1', '2', '3'].map(unary(parseInt))
;['1', '2', '3'].map(item => parseInt(item))
// [1,2,3]

function identify(v) {
  return v
}

var identify = v => v

// identify as a default function in a place of a transformation

function output(msg, format = identify) {
  msg = format(msg)
  console.log(msg)
}

function upper(txt) {
  return txt.toUpperCase()
}

output('Hello World', upper)
output('Hello World')

// new
function objectFactory() {
  var f = new Object()
  Constructor = [].shift.call(arguments)
  f.__proto__ = Constructor.prototype
  var ret = Constructor.apply(f, arguments)
  return ret === 'Object' ? ret : f
}

// object.create
Object.create =
  Object.create ||
  function() {
    function F() {}
    F.prototype = [].shift.call(arguments)
    return new F()
  }

// unchangung one
function constant(v) {
  return function() {
    return v
  }
}

// or the ES6 => form
var constant = v => () => v

// Adapting Arguments to Parameters

// split Array -> parameters
function foo(x, y) {
  console.log(x + y)
}

function bar(fn) {
  fn([3, 9, 20])
}

function spreadArgs(fn) {
  debugger
  return function spreadFn(test) {
    debugger
    return fn(...test)
  }
}

bar(spreadArgs(foo))

var spreadArgs = fn => argsArr => fn(...argsArr)

// gather paraments -> array
function gatherArgs(fn) {
  return function gatheredFn(...argsArr) {
    return fn(argsArr)
  }
}

// or the ES6 => arrows form

var gatherArgs = fn => (...argsArr) => fn(argsArr)

function combineFirstTwo([v1, v2]) {
  return v1 + v2
}

;[1, 2, 3, 4, 5].reduce(gatherArgs(combineFirstTwo))

// var pipe =

class utils {
  constructor(value = 1) {
    this._temp = value
  }

  add(value = 0) {
    this._temp = this._temp + value
    return this
  }

  sub(vaue = 0) {
    this._temp = this._temp - value
    return this
  }

  multiplication(value = 1) {
    this._temp = this._temp * value
    return this
  }
  divide(value = 1) {
    this._temp = this._temp / value
    return this
  }
  conclusion() {
    return this._temp
  }
}
var test = new utils(3)

test
  .add(3)
  .add(3)
  .multiplication(4)
  .conclusion()

// chapter 4 composing functions

var a = fn => args => fn(args)

// aritray compose
function compose(fn1, fn2) {
  return function composed(values) {
    return fn1(fn2(values))
  }
}

// general compose

function compose(...fns) {
  return function composed(result) {
    var list = [...fns]
    while (list.length > 0) {
      result = list.pop()(result)
    }
    return result
  }
}

var compose = (...fns) => result => {
  var list = [...fns]
  while (list.length > 0) {
    result = list.pop()(result)
  }
  return result
}

function a(value) {
  return value + '1'
}

function b(value) {
  return value + '2'
}

function c(value) {
  return value + '3'
}

var test2 = compose(
  a,
  b,
  c
)

test2(0)

a = [
  {
    a: 1
  },
  {
    a: 2
  }
]

b = [
  {
    a: 1
  },
  {
    a: 3
  }
]

c = [a, b].reduce((accu = [], cur) => {
  // debugger
  return accu.filter(item => cur.some(element => element.a === item.a))
})

// a.filter(x => b.some(y => y.a === x.a))

// 获取两组对象数组的交集
