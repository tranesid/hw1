// const { type } = require("os")
// function it(str, callbackFunction){
//   console.log(type str) //
//   callbackFunction()
//   do stuff..
// }

// .toEqual checking for same properites
// .toBe checking memory address, identical? or nahhh

// it(name: string, fn?: jest.ProvidesCallback, timeout?: number): void
it('test equality', ()=> {
  // do my test
  // primitve type
  let num = 1
  expect(num).toBe(1)

  // non primitive
  let nums = [1,2,3,4]
  let nums1 = nums
  let nums2 = [1,2,3,4]
  // expect(nums).toBe([1,2,3,4]) // fails
  expect(nums).toBe(nums1) // passes (memory address)
  expect(nums).not.toBe(nums2) // passes (memory address)
  expect(nums).not.toBe([1,2,3,4]) // passes (memory address)
  expect(nums).toEqual([1,2,3,4]) // passes
});

it('looks at mutation/side effect', ()=>{
    let nums = [10,20,30]
    let originalNums = [90,100,110]

    // add an item to the end of array
    // does change array
    nums.push(40)
    expect(nums).toEqual([10,20,30,40])
   

    // add item with no mutation
    let clone = [...originalNums]
    clone.push(120)
    expect(originalNums).toEqual([90,100,110])
    expect(clone).toEqual([90,100,110,120])

})

// identical twins equal each other but are not same being

it('test equaltiy objects', ()=>{
  let person1 = {name: 'bob dole', age:88}
  let person2 = {name: 'bob dole', age:88}
  let person3 = {name: 'jim dole', age:18}
  let person4 = {name: 'jim dole', dob:'12/12/24'}

  expect(person1).toBe(person1)
    expect(person1).not.toBe(person2)
    expect(person1).toEqual(person2)
    expect(person1).not.toEqual(person3)
    expect(compareKeys(person1, person2)).toBe(true)
    expect(compareKeys(person3, person4)).toBe(false)
})

// DIFFERENCE BETWEEN relative and absolute path (file/folder paths)
// absolute path (pwd) /Users/sidneytrane/Desktop/DPL/week1/hw1
// relative path is relative to which directory I am in
//  hw1/tests/demo.test.js

it('test equality objects', ()=>{
  //https://stackoverflow.com/questions/14368596/how-can-i-check-that-two-objects-have-the-same-set-of-property-names
  function compareKeys(a, b) {
      // keys
      // (method) ObjectConstructor.keys(o: {}): string[] (+1 overload)
      //TODO sort
      var aKeys = Object.keys(a).sort()
      var bKeys = Object.keys(b).sort()
  
      return JSON.stringify(aKeys) === JSON.stringify(bKeys);
  }})