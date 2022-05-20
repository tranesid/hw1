// 1. What is the Difference Between =, ==, and === in JavaScript 

// = is used to assign variables in JavaScript.
// == is used for comparison regardless of datatype.
// === is STRICT comparison checking datatype.
// === IS PREFFERED 

// 2. What are template literals in js?

// They use back ticks (``) rather than quotes (""/'') to define strings
// This allows you to use quotes inside the string.
// This also allows multiline strings.
// This provides an easy way to interpolate variables and expressions into strings.
// syntax: ${...}
// INTERPOLATE: insert something into something else.
// backticks are generally used when you need to include variables or expressions in a string.
//    ex: const result = `The names are ${name} and ${name1}`;

// 3. What are the differences between variables created using let, var or const?

// Var is the original definition of variables in JS.
// var is GLOBALLY scoped, unlike the others.
// The keywords differ in their usage and scope.
// var and const are scoped to immediate function body.
// var is hoisted, meaning that it can be accessed in the enclosed scope before declared.
// let is block-scoped, meaning to the immediate enclosing block.
// optimal to initialize var with a value. else its undefined.
// var can be re-declared or updated in same scope. Problematic because can be replaced.
// let is improved of var. has similar syntax but stricter scope.
// should be used when you want to declare a variable that should be restricted to the specific block.
// let cannot be updated or re-declared.
// var has global scope of function.
// EXAMPLE:
// function func() 
// {
//     let x = 10; 
 
//     if(x === 10) 
//     {
//         let y = 20; 
 
//         console.log(x); //Output 10
//         console.log(y); //Output 20
//     }
     
//     console.log(x); // Output 10
//     console.log(y); // ’undefined'
// }
 
 
// func();
// Y is unavailable outside the block in which it was defined.
// It would have been available with var.
// let also cannot be used before it's declaration.
// CONST
// const shares same scoping principles.
// const declares variable with constant value.
// use const if variable should not be allowed to be reassigned in future.

// https://codeburst.io/javascript-var-let-or-const-which-one-should-you-use-2fd521b050fa
// variables outside a function are GLOBAL SCOPE. (VAR)
// global variables can be accessed/changed in any other scope.
// variables defined within a function are in local scope and not accessible in other functions.
// each function creates a new scope. 
// this means variables with the same name can be used in different functions.
// BLOCK SCOPE includes statements and loops or any {}.
// when invoked, doesn't create new scope. Remain in same scope.
// VAR is globally or functionally scoped.
// Does NOT support block-level scope.
// if a variable is defined in a loop or if statement it can be accessed outside the block and become buggy.
// AVOID VAR
// let can be reassigned as const can NOT.
// GENERAL RULE: ALWAYS USE CONST UNLESS VARIABLE NEEDS TO CHANGE.
// DO NOT USE VAR.


// 4. What are data types in javascript?

// https://www.w3schools.com/js/js_datatypes.asp
// https://www.programiz.com/javascript/data-types
// https://www.javascripttutorial.net/javascript-data-types/
// *All data types are primitive except for OBJECT*
// NUMBER: let length = 16;   
//    may be written w or w/o decimals
//    extra large or small numbes w/ scientific notation
//      ex: 123e5 => 12300000
// BIGINT: (ref above)
//    represents the whole numbers that are larger than 253 – 1
// STRING: let lastName = "Johnson";
//    may use "" or ''
//    may wrap " ' ' " or ' " " '
//    represents textual data
//    immutable: can't be modified
//    you can create a new string from an existing string
//    ex: let str = 'JavaScript';
//        str = str + ' String';
// OBJECT: let x = {firstName: "John", lastName:"Doe"};
//    only complex data type
//    essentially a collection of properties
//    written in {name:value, name:value} pairs
//    ex: const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// BOOLEANS: TRUE or FALSE
//    often used in conditional testing
// ARRAYS: [ , , ]
//    ex: const cars = ["Saab", "Volvo", "BMW"];
//    indexes are zero based. 
// NULL: = undefined. represents empty or unknown value
//    !null isn't the same as Null or NULL!
// SYMBOL: instances are unique and immutable
//    syntax: Symbol()
//    does not have a literal form
// NaN: Not a number. 
//    typically encountered when arithmatic can't be expressed as a number.
//    ex: console.log('a'/2); // NaN;
//    Only value is JS not equal to anything/itself.
//    ex: console.log(NaN == NaN); // false
// UNDEFINED: a variable without a value.(type is also undefined)
// EMPTY VALUE: has nothing to do with UNDEFINED. 
//    has both legal value and type.
//*You can use typeof operator to find the type of variable.*
//

// 5. What is difference between null vs undefined?

// Null is the intentional absence of value.
// Undefined means the value doesn't exist in compiler.

// 6. What are various operators supported by javascript?

// +, -, *, /, %, ==, ===, >=, <=, +=, -=, ++, --

// 7. What is 'typeof' operator?

// typeof tells us what type the value has (string, boolean, integer, array, object)

//8. what are some of the important features of JavaScript ES6

// let and const to replace var. 
// Arrow Functions.
// Multi-line Strings
// Default Parameters
// Template Literals
// Destructuring Assignment
// Enhanced Object Literals
// Promises

//9. how does the ternary operator in javascript work?

// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
// a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), 
// and finally the expression to execute if the condition is falsy.

// EXAMPLE: ar 
// let age = 26;
// let beverage = (age >= 21) ? "Beer" : "Soda";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator


//10. what are valid variable names in js

// variable names should not start with a numeral (0-9). 
// They must begin with a letter or an underscore character.
// Also may not be a reserved keyword.

//11. what is variable scope?

// A variable scope is the block in which the variable is used.

//12. what is variable assignment?

// =

// NUMBERS

// 1. How do you generate random integers in js?

// Math.random()

// 2. What is isNaN?

// Not a number. Also doesn't equal itself.

// 3. How to do you see if a number is even?

// % 2 === 0

// 4. how do you convert the string '1' to the number 1

// Integer.parseInt ()

// STRINGS



//1. Explain these methods

// startsWith()

// its used to determine whether a string starts with a character or a particular string. 
// The method returns a boolean true in case the string starts with the specified characters.
// https://flexiple.com/javascript-startswith/#:~:text=The%20JavaScript%20startsWith%20method%20is,entered%20string%20contains%20a%20substring.

// endsWith()

// its a string method that is used to determine whether a string ends with a specific sequence of characters. 
// Because the endsWith() method is a method of the String object, it must be invoked through a particular instance of the String class.
// https://www.techonthenet.com/js/string_endswith.php#:~:text=In%20JavaScript%2C%20endsWith()%20is,instance%20of%20the%20String%20class.

// includes()

// The includes() method determines whether an array includes a certain value among its entries, returning true or false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// slice()

/// returns selected elements in an array, as a new array.
// it selects from a given start, up to a (not inclusive) given end.
// does not change the original array.
// https://www.w3schools.com/jsref/jsref_slice_array.asp

// toUpperCase()

// converts a string to uppercase letters and does not change the original string
// https://www.w3schools.com/jsref/jsref_touppercase.asp

// toLowerCase()

// converts a string to lowercase letters without changing the original string

// charAt()

// returns the character at a specified index(0 based) (position) in a string
// https://www.w3schools.com/jsref/jsref_charat.asp

// split()



// replace()



// CONDTIONALS




//1. how does the if statement work in js


//2. how does the if/else statement work in js


//3. how does the if/elseif/else statement work in js


//4. what is a switch statement


//5. how is a switch statement different from if/elseif statement


//6. what are the Comparison Operators that js uses?


//7. what are the Logical Operators that js uses?


//8. what are truthy and falsey values (more high level idea)


//9. what are the specific falsey values in js


//10. what are the specific truthy values in js(answer: anything that is not falsey)


//11. how does a nested if statement in js work



// LOOPS




//1. what is for loop in javascript


//1a. what is the syntax for a for loop in javascript


//2. what is while loop in javascript


//2a. what is the syntax for a while loop in javascript


//3. what is while for...in in javascript


//3a. what is the syntax for a while for...in in javascript


//4. what is nested loop, give an example?





// FUNCTIONS



//1. how do you define a function in javascript

 //- how do define an arrow function

 //- how do you define an regular function

 //- what is the difference between arrow/regular functions


//2 how do you call a function in javascript (keep this simple)


//3 what are default parameters in a function?


//4 what is the difference between params and arguments in js


//5 what does the return keyword do in a function in js


//6 what will a function return if there is no return keyword


//7 What is an anonymous function?


//8 What is a typical use case for anonymous functions?


//9 Can you define a function as a parameter as function?(answer:yes)


//10 What does it mean that you Can you define a function as a parameter as function?


//11 Can you have a function return a function in js?(answer:yes)


//12 What does it mean that you Can you have a function return a function in js?


// in realation to 9-12, what is a first class function?




// ARRAYS



// 1. what is an array in javascript and at a high level how does it work?



// 2. Explain array methods 

// pop(), 

// length(), 

// push(), 

// shift(), 

// slice(), 

// splice(), 

// sort(), 

// unshift(), 

// concat(),

// map(), 

// filter(), 

// indexOf(), 

// find(), 

// findIndex(), 

// includes()




//3. What are the benefits of using spread ie'...' syntax is js (hint cloning)



//4. What is array destructuring in js



//5. When should you use reduce(), map(), foreach() and filter() in js?






// OBJECTS



// 1. What is a object in JS?

// (This can get a little complicate so this is the good overview of the basics. 

//https://www.javascripttutorial.net/javascript-objects/)




// 2. How do access a value in a js object using dot '.' notation?


// 3. How do access a value in a js object using array like '[""]'notation?



// 4. what is meant by a key value pair in an object?


// 5. How do you add a key value pair in an object?


// 5b. How do you delete a key value pair in an object?


// 6. How do modify a value in an object?


// 7. how do you see if a key is in a object?


// 8. how can you clone an object?


// 9. what is object destructoring?

