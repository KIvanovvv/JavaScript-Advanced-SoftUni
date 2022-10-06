const { expect } = require("chai");
const { lookupChar } = require(`./tests/charLookUp`);

describe(`Test invalid inputs of lookupChar`, () => {
  it(`Should return undefined if first parametar is not a String`, () => {
    //Arange
    const string = 123;
    const index = 1;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.undefined;
  });
  it(`Should return undefined if second parametar is not a Number`, () => {
    //Arange
    const string = `Gosho`;
    const index = `one`;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.undefined;
  });
  it(`Should return undefined if second parametar is a flooting number`, () => {
    //Arange
    const string = `Gosho`;
    const index = 3.4;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.undefined;
  });
  it(`Should return Incorrect Index if index is bigger than the length`, () => {
    //Arange
    const string = `Gosho`;
    const index = 8;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.equal(`Incorrect index`);
  });
  it(`Should return Incorrect Index if index is less than 0`, () => {
    //Arange
    const string = `Gosho`;
    const index = -2;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.equal(`Incorrect index`);
  });
});
describe(`Test Valid input of lookupChar`, () => {
  it(`Should return o`, () => {
    //Arange
    const string = `Gosho`;
    const index = 1;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.equal(`o`);
  });
  it(`Should return h`, () => {
    //Arange
    const string = `Gosho`;
    const index = 3;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.equal(`h`);
  });
  it(`Should return o`, () => {
    //Arange
    const string = `Gosho`;
    const index = 4;

    //Act
    const result = lookupChar(string, index);
    //Assert
    expect(result).to.be.equal(`o`);
  });
});
