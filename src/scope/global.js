//All these three are global variables
var hello = "Hello";
var hello = "Hello +"; //Bad practice
let world = "Hello world";
const helloWorld = "Hello World!";
console.log(hello);

const aFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

aFunction();

const helloWorld1 = () => {
  globalVar = "im global"; //It's a global variable... Bad practice
};

helloWorld1();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = "Im also global"); //Bad practice... No idea what this does
};

anotherFunction();
console.log(localVar);
