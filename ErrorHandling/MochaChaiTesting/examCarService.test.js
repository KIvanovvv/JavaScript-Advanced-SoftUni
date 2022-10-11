const { expect, assert, AssertionError } = require("chai");
const carService = require(`./tests/examCarService`);

describe("Tests carService", function () {
  describe("valid inputs of carService.isItExpensive", function () {
    it(`should return "The issue with the car is more severe and it will cost more money" if input is Engine`, function () {
      //Arange
      let input = `Engine`;
      //Act
      let result = carService.isItExpensive(input);
      //Assert
      expect(result).to.be.equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it(`should return "The issue with the car is more severe and it will cost more money" if input is Transmission`, function () {
      //Arange
      let input = `Transmission`;
      //Act
      let result = carService.isItExpensive(input);
      //Assert
      expect(result).to.be.equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it(`should return "The overall price will be a bit cheaper" if input is not Engine or Transmission`, function () {
      //Arange
      let input = `front lights`;
      //Act
      let result = carService.isItExpensive(input);
      //Assert
      expect(result).to.be.equal(`The overall price will be a bit cheaper`);
    });
  });
  describe(`Testing input of carService.discount()`, () => {
    it(`should throw error if both inputs are not type number`, () => {
      assert.throw(() => carService.discount("test", 100), "Invalid input");
      assert.throw(() => carService.discount(100, `test`), `Invalid input`);
    });
    it(`should return msg: "You cannot apply a discount"`, () => {
      assert.equal(carService.discount(1, 200), "You cannot apply a discount");
      assert.equal(carService.discount(2, 200), "You cannot apply a discount");
    });
    it(`should return msg: "Discount applied! You saved {result}$"`, () => {
      assert.equal(
        carService.discount(3, 300),
        `Discount applied! You saved ${45}$`
      );
      assert.equal(
        carService.discount(7, 300),
        `Discount applied! You saved ${45}$`
      );
      assert.equal(
        carService.discount(8, 100),
        `Discount applied! You saved ${30}$`
      );
      assert.equal(
        carService.discount(12, 100),
        `Discount applied! You saved ${30}$`
      );
    });
  });
  describe(`Testing inputs of carService.partsToBuy`, () => {
    it(`if both inputs are not Arrays should throw "Invalid input"`, () => {
      assert.throw(
        () => carService.partsToBuy(`some parts`, `needed parts`),
        `Invalid input`
      );
      assert.throw(
        () => carService.partsToBuy([`some parts`], `needed parts`),
        `Invalid input`
      );
    });
    it(`should return sum`, () => {
      assert.equal(
        carService.partsToBuy([{ part: `lights`, price: 100 }], [`lights`]),
        100
      );
    });
    it(`should return sum`, () => {
      assert.equal(
        carService.partsToBuy(
          [
            { part: `lights`, price: 100 },
            { part: `dashboard`, price: 500 },
          ],
          [`lights`, `dashboard`]
        ),
        600
      );
    });
  });
});
