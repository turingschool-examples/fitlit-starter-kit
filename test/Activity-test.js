import { expect } from "chai";
import Activity from "../src/Activity";
import data from "../src/data/activity";
import UserRepository from "../src/UserRepository";
import userData from "../src/data/users";

describe("Activity", () => {
  let userActivity;

  beforeEach(() => {
    userActivity = new Activity(data);
  });
  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });
  it("Should be instance of Activity", function () {
    expect(userActivity).to.be.an.instanceOf(Activity);
  });
  it("Should have a property that holds user data", function () {
    expect(userActivity.data).to.deep.equal(data);
  });
  it("Should return the miles a user has walked based on their number of steps for a given day", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.calculateMilesForDate(
        1,
        "2019/06/15",
        userRepo.getUserData(1).strideLength
      )
    ).to.equal(2.91);
  });
  it("Should return error message if no data is found for calculateMilesForDate", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.calculateMilesForDate(
        1,
        "2018/06/15",
        userRepo.getUserData(1).strideLength
      )
    ).to.equal("No data found for inputs");
    expect(
      userActivity.calculateMilesForDate(
        99,
        "2019/06/15",
        userRepo.getUserData(1).strideLength
      )
    ).to.equal("No data found for inputs");
  });
  it("Should return minutes active by day", function () {
    expect(userActivity.findMintuesActiveForDate(1, "2019/06/15")).to.equal(
      140
    );
  });
  it("Should return error message if no data is found for findMintuesActiveForDate", function () {
    expect(userActivity.findMintuesActiveForDate(1, "2018/06/15")).to.equal(
      "No data found for inputs"
    );
    expect(userActivity.findMintuesActiveForDate(99, "2019/06/15")).to.equal(
      "No data found for inputs"
    );
  });
  it("Should return minutes active for a given week", function () {
    expect(userActivity.averageMinutesActiveForWeek(1, "2019/06/15")).to.equal(
      159
    );
  });
  it("Should return error message if no data is found for average minutes active for week", function () {
    expect(userActivity.averageMinutesActiveForWeek(1, "2018/06/15")).to.equal(
      "No data found for date selected"
    );
    expect(userActivity.averageMinutesActiveForWeek(99, "2019/06/15")).to.equal(
      "No data found for date selected"
    );
  });
  it("Should return true if step goal is met", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.dailyStepGoaAchieved(
        1,
        "2019/06/19",
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.equal(true);
  });
  it("Should return false if step goal is not met", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.dailyStepGoaAchieved(
        1,
        "2019/06/18",
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.equal(false);
  });
  it("Should return error message if user or date not found", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.dailyStepGoaAchieved(
        99,
        "2019/06/18",
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.equal("No data found for inputs");
    expect(
      userActivity.dailyStepGoaAchieved(
        1,
        "2018/06/18",
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.equal("No data found for inputs");
  });
  it("Should return all days where user exceeded their step goal", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.findDatesOverStepGoal(
        1,
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.deep.equal(["2019/06/19", "2019/06/20"]);
  });
  it("Should return a message if step goal never met from findDatesOverStepGoal", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.findDatesOverStepGoal(
        10,
        userRepo.getUserData(10).dailyStepGoal
      )
    ).to.deep.equal("No Step Goals Met");
  });
  it("Should return a message if user not found", function () {
    const userRepo = new UserRepository(userData);
    expect(
      userActivity.findDatesOverStepGoal(
        99,
        userRepo.getUserData(1).dailyStepGoal
      )
    ).to.deep.equal("No User Found");
  });
  it("Should return all time stair climbing record", function () {
    expect(userActivity.findHighestStairsClimbed(1)).to.equal(33);
  });
  it("Should return error message if user not found", function () {
    expect(userActivity.findHighestStairsClimbed(99)).to.equal(
      "User Not Found"
    );
  });
  it("Should return message if no data found", function () {
    expect(userActivity.findHighestStairsClimbed(9)).to.equal("No Data Found");
  });
  it("Should return the average activities for all users", function () {
    expect(userActivity.allUserAveragesForDate("2019/06/15")).to.deep.equal({
      minutesActive: 120,
      stairs: 28,
      steps: 5636,
    });
  });
  it("Should return message if no data for allUserAveragesForDate", function () {
    expect(userActivity.allUserAveragesForDate("2018/06/15")).to.equal(
      "No Data Found"
    );
  });

  it('Should calculate weekly step count', function () {
    expect(userActivity.weeklyStepCountByDay(1, "2019/06/15")).to.deep.equal({count:[3577, 4294, 7402, 3486, 11374, 14810, 2634], label:'Steps', dates:["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]})
  })

  it('Should return minutes active weekly data', function () {
    expect(userActivity.weeklyMinutesActiveByDay(1, "2019/06/15")).to.deep.equal({count:[140, 138, 116, 114, 213, 287, 107], label:'Minutes Active', dates:["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21"]})
  })
});
