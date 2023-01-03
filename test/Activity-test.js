import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import data from "../src/data/activity";

describe("Activity", () => {
  let userActivity
  let data

  beforeEach(() => {
    userActivity = new Activity(data)
  });
  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });
});
