const { assert } = require("chai");
const rentCar = require(`./tests/rentCar`);

describe(`Testing functionality of rentCar`, () => {
  describe(`testing functionality of rentCar.searchCar`, () => {});
  it(`should trow error if inputs are not array and string`, () => {
    assert.throw(() => rentCar.searchCar(`golf`, [2]), `Invalid input!`);
  });
  it(`should trow error if inputs are not array and string`, () => {
    assert.throw(() => rentCar.searchCar(2, {}), `Invalid input!`);
  });
  it(`should trow error if inputs are not array and string`, () => {
    assert.throw(() => rentCar.searchCar(true, 3), `Invalid input!`);
  });
  it(`should return correct output`, () => {
    assert.throw(
      () => rentCar.searchCar([`gold`], `bmw`),
      "There are no such models in the catalog!"
    );
  });
  it(`should return correct output`, () => {
    assert.equal(
      rentCar.searchCar([`bmw`, `bmw`], `bmw`),
      `There is 2 car of model bmw in the catalog!`
    );
  });
  it(`should return correct output`, () => {
    assert.equal(
      rentCar.searchCar([`audi`, `bmw`], `bmw`),
      `There is 1 car of model bmw in the catalog!`
    );
  });
  describe(`Testing rentCar.calculatePriceOfCar functionality`, () => {
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar([`bmw`], 2),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar({ bmw: `bmw` }, 2),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(`bmw`, `2`),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(`bmw`, 2.5),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(`bmw`, true),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(`bmw`, [2, 3]),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => rentCar.calculatePriceOfCar(`Lexus`, 2),
        "No such model in the catalog!"
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        rentCar.calculatePriceOfCar(`BMW`, 2),
        `You choose BMW and it will cost $90!`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        rentCar.calculatePriceOfCar(`Audi`, 2),
        `You choose Audi and it will cost $72!`
      );
    });
  });
  describe(`Testing rentCar.checkBudget functionality`, () => {
    it(`should throw an error`, () => {
      assert.throw(
        () => rentCar.checkBudget(`2`, [3], { three: 3 }),
        `Invalid input!`
      );
    });
    it(`should throw an error`, () => {
      assert.throw(() => rentCar.checkBudget(2.5, 3.3, 3.5), `Invalid input!`);
    });
    it(`should return the correct result`, () => {
      assert.equal(
        rentCar.checkBudget(100, 2, 100),
        "You need a bigger budget!"
      );
    });
    it(`should return the correct result`, () => {
      assert.equal(rentCar.checkBudget(100, 2, 200), "You rent a car!");
    });
    it(`should return the correct result`, () => {
      assert.equal(rentCar.checkBudget(100, 2, 300), "You rent a car!");
    });
  });
});
