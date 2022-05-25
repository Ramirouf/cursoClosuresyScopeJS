//Show local, global and block scope

var a = "Hello, world";

function hello() {
  let b = "Hallo, willkommen";
  const c = "Hola, mundo";
  if (true) {
    let d = "Hello world ² !!!";
    debugger;
  }
}

hello();
