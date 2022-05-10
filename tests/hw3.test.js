const { doubleNum, doubleArray } = require("../sol/hw3");

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
