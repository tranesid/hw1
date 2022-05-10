// to run this specific test file run 'yarn run test example'
// or run 'yarn run test', to run all test
// import our functions
const { sayHello, sayGoodbye } = require("../src/example");

// tests have this signature
// it('string descrbing test',()=>{// callback function to do the test})
it("should give me a warm welcome", () => {
  // I use the expect function from jest and pass it a value
  // and have it expect to the string "Hello"
  expect(sayHello()).toBe("Hello");
  // I can use the not to see it is not equal to something
  expect(sayHello()).not.toBe("GoodBye");
});

// I can write multiple test
it("should give me send me ofd", () => {
  // I could store the return value of a function in a var
  let returnValue = sayGoodbye();
  // this fails because it is Goodbye
  //  expect(returnValue).toBe("GoodBye");
  expect(returnValue).toBe("Goodbye");
  // I can use the not to see it is not equal to something
  expect(returnValue).toBe("Goodbye");
});
