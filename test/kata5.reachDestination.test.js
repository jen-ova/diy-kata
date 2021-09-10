const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival 44/10", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
  });
  it("returns string with estimated time of arrival 152/25", () => {
    expect(reachDestination(152, 25)).toBe("I should be there in 6 hours.");
  });
  it("returns string with estimated time of arrival 211/88", () => {
    expect(reachDestination(211, 88)).toBe("I should be there in 2.5 hours.");
  });
  it("returns string with estimated time of arrival 359/64", () => {
    expect(reachDestination(359, 64)).toBe("I should be there in 5.5 hours.");
  });
});
