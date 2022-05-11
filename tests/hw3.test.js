const { doubleNum, doubleArray, isEven, filterEvens } = require("../sol/hw3");

describe("doubling an array of numbers", () => {
  // test callback that doubles one number
  it("test doubleNumb", () => {
    let returnValue1 = doubleNum(2);
    let returnValue2 = doubleNum(10);

    expect(returnValue1).toBe(4);
    expect(returnValue2).toBe(20);
  });

  // test  doubling array of numbers
  it("test doubleArray", () => {
    let returnValue1 = doubleArray([1,2,3]);
    let returnValue2 = doubleArray([10,20,30]);

    expect(returnValue1).toEqual([2,4,6]);
    expect(returnValue2).toEqual([20,40,60]);
  });

});

describe("filter evens from an array of numbers", () => {
  // test callback that see if number is even
  it("test isEven", () => {
    let returnValue1 = isEven(2);
    let returnValue2 = isEven(3);

    expect(returnValue1).toBe(true);
    expect(returnValue2).toBe(false);
  });

  // test  filter of even numbers
  it("test doubleArray", () => {
    let returnValue1 = filterEvens([1,2,3,4]);
    let returnValue2 = filterEvens([10,20,31]);
    let returnValue3 = filterEvens([1,31]);

    expect(returnValue1).toEqual([2,4]);
    expect(returnValue2).toEqual([10,20]);
    expect(returnValue3).toEqual([]);
  });

});

