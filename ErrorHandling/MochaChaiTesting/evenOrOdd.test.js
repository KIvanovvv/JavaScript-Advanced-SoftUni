const { expect } = require("chai");
const { isOddOrEven } = require("./tests/evenOrOdd");

describe(`Invalid inputs of isOddOrEven`, () => {
  it(`Should return undefined wiht input which is not a string`, () => {
    //Arrange
    let input = 10;
    //Act
    let result = isOddOrEven(input);
    //Assert
    expect(result).to.be.undefined;
  });
  it(`Should return undefined wiht input which is not a string`, () => {
    //Arrange
    let input = true;
    //Act
    let result = isOddOrEven(input);
    //Assert
    expect(result).to.be.undefined;
  });
});

describe(`Check functionality with VALID inputs`, () => {
  it(`should return even`, () => {
    //Arange
    let input = `asda`;
    //Act
    let result = isOddOrEven(input);
    //Assert
    expect(result).to.be.equal(`even`);
  });
  it(`should return odd`, () => {
    //Arange
    let input = `asd`;
    //Act
    let result = isOddOrEven(input);
    //Assert
    expect(result).to.be.equal(`odd`);
  });
});
