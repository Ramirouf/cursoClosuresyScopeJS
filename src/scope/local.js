const helloWorld = () => {
  const hello = "Hello world";
  console.log(hello);
};

helloWorld();
//console.log(hello); //Impossible to access, due to it's local scope

var scope = "I'm global";

const functionScope = () => {
  //Lexical scope
  var scope = "I'm only local, now";
  //Inside this function, "scope" has it's local value
  //But outside it has it's global value
  //So... A variable could have a different value depending on it's location
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope(); //"I'm global"
console.log(scope); //"I'm only local, now"
