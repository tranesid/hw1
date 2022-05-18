


/////////////////////////////////////////////////////////
//function that takes a number and doubles it
// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
  return num = num * 2
  // num *= 2
};

/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
    if (num % 2 === 0) {
      return 'even';
    }
   else {
      return 'odd';
   }
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = (maxLimit = 5 ) => {
  let rand = Math. random() * maxLimit;

  return Math.round(rand);

};

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test randomNumber'
const calc = (num1, num2, opp) => {
  if (opp === '+') return rum1 * num2;
  if (opp === '-') return num1 * num2;
  if (opp === '*') return num1 * num2;
  if (opp === '/') return num1 / num2;
};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {
  let vowelsCount = 0;

  //turn the input into a string
  let string = str.toString();

  //loop through the string
  for (let i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  return numbers.reduce(function(a,b) {
    return a + b
  });
};

/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (array) => {
  return Math.max.apply(null, array);
};
// keep getting undefined!?!?!
// https://www.codegrepper.com/code-examples/javascript/find+max+and+min+value+in+array+javascript


/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
const getLowNum = (array) => {
  return Math.min.apply(null, array);
};
/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  let prev, cur;

  for (var i = 0; i < numbers.length; i++) {
    cur = numbers[i];
    if (i && cur !== prev && cur !== prev + 1) return false;
    prev = cur;
  }

  return true;
}
// for (initial value; condition; iteration) 
// https://stackoverflow.com/questions/41668213/how-to-check-if-an-array-is-increasing-in-javascript


//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (num) => {
    if (num < 0 && num > 100) {
      return invalid
      // fix statement below
    } else if (num % 3 === 0 && (num !% 5 === 0)) {
        return 'fizz'
    } else if (num % 5 === 0) {
      return 'buzz'
    } else if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz'
    } else {
      return num
    }
};
//change avove to switch statement
module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
};

// QUESTIONS:
// am i supposed to be writing my own variables and tests(expect statements)?
// why are we declaring functions in variables? to answer multiple questoins?
//  (A) After a function expression has been stored in a variable, the variable can be used as a function


// NOTES:
// fuction expressions can be stored in variable
//  ex: const functoinName = (parameter) => {
//       (arguments)
//       (rule to make expectations work)
//      }

// when calling the function, you provide the parameter specific info.

// easy function tutorial:
// https://www.youtube.com/watch?v=AY6X5jZZ_JE