const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const employees = [
    {name: "Oak", role: "professor"},
    {name: "Jenny", role: "police officer"},
    {name: "Joy", role: "nurse"},
    {name: "Giovanni", role: "CEO"},
    {name: "Misty", role: "gym leader"}
  ];

  it("returns Joy's role in the company", () => {
    expect(getEmployerRole("Joy", employees)).toEqual("nurse")
  });

  it("returns Misty's role in the company", () => {
    expect(getEmployerRole("Misty", employees)).toEqual("gym leader")
  });
});
