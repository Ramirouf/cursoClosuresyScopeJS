const fruits = () => {
  var fruit = "apple";
  console.log(fruit);
};

fruits();
console.log(fruit);

const anotherFunction = () => {
  var x = 1;
  var x = 2;
  let y = 1;
  //let y = 2;
  //A variable declared with "var" could be reassigned
  //It is not recommended to be used
  console.log(x);
  console.log(y);
};

anotherFunction();
