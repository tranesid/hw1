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

// the split method splits a string into an array of substrings and returns a new aray. It doesn't change original string. If (" ") is used as a separator, the string is split between words.

// replace()

// the replace method searches a string for a value or regular expression. It reutrns a new string with the value(s) replaced. It doens't change the original string.

// CONDTIONALS

//1. how does the if statement work in js

// where if a condition is true it is used to specify execution for a block of code.

//2. how does the if/else statement work in js

// The if/else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. The if/else statement is a part of JavaScript's "Conditional" Statements, which are used to perform different actions based on different conditions.

//3. how does the if/elseif/else statement work in js

// the same as the if/else, just more condtions to work with

//4. what is a switch statement

// a switch statement is like the else if statements, its used when there a lot of conditions

//5. how is a switch statement different from if/elseif statement

// it uses different syntax and is better for more conditions

//6. what are the Comparison Operators that js uses?

// ==, ===, >, <, >=, <=, !=, !==, 

//7. what are the Logical Operators that js uses?

// && (and) , ||  (or) , ! (not)

//8. what are truthy and falsey values (more high level idea)

// JavaScript uses type coercion (implicit conversion of values from one data type to another) in Boolean contexts, such as conditionals. This means that values are considered either truthy (evaluate to true ) or falsy (evaluate to false ) depending on how they are evaluated in a Boolean context.

//9. what are the specific falsey values in js

// 0, null, undefined, false, NaN, 0n, ""


//10. what are the specific truthy values in js(answer: anything that is not falsey)

// everything besides above

//11. how does a nested if statement in js work

// Nested IF functions, meaning one IF function inside of another, allows you to test multiple criteria and increases the number of possible outcomes. 

// LOOPS


//1. what is for loop in javascript

// a for loop executes a block of code as long as a specified condition is true. JavaScript for loops take three arguments: initialization, condition, and increment. The condition expression is evaluated on every loop. A loop continues to run if the expression returns true.


//1a. what is the syntax for a for loop in javascript

// for (initialization; condition; increment) {
	// Execute code
// }

//2. what is while loop in javascript

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

//2a. what is the syntax for a while loop in javascript

//while (condition)
//  statement

//3. what is while for...in in javascript

// loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true

//3a. what is the syntax for a while for...in in javascript

// while (condition) {
  // code block to be executed
// }

//4. what is nested loop, give an example?

// a loop present inside another loop

// Outerloop
// {
// Innerloop
// {
// //statements to be execute inside inner loop
// }
// //statements to be execute inside outer loop
// }

// FUNCTIONS



//1. how do you define a function in javascript

// a block of code designed to perform a particular task
// is executed when called (invoked)

// function myFunction(param1, param2) {
  // return param 1, param2 // returns product of 
// }

 //- how do define an arrow function

 // x => x + y;

 //- how do you define an regular function

 // function (x) {
   // return x
 // }

 //- what is the difference between arrow/regular functions

 // arrow functions are simpler

//2 how do you call a function in javascript (keep this simple)

// myFunction(param)

//3 what are default parameters in a function?

// The default parameter is a way to set default values for function parameters a value is no passed in
// if not provided, its undefined

//4 what is the difference between params and arguments in js

// Parameters are properties of a function. Arguments are properties of a particular call to a function. In javascript, if you don't give a number of arguments equal to the number of parameters, the extra come across as undefined

//5 what does the return keyword do in a function in js

// it returns the outcome of functtion

//6 what will a function return if there is no return keyword

//If no return statement appears in a function definition, control automatically returns to the calling function after the last statement of the called function is executed. In this case, the return value of the called function is undefined

//7 What is an anonymous function?

// a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

//8 What is a typical use case for anonymous functions?

// a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

//9 Can you define a function as a parameter as function?(answer:yes)


//10 What does it mean that you Can you define a function as a parameter as function?

// A function can take parameters which are just values you supply to the function so that the function can do something utilising those values. These parameters are just like variables except that the values of these variables are defined when we call the function and are not assigned values within the function itself.

//11 Can you have a function return a function in js?(answer:yes)

// yes

//12 What does it mean that you Can you have a function return a function in js?

// nested function

// in realation to 9-12, what is a first class function?

// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.


// ARRAYS


// 1. what is an array in javascript and at a high level how does it work?

// One of the most important data structures in high level programming languages is the array
// A computer program needs information to do its work (solve some problem)
//An array is one of the many data structures that Computer Science has developed to manage/organize information

// The array is a static structure, i.e., the number of elements in an array is fixed at creation and cannot be changed (unless you destroy the array and create a new one)
// http://www.mathcs.emory.edu/~cheung/Courses/255/Syllabus/7-M68000/array.html

// 2. Explain array methods 

// pop(), removes the last element of array, changes original array and returns removed element

// length(), sets or returns the number of elements in array

// push(), adds item to end of array, changes array, returns new length

// shift(), removes the first item of array, changes original, returns shifted element

// slice(), returns selected elements as a new array. selects from given start up to given end. doesn't change array

// splice(), adds and/or removes array elements. overwrites original array

// sort(), sorts elements, overwrites original array. sorts elements as strings in alphabetical/ascending order

// unshift(), adds new elements to beggining of array. overwrites original

// concat(), joins two or more arrays, returns new array. doesn't change existing arrays

// map(), creates a new array from calling a function for every array element. calls a function once for each element. doesn't execute the function for empty elements. doens't change original

// filter(), creates new array filled with elements that pass a test provided by function. doesn't execute the function for empty elements or change original array

// indexOf(), starts at specified index and searches left to right. returns the first index position of a specified value

// find(), returns the value of the first element that passes the test. executes a function for each element. returns undefined if no elements are found. doesn't execute for empty elements. doesn't change original

// findIndex(), executes a function for each array element. returns the index of the first element that passes test. doesn't execute for empty elements. doesn't change original array

// includes() returns true if array contains specified value. returns false if value isn't found. IS case sensitive



//3. What are the benefits of using spread ie'...' syntax is js (hint cloning)

// The spread syntax also enforces immutability, which is really important if you are working with data that should not be mutated. Basically, the spread syntax allows us to copy, into the new array, the values of already defined array(s)

//4. What is array destructuring in js

// is a simplified method of extracting multiple properties from an array by taking the structure and deconstructing it down into its own constituent parts through assignments by using a syntax that looks similar to array literal

//5. When should you use reduce(), map(), foreach() and filter() in js?

// for is speediest method but ugly
// forEach is for ease of use and readability and scope
// map for when you want to transform elements 
// filter for when you want to select a subset of multiple elements in array
// reduce for when you want to derive a single value from multiple elements





// OBJECTS



// 1. What is a object in JS?

// a standalone entity, with properties and type

// (This can get a little complicate so this is the good overview of the basics. 

//https://www.javascripttutorial.net/javascript-objects/)




// 2. How do access a value in a js object using dot '.' notation?

// object.property

// 3. How do access a value in a js object using array like '[""]'notation?

// object['propery]

// 4. what is meant by a key value pair in an object?

// {key:value} A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything

// 5. How do you add a key value pair in an object?

// `obj['name'] = 'John'`
// `obj.name = 'John'`
// `object.assign()`

// 5b. How do you delete a key value pair in an object?

// using delete keyword 

// 6. How do modify a value in an object?

// To change the value of an existing property of an object, specify the object name followed by: a dot, the name of the property you wish to change, an equals sign, and the new value you wish to assign.

// 7. how do you see if a key is in a object?

// the in operator

// 8. how can you clone an object?

// spread {...object} // shallow copy
// object.assign({}, object) // shallow copy
// JSON // deep copy

// 9. what is object destructoring?

// Destructuring allows us to extract multiple properties, or items, from an object at a time
// JavaScript Object Destructuring is the syntax for extracting values from an object property and assigning them to a variable
