// Variables + Data types
// in js 3 ways to declare variable
// 1. var = old
// 2. let = new and improved
// 3. const =

// var x = 1; // var hoists
// let is preffered: stricter

// convention to upcase constants that are set values that don't change
// const PI = 3.1415 
// PI = 2.5 // causes error, const can't be redefined

// variable has named value & that value has a type
// undefined, null, boolean, number, string, object, array, Date
// a variable is going to have a scope (visibility)

// globally scoped to the file
// let age = 34;
// let bar = 'yoyoyo'

// const foo = () => {
//   // bar is scoped to this function
//   let bar = 21
//   console.log(age)
//   console.log(bar) // 21
// }

// foo()
// console.log(bar) // yoyoyo

// let age = 34;

// let name = 'James'
// // foo() // 34
// // console.log(bar) // 'yoyo'
// const sayHi = (name)=>{
//     // bar is scoped to the function
//     console.log(`Hello ${name}`) // undefined
// }

// sayHi()

// console.log(typeof 1); // number
// console.log(typeof typeof 1); // string
// console.log(typeof "yo"); // string
// console.log(typeof 1.2); // number
// console.log(typeof []); // object: huh?
// console.log([] instanceof Array); // true: see it is an array
// console.log(typeof { yo: "asdf" }); // object
// console.log({ yo: "asdf" } instanceof Object); // true
// console.log(typeof true); // boolean
// typeof null // object

// const season = "spring";

// if (season === "spring") {
//   console.log("yeah for spring");
// } else if (season === "summer") {
//   console.log("yeah for Summer");
// } else if (season === "fall") {
//   console.log("yeah for fall");
// } else {
//   console.log("yeah for winter");
// }

// switch - another if else if (preffered if 3 or more)
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// switch (season) {
//   case "spring":
//     console.log("yeah for spring");
//     break; // exit this switch statment
//   case "summer":
//     console.log("yeah for summer");
//     break;
//   case "fall":
//     console.log("yeah for summer");
//     break;
//   default:
//     console.log("yeah for winter");
//     break;
// }

// let num = 5
// let isOdd

// // if(num % 2 === 0){
// //     isOdd =false
// // } else {
// //     isOdd = true
// // }

// // ternary
// isOdd = num % 2 === 0 ? false : true 

// console.log(isOdd)

// let x 

// // short circuit evaluation
// let y = x || 3

// console.log(y) //3

// conditions

// let x = undefined // falsey
// let x // falsey
// let x = false// falsey
// let x = 0 // falsey
// let x = null // falsey
// let x = -0 // falsey
// let x = NaN //falsey
//let x = '' //falsey
// let x = 0n //falsey
// console.log(typeof 0n) //bigint

// let x = 10 // truthy
//  let x = 'hello' // truthy
// let x = true// truthy
// let x = 1 // truthy
// let x = -10 // truthy
// let x = []// truthy
// let x = {}// truthy

// if({}){
//   console.log('true/truthy')
// }else{
//   console.log('false/falsey')
// }

// Functions
// - breaks our code into manageable chunks
// - should perform a single task
// - should have a concise name
// - perform an action or/and return some data
// let x = 1
// let y = x
// console.log(y) // 1
//////////////////////

// const foo = () =>{
//     return 'yo'
// }

// let bar = foo
// console.log(bar) // [Function: foo]
// console.log(bar()) // yo

//////////////////////

// const foo = () =>{
//     return 'yo'
// }



// let bar = foo()
// console.log(bar) // yo


// //////////////////////
// const foo = (bam)=>{
//     return bam[0]
// }

// console.log(foo('hello')) //'h'
// console.log(foo(['a','b','c'])) //'a'
// console.log(foo({})) // undefined

// // //////////////////////
// const foo = (bam)=>{
//     return bam()
// }

// const baz = () =>{
//     return 1 + 1
// }
// let whatisthis = foo(baz)
// console.log(whatisthis) // 2

// //////////////////////
// const foo = (bam)=>{
//     return bam()
// }

// const baz = () =>{
//     return 1 + 1
// }
// let whatisthis = foo(baz())// ERROR
// console.log(whatisthis) 

// baz => function
// baz() => 2

//////////
// let foo = () =>{
//     return ()=> {
//         return 1
//     }
// }

// let funcYo = foo()
// console.log(funcYo) // [Function (anonymous)]
// console.log(funcYo()) // 1

///////
// const add = (num1, num2) => {
//     return num1 + num2
// }

// let sum1 = add(1,1)
// let sum2 = add(3,5)
// console.log(sum1) // 2
// console.log(sum2) // 8

// //(ONLY with arrow function)
// // without {} there implicit return
// const addShort = (num1, num2) => num1 + num2
// console.log(addShort(2,2))

/////////
// const foo = () => 1
// console.log(foo) // function foo
// console.log(foo()) // 1

///////
// const add = (num1, num2) => {
//     return num1 + num2
// }

// () => add(1,2)
// console.log(foo) // function
// console.log(foo()) // 3

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// const myFilter = (arr,func) => {
//   let itemsToKeep = []
//   arr.forEach((currentItem)=>{
//       // how do i know if I want to keep the thing
//       // when i don't even know what the thing is.
//       // ok if you(the person using myFilter) give me
//       // a function that return true when give the thing then
//       // i can make
//       if(func(currentItem)){
//           itemsToKeep.push(currentItem)
//       }
//   })
//   return itemsToKeep

// }

// let x = myFilter([1,2,3,4,5], (num)=> {
//   return num%2 ===0
// })
// let y = myFilter([{name:'tony', age:21},{name:'bob',age:12}], (person)=> person.age >= 21)
// console.log(x)
// console.log(y)

// const myForEachLoop = (arr, func) =>{
//   for(let i=0; i< arr.length; i++){
//       func(arr[i])
//   }
// }

// let yo = myForEachLoop([1,2,3,4,5], (thing)=> {console.log(thing)})
// console.log(yo)

// // goes in the array calls function and what that function is pushed into 
// // in a new array. and at the that array is returned
// const myMap = (arr, func) =>{
//   let itemsToReturn = []
//   for(let i=0; i< arr.length; i++){
//       // create a new thing with the function they give me
//       let newThing = func(arr[i])
//       itemsToReturn.push(newThing)
//   }
//   return itemsToReturn
// }

// let yo1 = myMap([1,2,3,4,5], (thing)=> thing *2)
// console.log(yo1) //

//////// REDUCE

let nums = [1,2,3,4]

// some random task with reduce
// let total = nums.reduce((accum, currentItem)=>{
//     console.log('accum:', accum)
//     console.log('currentItem:', currentItem)
//     console.log('currentItem: + accum:', currentItem + accum)

//     // what this function returns becomes the next accum
//     return accum + currentItem
// }, 0)

// console.log(total)

// // filter with reduce
// let evens = nums.reduce((accum, currentItem)=>{
//     if(currentItem % 2 === 0){
//         accum.push(currentItem)
//     }
//     console.log('accum:', accum)
//     return accum
// }, [])

// console.log(evens)


// // map with reduce
// let html = nums.reduce((accum, currentItem)=>{
//     accum.push(`<p>${currentItem}</p>`)
//     return accum
// }, [])
// console.log(html)