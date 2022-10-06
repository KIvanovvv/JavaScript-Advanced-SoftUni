const { expect } = require("chai");
const { isSymmetric } = require(`./tests/checkForSymmetry`);

describe(`isSymmetric`, () => {
  it(`should return true if array is symmetric`, () => {
    //Arange
    let array = [1, 2, 3, 2, 1];
    //Act
    let result = isSymmetric(array);
    //Assert
    expect(result).to.be.true;
  });
  it(`should retrun false for non symmetric array`, () => {
    //Arange
    let array = [1, 2, 3, 4, 3];
    //Act
    let result = isSymmetric(array);
    //Assert
    expect(result).to.be.false;
  });
  it(`should return false for non array arguments`, () => {
    //Arange
    let array = `invalid`;
    //Act
    let result = isSymmetric(array);

    //Assert
    expect(result).to.be.false;
  });
  it(`should take an array as argument`, () => {
    //Arange
    let array = [1, 2];
    //Act
    let result = isSymmetric(array);
    //Assert
    expect(result).to.be.false;
  });
  it(`should return false if array is not from numbers`, () => {
    //Arange
    let array = [1, `#`, true];
    //Act
    let result = isSymmetric(array);
    //Assert
    expect(result).to.be.false;
  });
});
