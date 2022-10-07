const { assert, expect } = require("chai");
const { addFive, subtractTen, sum } = require(`./tests/mathEnforcer`);

describe(`mathEnforcer`, () => {
  describe(`Testing addFive func`, () => {
    it(`should return undefined if input is not a Number`, () => {
      let input = `five`;
      expect(sum(input)).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(sum(`5`)).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(addFive([5])).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(addFive({ five: 5 })).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(addFive(true)).to.equal(undefined);
    });
    it(`should add 5 if the input is a Number`, () => {
      expect(addFive(5)).to.equal(10);
    });
    it(`should add 5 if the input is a Number`, () => {
      expect(addFive(-5)).to.equal(0);
    });
    it(`should add 5 if the input is a Number`, () => {
      expect(addFive(5.001)).to.equal(10.001);
    });
  });
  describe(`Testing subtractTen func`, () => {
    it(`should return undefined if input is not a Number`, () => {
      expect(subtractTen(`five`)).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(subtractTen(`5`)).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(subtractTen([10])).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(subtractTen({ ten: 10 })).to.equal(undefined);
    });
    it(`should return undefined if input is not a Number`, () => {
      expect(subtractTen(true)).to.equal(undefined);
    });
    it(`should subtract 10 if the input is a Number`, () => {
      expect(subtractTen(11.001)).to.be.equal(11.001 - 10);
    });
  });
  describe(`Testing sum func`, () => {
    it(`should return undefined if first input is not a Number`, () => {
      expect(sum(`five`, 5)).to.equal(undefined);
    });
    it(`should return undefined if first input is not a Number`, () => {
      expect(sum(true, 5)).to.equal(undefined);
    });
    it(`should return undefined if first input is not a Number`, () => {
      expect(sum([1], 5)).to.equal(undefined);
    });
    it(`should return undefined if first input is not a Number`, () => {
      expect(sum({ one: 1 })).to.equal(undefined);
    });
    it(`should return undefined if second input is not a Number`, () => {
      expect(sum(5, `five`)).to.equal(undefined);
    });
    it(`should return undefined if second input is not a Number`, () => {
      expect(sum(5, false)).to.equal(undefined);
    });
    it(`should return undefined if second input is not a Number`, () => {
      expect(sum(5, [5])).to.equal(undefined);
    });
    it(`should return undefined if second input is not a Number`, () => {
      expect(sum(5, { five: 5 })).to.equal(undefined);
    });

    it(`should return undefined if both inputs are not a Number`, () => {
      expect(sum(`five`, `five`)).to.equal(undefined);
    });
    it(`should return undefined if both inputs are not a Number`, () => {
      expect(sum([1], `five`)).to.equal(undefined);
    });
    it(`should return undefined if both inputs are not a Number`, () => {
      expect(sum({}, [])).to.equal(undefined);
    });
    it(`should return undefined if both inputs are not a Number`, () => {
      expect(sum([5, 5])).to.equal(undefined);
    });
    it(`should sum both inputs if they are a Number`, () => {
      expect(sum(5, 5)).to.equal(10);
    });
  });
});
