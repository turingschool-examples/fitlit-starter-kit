const chai = require("chai");
const { expect } = chai;
const Database = require("../src/classes/Database");
const hydrationData = require("../test-data/hydration-test.js");
const activityData = require("../test-data/activity-test.js");
const sleepData = require("../test-data/sleep-test.js");

describe("Database", function() {
  let database;
  let userOneDatabaseInfo;

  beforeEach("instantiate new Database", function() {
    database = new Database();
    userOneDatabaseInfo = {
  hydrationData: [
    { userID: 1, date: '2019/06/15', numOunces: 37 },
    { userID: 1, date: '2019/06/16', numOunces: 75 },
    { userID: 1, date: '2019/06/17', numOunces: 47 },
    { userID: 1, date: '2019/06/18', numOunces: 85 },
    { userID: 1, date: '2019/06/19', numOunces: 42 },
    { userID: 1, date: '2019/06/20', numOunces: 87 },
    { userID: 1, date: '2019/06/21', numOunces: 94 }
  ],
  activityData: [
    {
      userID: 1,
      date: '2019/06/15',

      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
    },
    {
      userID: 1,
      date: '2019/06/16',
      numSteps: 4294,
      minutesActive: 138,
      flightsOfStairs: 10
    },
    {
      userID: 1,
      date: '2019/06/17',
      numSteps: 7402,
      minutesActive: 116,
      flightsOfStairs: 33
    },
    {
      userID: 1,
      date: '2019/06/18',
      numSteps: 3486,
      minutesActive: 114,
      flightsOfStairs: 32
    },
    {
      userID: 1,
      date: '2019/06/19',
      numSteps: 11374,
      minutesActive: 213,
      flightsOfStairs: 13
    },
    {
      userID: 1,
      date: '2019/06/20',
      numSteps: 14810,
      minutesActive: 287,
      flightsOfStairs: 18
    },
    {
      userID: 1,
      date: '2019/06/21',
      numSteps: 2634,
      minutesActive: 107,
      flightsOfStairs: 5
    }
  ],
  sleepData: [
    {
      userID: 1,
      date: '2019/06/15',
      hoursSlept: 6.1,
      sleepQuality: 2.2
    },
    { userID: 1, date: '2019/06/16', hoursSlept: 5.4, sleepQuality: 3 },
    {
      userID: 1,
      date: '2019/06/17',
      hoursSlept: 8.1,
      sleepQuality: 3.5
    },
    {
      userID: 1,
      date: '2019/06/18',
      hoursSlept: 6.1,
      sleepQuality: 3.5
    },
    { userID: 1, date: '2019/06/19', hoursSlept: 4.7, sleepQuality: 4 },
    {
      userID: 1,
      date: '2019/06/20',
      hoursSlept: 10.1,
      sleepQuality: 1.3
    },
    {
      userID: 1,
      date: '2019/06/21',
      hoursSlept: 7.9,
      sleepQuality: 1.6
    }
  ]
};
  });

  it("should be an instance of Database", function() {
    expect(database).to.be.an.instanceof(Database);
  });

  it("should contain the same information as our dataset", function() {
    expect(database.hydrationData).to.equal(hydrationData);
    expect(database.activityData).to.equal(activityData);
    expect(database.sleepData).to.equal(sleepData);
  });

  it("should be able to filter data based on a user's id", function() {
    expect(database.filterUser(1)).to.deep.equal(userOneDatabaseInfo);
    expect(database.filterUser(2)).to.not.equal(userOneDatabaseInfo);
  });

});
