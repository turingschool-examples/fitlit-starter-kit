import { expect } from "chai";
import Activity from "../src/Activity";
import data from "../src/data/activity";
import UserRepository from "../src/UserRepository";
import userData from "../src/data/users";

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
  });
  it("Should return the miles a user has walked based on their number of steps for a given day", function () {
    const userRepo = new UserRepository(userData)
    expect(userActivity.calculateMilesForDate(1, "2019/06/15", userRepo.getUserData(1).strideLength)).to.equal(2.91)
  })
  it("Should return error message if no data is found for calculateMilesForDate", function () {
    const userRepo = new UserRepository(userData)
    expect(userActivity.calculateMilesForDate(1, "2018/06/15", userRepo.getUserData(1).strideLength)).to.equal('No data found for inputs')
    expect(userActivity.calculateMilesForDate(99, "2019/06/15", userRepo.getUserData(1).strideLength)).to.equal('No data found for inputs')
  })
  it("Should return minutes active by day", function () {
    expect(userActivity.findMintuesActiveForDate(1, "2019/06/15")).to.equal(140)
  })
  it('Should return error message if no data is found for findMintuesActiveForDate', function () {
    expect(userActivity.findMintuesActiveForDate(1, "2018/06/15")).to.equal('No data found for inputs')
    expect(userActivity.findMintuesActiveForDate(99, "2019/06/15")).to.equal('No data found for inputs')
  })
  it("Should return minutes active for a given week", function () {
    expect(userActivity.averageMinutesActiveForWeek(1, "2019/06/15")).to.equal(159)
  })
  it('Should return error message if no data is found for average minutes active for week', function () {
    expect(userActivity.averageMinutesActiveForWeek(1, "2018/06/15")).to.equal("No data found for date selected")
  })
});
