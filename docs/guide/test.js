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

// 一元

function unary(fn) {
  debugger
  return function (arg) {
    debugger
    return fn(arg)
  }
}

["1","2","3"].map( unary( parseInt ) );


var unary =
    fn =>
      arg =>
        fn(arg)

  ["1","2","3"].map( parseInt );
  // [1,NaN,NaN]
  ["1","2","3"].map( unary(parseInt) );

  ["1","2","3"].map( unary(parseInt) );

  ["1","2","3"].map( item => parseInt(item) );
  // [1,2,3]

function identify(v) {
  return v
}

var identify =
    v => 
      v;

// identify as a default function in a place of a transformation

function output(msg, format = identify) {
  msg = format(msg)
  console.log(msg)
}

function upper(txt) {
  return txt.toUpperCase()
}

output("Hello World", upper)
output("Hello World")

// new 
function objectFactory() {
  var f = new Object()
  Constructor = [].shift.call(arguments)
  f.__proto__ = Constructor.prototype
  var ret = Constructor.apply(f, arguments)
  return ret === 'Object' ? ret : f
}

// object.create
Object.create = Object.create || function() {
  function F() {
  }
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
var constant =
    v =>
      () =>
        v

// Adapting Arguments to Parameters

// split Array -> parameters
function foo(x,y) {
  console.log( x + y );
}

function bar(fn) {
  fn( [ 3, 9, 20 ] );
}

function spreadArgs(fn) {
  debugger
  return function spreadFn(test) {
  debugger
    return fn(...test)
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




