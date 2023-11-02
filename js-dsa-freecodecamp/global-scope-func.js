// scope is the visibility of a variable..
// variable outside of a function block have global scope.
// Global variable are seen everywhere in the js code.
// Variables which are declared without the let or const keywords are created in the global scope.
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
return oopsGlobal = 5;

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}