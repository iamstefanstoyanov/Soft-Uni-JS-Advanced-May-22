const { describe } = require("mocha");
const { assert } = require("chai");

describe("tests", () => {
  describe("powNumber", () => {
    it("Power", () => {
        assert.equal(numberOperations.powNumber(2), 4)
    });
  });

  describe("numberChecker", () => {
 
    it("Its NaN", () => {
        assert.throw( () => numberOperations.numberChecker("string"), "The input is not a number!")
    });

    it("its number below 100", () => {
        assert.equal(numberOperations.numberChecker(99), 'The number is lower than 100!')
    });

    it("its 100", () => {
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
    });

    it("its more than 100", () => {
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
    });  
  });

  describe("sumArrays", () => {
    it("sum arrays", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2, 3], [3, 2, 1, 0]), [3, 3, 3, 3])
    });

    it("sum arrays2", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2], [3, 2, 1, 0]), [3, 3, 3, 0])
    });

    it("sum arrays3", () => {
        assert.deepEqual(numberOperations.sumArrays([0, 1, 2, 3], [3, 2, 1]), [3, 3, 3, 3])
    });
  });
});