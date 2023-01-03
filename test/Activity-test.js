import { expect } from "chai";
import Activity from "../src/Activity";
import data from "../src/data/activity";

describe("Activity", () => {
  let userActivity
  
  beforeEach(() => {
    userActivity = new Activity(data)
  });
  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });
  it("Should be instance of Activity", function () {
    expect(userActivity).to.be.an.instanceOf(Activity);
  });
  it("Should have a property that holds user data", function () {
    expect(userActivity.data).to.deep.equal(data)
  })
});
