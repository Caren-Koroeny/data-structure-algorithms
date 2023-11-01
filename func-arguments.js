// Parameters are variables that act as placeholders for the values that are to be input
// to a function when it is called, the actual values that are passed into a function when it is called are known as arguments.

function testFun(param1, param2) {
    console.log(param1, param2);
}

testFun("Hello", "world");

// Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
function functionWithArgs(param1, param2){
    console.log(param1 + param2)
  }
  functionWithArgs(1,2);
  functionWithArgs(7,9)