const { joinNames } = require("../src");

describe("joinNames", () => {
  const simpsonsArr = [
    {name: "Bart"},
    {name: "Lisa"},
    {name: "Maggie"}
  ];
  const evaPilotArr = [
    {name: "Rei"},
    {name: "Shinji"},
    {name: "Asuka"},
    {name: "Toji"},
    {name: "Kaworu"}
  ];

  it("returns string of names, seperated by commas and an ampersand from a Simpsons array", () => {
    expect(joinNames(simpsonsArr)).toEqual("Bart, Lisa & Maggie")
  });

  it("returns string of names, seperated by commas and an ampersand from an Eva pilot array", () => {
    expect(joinNames(evaPilotArr)).toEqual("Rei, Shinji, Asuka, Toji & Kaworu")
  });
});
