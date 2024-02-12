// Object literal
const myObject = {
    property: "Value!",
    otherProperty: 77,
    "obnoxious property": function(){
        // do stuff
    }
};
// There are also 2 ways to get information out of an object: dot notation and bracket notation.

myObject.property; //Value!

// Bracket notation
myObject["obnoxious property"]; // [Function]
// Dot notation is cleaner and is usually preferred.
