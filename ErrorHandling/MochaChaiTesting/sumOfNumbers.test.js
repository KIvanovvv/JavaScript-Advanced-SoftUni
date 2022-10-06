const { expect } = require("chai");
const { sum } = require("./tests/sumOfNumbers");

describe(`sum`, () => {
  it(`all numbers should be sumed`, () => {
    //Arange
    let array = [1, 2, 3];
    //Act
    let result = sum(array);
    //Assert
    expect(result).to.be.equal(6);
  });
  it(`input should be array`, () => {
    //Arange
    let invalidArray = `invalidArray`;
    //Act
    let result = sum(invalidArray);
    //Assert
    expect(result).to.be.NaN;
  });
});
