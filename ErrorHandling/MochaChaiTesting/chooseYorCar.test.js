const { assert, AssertionError } = require("chai");
const chooseYourCar = require(`./tests/chooseYourCar`);

describe(`Test chooseYourCar func`, () => {
  describe(`Test choosingType func`, () => {
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.choosingType(`bmw`, `cherno`, 1899),
        `Invalid Year!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.choosingType(`bmw`, `cherno`, 2023),
        `Invalid Year!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.choosingType(`bmw`, `cherno`, 2020),
        `This type of car is not what you are looking for.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.choosingType(`Sedan`, `black`, 2009),
        `This Sedan is too old for you, especially with that black color.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.choosingType(`Sedan`, `black`, 2010),
        `This black Sedan meets the requirements, that you have.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.choosingType(`Sedan`, `black`, 2022),
        `This black Sedan meets the requirements, that you have.`
      );
    });
  });
  describe(`Testing brandName func`, () => {
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName(`array`, 2),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName(true, 2),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(() => chooseYourCar.brandName(2, 2), "Invalid Information!");
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName({ arr: `array` }, 2),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () =>
          chooseYourCar.brandName([`array`, `array`, `array`, `array`], 2.2),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName([`array`, `array`, `array`, `array`], -2),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () =>
          chooseYourCar.brandName([`array`, `array`, `array`, `array`], `2`),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () =>
          chooseYourCar.brandName([`array`, `array`, `array`, `array`], [2]),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () =>
          chooseYourCar.brandName([`array`, `array`, `array`, `array`], {
            two: 2,
          }),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () =>
          chooseYourCar.brandName([`array`, `array`, `array`, `array`], true),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(() => chooseYourCar.brandName(), "Invalid Information!");
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName([`array`, `array`, `array`, `array`], 4),
        "Invalid Information!"
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.brandName([`array`, `array`, `array`, `array`], 6),
        "Invalid Information!"
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.brandName([`bmw`, `mercedes`, `audi`], 1),
        `bmw, audi`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.brandName([`bmw`, `mercedes`, `audi`], 2),
        `bmw, mercedes`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.brandName([`bmw`, `mercedes`, `audi`], 0),
        `mercedes, audi`
      );
    });
  });
  describe(`Test carFuelConsumption func`, () => {
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.carFuelConsumption(`200`, 10),
        `Invalid Information!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.carFuelConsumption(-1, 10),
        `Invalid Information!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.carFuelConsumption(200, `10`),
        `Invalid Information!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => chooseYourCar.carFuelConsumption(200, -10),
        `Invalid Information!`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(200, 10),
        `The car is efficient enough, it burns 5.00 liters/100 km.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(100, 3),
        `The car is efficient enough, it burns 3.00 liters/100 km.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(100, 3.5),
        `The car is efficient enough, it burns 3.50 liters/100 km.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(100, 7),
        `The car is efficient enough, it burns 7.00 liters/100 km.`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(10, 1),
        `The car burns too much fuel - 10.00 liters!`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        chooseYourCar.carFuelConsumption(100, 7.5),
        `The car burns too much fuel - 7.50 liters!`
      );
    });
  });
});
