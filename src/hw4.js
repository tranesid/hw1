const { parse } = require("path");

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];


// MAP
// Get an array of all names
let myListOfNames = characters.map(user => {
  return user.name;
  // console.log(user.name);
 });

// Get an array of all heights

let MyListOfHeights = characters.map(user =>{
  return user.height
})


// Get an array of objects with just name and height properties
let MyListOfNamesAndHeights = characters.map(user =>{
  return user.name + ' ' + user.height
})

// Get an array of all first names

let firstNames = characters.map(user=>{
  return user.name.split(' ')[0];
})




// REDUCE OR FOREACH


// Get the total mass of all characters
let sum = 0;
characters.forEach((x)=>{
  let massValue = parseInt(x.mass);
  sum += massValue
  return sum
})

let myVar = characters.reduce((accum, current)=>{
  accum += parseInt(current.mass);
  return accum
},0)
// console.log(myVar)

// Get the total height of all characters

let totalHeight = characters.reduce((accum, current)=>{
  accum += parseInt(current.height);
  return accum
},0)

//  console.log(totalHeight)

// Get the total number of characters in all the character names

let totalCharacters = characters.reduce((accum, current)=>{
  accum += (current.name.split('').length - 1);
  return accum
},0)

// console.log(totalCharacters)

// Get the total number of characters by eye color (hint. a map of eye color to count)

let totalCharactersByEyeColor = characters.reduce((accum, current)=>{
  let color = current.eye_color 
  accum [color] += 1 
  return accum
},{blue: 0, yellow: 0, brown: 0})
// console.log(totalCharactersByEyeColor)

// FILTER
// Get characters with mass greater than 100

let massGreaterThan100 = characters.filter((people) => {
  
      return people.mass >= 100
  
});
// console.log(massGreaterThan100)

// Get characters with height less than 200

let heightLessThan200 = characters.filter((people) => {
    return people.height < 200
})

// console.log(heightLessThan200)

// Get all male characters

let getMales = characters.filter((people) => {
  return people.gender == 'male'
})

// console.log(getMales)

// Get all female characters

let getFemales = characters.filter((people) => {
  return people.gender == 'female'
})
// console.log(getFemales)

// SORT
// Sort by name 

let sortByName = characters.sort((a,b) => {
  if(a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0;
  }
});

// console.log(sortByName)

//https://www.w3schools.com/js/js_array_sort.asp
// https://www.youtube.com/watch?v=AmQ1OX7XBJw

// Sort by mass ????

let sortByMass = characters.sort(function(a,b) {
  return a.mass - b.mass
})

// console.log(sortByMass)

// Sort by height ????

let sortHeight = characters.sort(function(a,b) {
  return a.height - b.height
})
// console.log(sortHeight)
// Sort by gender

let byGender = characters.sort((a,b) => {
  if(a.gender > b.gender) {
    return 1;
  } else if( b.gender > a.gender){
    return -1;
  } else {
    return 0;
  }
});
// console.log(byGender)

// EVERY
// Does every character have blue eyes?

let blueEyes = characters.every((eye_color) => {
  return eye_color == 'blue';
});
// console.log(blueEyes)

// Does every character have mass more than 40?

let massGreaterThan40 = characters.every((mass) => {
  return mass > '40';
});
// console.log(massGreaterThan40)

// Is every character shorter than 200?

let shorterThan200 = characters.every((height) =>{
  return height < '200';
});
// console.log(shorterThan200)

// Is every character male?

let allMale = characters.every((gender) => {
  return gender == 'male';
});
// console.log(allMale)

// SOME
// Is there at least one male character?

let checkForMales = characters.some(characters => characters.gender === 'male')
// console.log(checkForMales)

// Is there at least one character with blue eyes?

let checkForBlueEyes = characters.some(characters => characters.eye_color === 'blue')
// console.log(checkForBlueEyes)

// Is there at least one character taller than 200?

let checkWhoIsTall = characters.some(characters => characters.height > 200)
// console.log(checkWhoIsTall)

// Is there at least one character that has mass less than 50?

let MassLessthan50 = characters.some(characters => characters.mass < 50)
// console.log(MassLessthan50)

// Bonus
// Redo the filter and map functions challenges, but do them with reduce/forEach
// come up with your own and use different methods you have not used
// add tests