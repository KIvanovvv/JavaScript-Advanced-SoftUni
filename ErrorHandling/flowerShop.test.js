const { assert } = require("chai");
const flowerShop = require(`./MochaChaiTesting/tests/flowerShop`);

describe(`Testing flowerShop functionality`, () => {
  describe(`Testing flowerShop.calcPriceOfFlowers`, () => {
    it(`should throw error`, () => {
      assert.throw(
        () => flowerShop.calcPriceOfFlowers([`flower`, `20`, [3]]),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => flowerShop.calcPriceOfFlowers([`flower`], `20`, [3]),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => flowerShop.calcPriceOfFlowers(`flower`, `20`, 3),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => flowerShop.calcPriceOfFlowers(`flower`, 20.2, -3),
        `Invalid input!`
      );
    });
    it(`should throw error`, () => {
      assert.throw(
        () => flowerShop.calcPriceOfFlowers(`flower`, -20, 3.3),
        `Invalid input!`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        flowerShop.calcPriceOfFlowers(`roses`, 5, 10),
        `You need $50.00 to buy roses!`
      );
    });
  });
  describe(`Testing flowerShop.checkFlowersAvailiable`, () => {
    it(`should return the correct result`, () => {
      assert.equal(
        flowerShop.checkFlowersAvailable(`rose`, [`notRose`]),
        `The rose are sold! You need to purchase more!`
      );
    });
    it(`should return the correct result`, () => {
      assert.equal(
        flowerShop.checkFlowersAvailable(`rose`, [`rose`]),
        `The rose are available!`
      );
    });
  });
  describe(`Testing flowerShop.sellFlowers`, () => {
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers(`flower1,flower2`, 2),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], 2.5),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers({ flower: `flower1` }, 2.5),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(() => flowerShop.sellFlowers(true, 2.5), `Invalid input!`);
    });
    it(`shoul throw error`, () => {
      assert.throw(() => flowerShop.sellFlowers(2, 2.5), `Invalid input!`);
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], -2),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], 3),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], 2),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], true),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], [2]),
        `Invalid input!`
      );
    });
    it(`shoul throw error`, () => {
      assert.throw(
        () => flowerShop.sellFlowers([`flower1`, `flower2`], { two: 2 }),
        `Invalid input!`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        flowerShop.sellFlowers([`rose1`, `rose2`, `rose3`], 2),
        `rose1 / rose2`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        flowerShop.sellFlowers([`rose1`, `rose2`, `rose3`], 1),
        `rose1 / rose3`
      );
    });
  });
});
