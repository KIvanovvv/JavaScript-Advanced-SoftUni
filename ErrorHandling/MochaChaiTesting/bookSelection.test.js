const { assert, expect } = require("chai");
const bookSelection = require(`./tests/bookSelection`);
console.log(bookSelection);

describe(`Testing bookSelection `, () => {
  describe(`Testing bookSelection.isGenreSuitable`, () => {
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isGenreSuitable(`Thriller`, 11),
        `Books with Thriller genre are not suitable for kids at 11 age`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isGenreSuitable(`Horror`, 12),
        `Books with Horror genre are not suitable for kids at 12 age`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isGenreSuitable(`Horror`, 15),
        `Those books are suitable`
      );
    });
  });
  describe(`Testing input of bookSelection.isItAffordable`, () => {
    it(`Should throw error if inputs are not a number`, () => {
      assert.throw(
        () => bookSelection.isItAffordable(`12`, true),
        `Invalid input`
      );
    });
    it(`Should throw error if inputs are not a number`, () => {
      assert.throw(
        () => bookSelection.isItAffordable(12, [24]),
        `Invalid input`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isItAffordable(15, 10),
        "You don't have enough money"
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isItAffordable(10, 15),
        `Book bought. You have 5$ left`
      );
    });
    it(`should return correct result`, () => {
      assert.equal(
        bookSelection.isItAffordable(10, 10),
        `Book bought. You have 0$ left`
      );
    });
  });
  describe(`Testing inputs of bookSelection.suitableTitles`, () => {
    it(`should throw an error`, () => {
      assert.throw(
        () => bookSelection.suitableTitles(`array`, [`string`]),
        `Invalid input`
      );
    });
    it(`should throw an error`, () => {
      assert.throw(
        () => bookSelection.suitableTitles(true, { name: `name` }),
        `Invalid input`
      );
    });
    it(`should throw an error`, () => {
      assert.throw(
        () => bookSelection.suitableTitles([{ name: `name` }], [`string`]),
        `Invalid input`
      );
    });
    it(`should throw an error`, () => {
      assert.throw(
        () => bookSelection.suitableTitles([{ name: `name` }], 2),
        `Invalid input`
      );
    });
    it(`should return correct result`, () => {
      // let arr = [{ title: "Abc", genre: `Horror` }];
      // expect(bookSelection.suitableTitles(arr, `Horror`)).to.be.deep.equal([
      //   arr[0].title,
      // ]);
      assert.deepEqual(
        bookSelection.suitableTitles(
          [{ title: "Abc", genre: `Horror` }],
          `Horror`
        ),
        [`Abc`]
      );
    });
    it(`should return correct result`, () => {
      // let arr = [{ title: "Abc", genre: `Horror` }];
      // expect(bookSelection.suitableTitles(arr, `Horror`)).to.be.deep.equal([
      //   arr[0].title,
      // ]);
      assert.deepEqual(
        bookSelection.suitableTitles(
          [{ title: "Abc", genre: `Horror` }],
          `notInArray`
        ),
        []
      );
    });
  });
});
