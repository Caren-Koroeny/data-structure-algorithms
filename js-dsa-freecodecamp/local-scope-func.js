// This are variable declared within a function.
// THis means they are only visible inside a function.
function myLocalScope(){
    const myVar = 'inside myLocalScope';
    console.log('inside myLocalScope', myVar);
}
myLocalScope()

console.log('outside myLocalScope', myVar);