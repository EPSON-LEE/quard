# Functional-Light JavaScript

a function with arity 1 is also called "unary", a function with arity 2 is also called "binary", and a function with arity 3 or higher is called "n-ary".

Prcedure oriented style
```
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

```

Function oriented style
```
var sumOnlyFavorites = FP.compose([
  FP.filterReducer( FP.gte( 10 ) ),
  FP.filterReducer( FP.lte( 20 ) )
])(sum)

var printMagicNumber = FP.pipe([
  FP.reduce(sumOnlyFavorites, 0),
  constructMsg,
  console.log
])

var numbers = [4,10,0,27,42,17,15,-6,58];

printMagicNumber( numbers );        // The magic number is: 42

// ***************
function sum(x,y) { return x + y; }
function constructMsg(v) { return `The magic number is: ${v}`; }
```

### Function Input

### Defaulting Parameters

### Counting Inputs

a function with arity 1 is also called "unary", a function width arity 2 is also called "binary", and a function with arity 3 or higher is called "n-ary"

```
function foo(x,y,z, ...args) {
  console.log(x, y, z, args)
}

foo();                  // undefined undefined undefined []
foo( 1, 2, 3 );         // 1 2 3 []
foo( 1, 2, 3, 4 );      // 1 2 3 [ 4 ]
foo( 1, 2, 3, 4, 5 );   // 1 2 3 [ 4, 5 ]
```

### Parameter Destructing

```
function foo() {
  //...
}
foo(...[1, 2, 3])
```

## Chapter 3: Managing Function Inputs


### All for One

function unary(fn) {
  return funtion onlyOneArg(arg) {
    return fn(arg)
  }
}

### One On One

> There are no small parts, only small actors

### unchanging One

```
function constant(v) {
  return function() {
    return v
  }
}

// or the ES6 => form
var constant =
    v =>
      () =>
        v
```

### Adapting Arguments to Parameters

```
// split Array -> parameters
function foo(x,y) {
  console.log( x + y );
}

function bar(fn) {
  fn( [ 3, 9 ] );
}

function spreadArgs(fn) {
  return function spreadFn(argsArr) {
    return fn(...argsArr)
  }
}

bar(spreadArgs(foo))

var spreadArgs =
    fn =>
      argsArr =>
        fn(...argsArr)

// gather paraments -> array
function gatherArgs(fn) {
  return function gatheredFn(...argsArr) {
    return fn(argsArr)
  }
}

// or the ES6 => arrows form

var gatherArgs =
    fn => 
      (...argsArr) =>
        fn(argsArr)


function combineFirstTwo([ v1, v2 ]) {
  return v1 + v2;
}
        
[1,2,3,4,5].reduce( gatherArgs( combineFirstTwo ) );

```
### Some Now, Some Later

## Composing Functions

compose function evolution


```
function compose(fn1, fn2) {
  return composed(value) {
    return fn1(fn2(value))
  }
}
```

self defined compose function we could call it right-partial 
```
var compose =
  (...fns) => 
    result => {
      var list = [...fns]
      while(list.length > 0) {
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

var test2 = compose(a, b, c)

test2(0)
```


composition is helpful even if there's only one occurrence of something

## reduce side effect

