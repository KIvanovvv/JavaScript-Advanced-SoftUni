const { expect } = require("chai");
const { sum } = require("./tests/tests");

describe(`sum`, () => {
  it(`should sum two numbers properly`, () => {
    //Arange
    let a = 5;
    let b = 5;
    //Act
    let result = sum(a, b);
    //Assert
    expect(result).to.be.equal(10);
  });
  it(`input should be only numbers`, () => {
    //Arange
    let a = `5`;
    let b = 10;
    //Act
    let result = sum(a, b);

    //Assert
    expect(result).to.be.NaN;
  });
});
