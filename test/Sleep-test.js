const chai = require("chai");
const expect = chai.expect;
const Sleep = require("../src/Sleep")

describe("Sleep", () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep();
  });
  
  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(sleep).to.be.an.instanceof(Sleep)
  });

});