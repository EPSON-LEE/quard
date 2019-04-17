# Functional-Light JavaScript

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

## Function Input

## Defaulting Parameters

## Counting Inputs

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

## Parameter Destructing

```
function foo() {
  //...
}
foo(...[1, 2, 3])
```