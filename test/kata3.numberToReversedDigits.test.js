const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  const result = numberToReversedDigits();
  it("returns an array", () => {
    expect(Array.isArray(result)).toEqual(true);
  });
  it("returns a reverse of the number's digits", () => {
    expect(numberToReversedDigits(1234)).toEqual([4, 3, 2, 1]);
  });
});
