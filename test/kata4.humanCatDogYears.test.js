const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("returns an array", () => {
      const total = humanCatDogYears();
      expect(Array.isArray(total)).toBe(true);
    });
    it("returns human, cat and dog years", () => {
      expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
  });