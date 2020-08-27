const chai = require("chai");
const expect = chai.expect;
const Activity = require("../src/Activity")

describe("Activity", () => {
  let activity, sampleActivtyData;
  beforeEach(() => {
    sampleActivtyData =
    [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 6637,
        "minutesActive": 175,
        "flightsOfStairs": 36
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 14329,
        "minutesActive": 168,
        "flightsOfStairs": 18
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numSteps": 4112,
        "minutesActive": 220,
        "flightsOfStairs": 37
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numSteps": 13750,
        "minutesActive": 65,
        "flightsOfStairs": 4
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numSteps": 9858,
        "minutesActive": 243,
        "flightsOfStairs": 44
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numSteps": 8153,
        "minutesActive": 74,
        "flightsOfStairs": 10
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numSteps": 10225,
        "minutesActive": 174,
        "flightsOfStairs": 26
      },
    ]
    activity = new Activity(sampleActivtyData);
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of Activity", () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it("should return the miles a user has walked",() => {
    expect(activity.walkedMilesPerDay("2019/06/15", 1)).to.be.equal(2.9);
  });

  it("should return minutes active for specific day",() => {
    expect(activity.minutesActivePerDay("2019/06/16", 1)).to.be.equal(175);
  });

  it("should return average minutes active for a specific week",() => {
    expect(activity.averageWeeklyMinutes("2019/06/15", 1, 'minutesActive')).to.be.equal(171.1);
  });

  it("should check if user reached step goal for specific day",() => {
    expect(activity.stepGoalAchieved("2019/06/15", 1)).to.be.equal(false);
  });
  
  it("should check if user reached step goal for specific day",() => {
    expect(activity.stepGoalAchieved("2019/06/20", 1)).to.be.equal(true);
  });

  it("should find all days where they reach step goal ",() => {
    expect(activity.daysStepGoalAchieved(1)).to.be.deep.equal(["2019/06/17", "2019/06/20"]);
  });

});

//stop
