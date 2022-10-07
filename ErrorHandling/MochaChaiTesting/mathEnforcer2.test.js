const { expect } = require("chai");
const mathEnforcer = require(`./tests/mathEnforcer`);

describe(`MathEnforcer function`, () => {
  describe(`Testing mathEnforcer.addFive func`, () => {
    it(`should return undefined if input is a String`, () => {
      //Arange
      let input = `five`;

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Boolean`, () => {
      //Arange
      let input = true;

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Array`, () => {
      //Arange
      let input = [5];

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Obj`, () => {
      //Arange
      let input = { five: 5 };

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return 10 if input is 5`, () => {
      //Arange
      let input = 5;

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.equal(10);
    });
    it(`should return 0 if input is -5`, () => {
      //Arange
      let input = -5;

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.equal(0);
    });
    it(`should return 5.005 if input is 0.005`, () => {
      //Arange
      let input = 0.005;

      //Act
      let result = mathEnforcer.addFive(input);

      //Assert
      expect(result).to.be.equal(0.005 + 5);
    });
  });
  /////////////////////////////////////////////////////////
  describe(`Testing mathEnforcer.subtractTen func`, () => {
    it(`should return undefined if input is a String`, () => {
      //Arange
      let input = `five`;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Boolean`, () => {
      //Arange
      let input = true;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Array`, () => {
      //Arange
      let input = [5];

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if input is a Obj`, () => {
      //Arange
      let input = { five: 5 };

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return 0 if input is 10`, () => {
      //Arange
      let input = 10;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.equal(0);
    });
    it(`should return -20 if input is -10`, () => {
      //Arange
      let input = -10;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.equal(-20);
    });
    it(`should return -10 if input is 0`, () => {
      //Arange
      let input = 0;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.equal(-10);
    });
    it(`should return 5.005 if input is 15.005`, () => {
      //Arange
      let input = 15.005;

      //Act
      let result = mathEnforcer.subtractTen(input);

      //Assert
      expect(result).to.be.equal(15.005 - 10);
    });
  });
  ///////////////////////////////////////////
  describe(`Testing mathEnforcer.sum func`, () => {
    it(`should return undefined if inputA is a String`, () => {
      //Arange
      let inputA = `five`;
      let inputB = `5`;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if inputA is a Boolean`, () => {
      //Arange
      let inputA = true;
      let inputB = true;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if inputB is a Array`, () => {
      //Arange
      let inputA = { five: 5 };
      let inputB = [5];

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return undefined if inputB is an Obj`, () => {
      //Arange
      let inputA = 5;
      let inputB = { five: 5 };

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.undefined;
    });
    it(`should return 10 if inputA is 5 and inputB is 5`, () => {
      //Arange
      let inputA = 5;
      let inputB = 5;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.equal(10);
    });
    it(`should return 5 if inputA is 10 inputB is -5`, () => {
      //Arange
      let inputA = 10;
      let inputB = -5;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.equal(5);
    });
    it(`should return -15 if inputA is -10 inputB is -5`, () => {
      //Arange
      let inputA = -10;
      let inputB = -5;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.equal(-15);
    });
    it(`should return 10.005 if inputA is 5 inputB is 5.005`, () => {
      //Arange
      let inputA = 5;
      let inputB = 5.005;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.equal(5 + 5.005);
    });
    it(`should return 10.01 if inputA is 5.005 inputB is 5.005`, () => {
      //Arange
      let inputA = -5.005;
      let inputB = 5.005;

      //Act
      let result = mathEnforcer.sum(inputA, inputB);

      //Assert
      expect(result).to.be.equal(5.005 - 5.005);
    });
  });
});
