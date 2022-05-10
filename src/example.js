// we can have multiple js files in our src folder and multiple test files in
// in our test folder.  The convention is to for every js file you have in the source folder with the filename.test.js


// Here we can write or function 
const sayHello = ()=>{
    return "Hello"
}

const sayGoodbye = ()=>{
    return "Goodbye"
}




// add all functions to module.exports to the object at the bottom so we can import them in the test file.
// There is a ES6 way to do import and exports but keep this way for now
module.exports = {
    sayHello,
    sayGoodbye
};
