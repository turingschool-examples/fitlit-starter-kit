const chai = require("chai");
const { expect } = chai;
chai.use(require("chai-datetime"));
const Calculator = require("../src/classes/Calculator");
const Database = require("../src/classes/Database");
const userDataTest = require("../test-data/users-test");
const hydrationDataTest = require("../test-data/hydration-test");
const activityDataTest = require("../test-data/activity-test");
const sleepDataTest = require("../test-data/sleep-test");

const state = {
  currentUser: {
    id: 1,
    name: "Luisa Hane",
    address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    email: "Diana.Hayes1@hotmail.com",
    strideLength: 4.3,
    dailyStepGoal: 10000,
    friends: [2, 3, 4]
  },
  currentUserData: {
    hydrationData: [
      { userID: 1, date: "2019/06/15", numOunces: 37 },
      { userID: 1, date: "2019/06/16", numOunces: 75 },
      { userID: 1, date: "2019/06/17", numOunces: 47 },
      { userID: 1, date: "2019/06/18", numOunces: 85 },
      { userID: 1, date: "2019/06/19", numOunces: 42 },
      { userID: 1, date: "2019/06/20", numOunces: 87 },
      { userID: 1, date: "2019/06/21", numOunces: 94 }
    ],
    activityData: [
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 3486,
        minutesActive: 114,
        flightsOfStairs: 32
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 11374,
        minutesActive: 213,
        flightsOfStairs: 13
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14810,
        minutesActive: 287,
        flightsOfStairs: 18
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 2634,
        minutesActive: 107,
        flightsOfStairs: 5
      }
    ],
    sleepData: [
      {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2
      },
      { userID: 1, date: "2019/06/16", hoursSlept: 5.4, sleepQuality: 3 },
      {
        userID: 1,
        date: "2019/06/17",
        hoursSlept: 8.1,
        sleepQuality: 3.5
      },
      {
        userID: 1,
        date: "2019/06/18",
        hoursSlept: 6.1,
        sleepQuality: 3.5
      },
      { userID: 1, date: "2019/06/19", hoursSlept: 4.7, sleepQuality: 4 },
      {
        userID: 1,
        date: "2019/06/20",
        hoursSlept: 10.1,
        sleepQuality: 1.3
      },
      {
        userID: 1,
        date: "2019/06/21",
        hoursSlept: 7.9,
        sleepQuality: 1.6
      }
    ]
  }
};

describe("Calculator", function() {
  let calculator;
  let database;

  beforeEach("instantiate new calculator", function() {
    calculator = new Calculator(state.currentUser.id);
    database = new Database(hydrationDataTest, activityDataTest, sleepDataTest);
  });

  it("should be an instance of calculator", function() {
    expect(calculator).to.be.an.instanceof(Calculator);
  });

  describe("Calculator-Utility", function() {
    it("should convert a string into a date object", function() {
      expect(calculator.stringToDate("2019/06/17")).to.deep.equal(
        new Date("2019", "05", "17")
      );
    });

    it("should convert a date object into a string", function() {
      expect(calculator.dateToString(new Date("2019", "05", "17"))).to.equal(
        "2019/06/17"
      );
    });

    it("should modify a date object", function() {
      const sunday = new Date("2019", "05", "23");
      const monday = new Date("2019", "05", "24");
      expect(calculator.modifyDate(sunday, 1)).to.equalDate(monday);
      expect(calculator.modifyDate(monday, -1)).to.equalDate(sunday);
    });

    it("should return a week day by name", function() {
      const sunday = new Date("2019", "05", "23");
      const monday = new Date("2019", "05", "24");
      expect(calculator.getWeekDay(sunday)).to.equal("Sunday");
      expect(calculator.getWeekDay(monday)).to.equal("Monday");
    });
  });

  describe("Calculator-Hydration", function() {
    it("should return user average ounces", function() {
      expect(
        calculator.getUserAllTimeAvg(
          state.currentUserData.hydrationData,
          "numOunces"
        )
      ).to.equal(66.71);
    });

    it("should return user ounces by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.hydrationData,
          "2019/06/17",
          "numOunces"
        )
      ).to.equal(47);
    });

    it("should return ounces per day over the past seven days inclusive", function() {
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.hydrationData,
          "2019/06/21",
          "numOunces"
        ).dates.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.hydrationData,
          "2019/06/21",
          "numOunces"
        ).metrics.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.hydrationData,
          "2019/06/21",
          "numOunces"
        ).metrics[0]
      ).to.equal(37);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.hydrationData,
          "2019/06/21",
          "numOunces"
        ).metrics[6]
      ).to.equal(94);
    });
  });

  describe("Calculator-Sleep", function() {
    it("should return user average hours slept", function() {
      expect(
        calculator.getUserAllTimeAvg(
          state.currentUserData.sleepData,
          "hoursSlept"
        )
      ).to.equal(6.91);
    });

    it("should return user average sleep quality", function() {
      expect(
        calculator.getUserAllTimeAvg(
          state.currentUserData.sleepData,
          "sleepQuality"
        )
      ).to.equal(2.73);
    });

    it("should return user hours slept by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "hoursSlept"
        )
      ).to.equal(7.9);
    });

    it("should return user sleep quality by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "sleepQuality"
        )
      ).to.equal(1.6);
    });

    it("should return hours slept per day over the past seven days inclusive", function() {
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "hoursSlept"
        ).dates.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "hoursSlept"
        ).metrics.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "hoursSlept"
        ).metrics[0]
      ).to.equal(6.1);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "hoursSlept"
        ).metrics[6]
      ).to.equal(7.9);
    });

    it("should return sleep quality per day over the past seven days inclusive", function() {
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "sleepQuality"
        ).dates.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "sleepQuality"
        ).metrics.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "sleepQuality"
        ).metrics[0]
      ).to.equal(2.2);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.sleepData,
          "2019/06/21",
          "sleepQuality"
        ).metrics[6]
      ).to.equal(1.6);
    });

    it("should return all user average sleep quality", function() {
      expect(
        calculator.getAllUserAllTimeAvg("sleepData", database, "sleepQuality")
      ).to.equal(2.55);
    });
  });

  describe("Calculator-Activity", function() {
    it("should return the miles a user traversed for a given date", function() {
      expect(calculator.stepsToMiles(state, "2019/06/15")).to.equal(2.91);
    });

    it("should return user flights by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.activityData,
          "2019/06/18",
          "flightsOfStairs"
        )
      ).to.equal(32);
    });

    it("should return user steps by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.activityData,
          "2019/06/18",
          "numSteps"
        )
      ).to.equal(3486);
    });

    it("should return user minutes by date", function() {
      expect(
        calculator.getUserDayTotal(
          state.currentUserData.activityData,
          "2019/06/18",
          "minutesActive"
        )
      ).to.equal(114);
    });

    it("should return minutes active per day over the past seven days inclusive", function() {
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.activityData,
          "2019/06/21",
          "minutesActive"
        ).dates.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.activityData,
          "2019/06/21",
          "minutesActive"
        ).metrics.length
      ).to.equal(7);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.activityData,
          "2019/06/21",
          "minutesActive"
        ).metrics[0]
      ).to.equal(140);
      expect(
        calculator.getUserWeekTotal(
          state.currentUserData.activityData,
          "2019/06/21",
          "minutesActive"
        ).metrics[6]
      ).to.equal(107);
    });

    it("should return a boolean if step goal met by date", function() {
      expect(calculator.stepGoalMet(state, "2019/06/15")).to.equal(false);
      expect(calculator.stepGoalMet(state, "2019/06/20")).to.equal(true);
    });

    it("should return all days user exceeded step goal", function() {
      expect(calculator.getDaysStepGoalMet(state)).to.deep.equal([
        "2019/06/19",
        "2019/06/20"
      ]);
    });

    it("should return user highest number of flights all time", function() {
      expect(
        calculator.getUserAllTimeMax(
          state.currentUserData.activityData,
          "flightsOfStairs"
        )
      ).to.equal(33);
    });

    it("should return all user average flights by date", function() {
      expect(
        calculator.getAllUserAllTimeAvg(
          "activityData",
          database,
          "flightsOfStairs"
        )
      ).to.equal(23.07);
    });

    it("should return all user average steps by date", function() {
      expect(
        calculator.getAllUserAllTimeAvg("activityData", database, "numSteps")
      ).to.equal(4397.76);
    });

    it("should return all user average minutes by date", function() {
      expect(
        calculator.getAllUserAllTimeAvg(
          "activityData",
          database,
          "minutesActive"
        )
      ).to.equal(87.08);
    });
  });

  describe("Calculator-Trends", function() {
    it("should return an array of arrays containing dates when steps increased day to day three days or more in a row", function() {
      expect(
        calculator.getTrend(state.currentUserData.activityData, "numSteps")
      ).to.deep.equal([
        ["2019/06/15", "2019/06/16", "2019/06/17"],
        ["2019/06/18", "2019/06/19", "2019/06/20"]
      ]);
    });
  });
});
