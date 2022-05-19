//1. write a function that takes an array of numbers
// and return a new array with value doubled

const { isOddOrEven } = require("./hw1");

// part1 write a function that doubles a number and test
/**
 * doubles a number
 * @param  {number} num
 * @return  {number} number times 2
 */
 const doubleNum = (num) => {
   return num * 2
  };
  
  // part 2 use the method from above to double numbers in new array
  /**
   * doubles numbers from given array into a new array
   * @param  {[number]} arr: an array of numbers to be doubled
   * @return {[number]} a NEW array with numbers doubled
   */
  const doubleArray = (arr) => {
    let map = arr.map(doubleNum);
    return map
  };
  
  //2. write a function that takes an array of numbers
  // and return a new array with only the even ones
  
  // part1 write a function that takes number and return true if even
  /**
   * returns true if num is even false otherwise
   * @param  {number} a integer
   * @return  {boolean} true if number was even false otherwise
   */
  const isEven = (num) => {
      if(num % 2 == 0) 
      // got stuck trying to write if else statements
  };
  
  // part 2 use the method from above to remove odd numbers from array
  /**
   * removes odd numbers from array
   * @param  {[number]} arr: an array of numbers 
   * @return {[number]} a NEW array with only even numbers
   */
   const filterEvens = (arr) => {
    let theEvens = arr.filter(number => number % 2 == 0);
    return theEvens
  };
  
  // https://www.encodedna.com/javascript/find-even-numbers-in-array-using-javascript.htm

  module.exports = {
    doubleNum,
    doubleArray,
    isEven,
    filterEvens,
  };
  