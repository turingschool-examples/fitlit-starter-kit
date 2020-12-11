'use strict'

const chai = require('chai')
const expect = chai.expect

const UserSleep = require("../src/userSleep");

describe("UserSleep", () => {
  let userSleep,
    userSleep1, 
    userSleep2, 
    userSleep3, 
    userSleep4, 
    userSleep5, 
    userSleep6, 
    userSleep7, 
    userSleep8

  beforeEach(() => {
    userSleep1 = {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    userSleep2 = {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7.3,
      "sleepQuality": 3.8
    },
    userSleep3 = {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 7,
      "sleepQuality": 3
    },
    userSleep4 = {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 7.8,
      "sleepQuality": 1.5
    },
    userSleep5 = {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 8,
      "sleepQuality": 1.3
    },
    userSleep6 = {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 5.1,
      "sleepQuality": 3.7
    },
    userSleep7 = {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 3.7
    },
    userSleep8 = {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 5.1,
      "sleepQuality": 3.7
    },
    userSleep = new UserSleep([
      userSleep1, 
      userSleep2, 
      userSleep3, 
      userSleep4, 
      userSleep5, 
      userSleep6, 
      userSleep7, 
      userSleep8,
    ])
  })

  it("should be a function", () => {
    expect(UserSleep).to.be.a("function");
  });

  it("should be an instance of User", () => {
    expect(userSleep).to.be.an.instanceof(UserSleep);
  });

  it("should return average number of hours slept per day for one user", () => {
    expect(userSleep.calculateAvgHoursSlept(userSleep, 1)).to.equal(6.437500000000001)
  });

  it("should return a user\'s average sleep quality for all time", () => {
    expect(userSleep.calculateAvgSleepQual(userSleep, 1)).to.equal(2.8625);
  });

  it("should return the number of hours a user slept for a day", () => {
    expect(userSleep.getOneDayOfData("2019/06/15", 1, 'hoursSlept')).to.equal(6.1);
  });

  it("should return the sleep quality for a user for a day", () => {
    expect(userSleep.getOneDayOfData("2019/06/15", 1, 'sleepQuality')).to.equal(2.2);
  });

  it("should return number of hours slept each day for a user for a week", () => {
    expect(userSleep.calculateSleepPerWeek("2019/06/15", 1,)).to.deep.equal([6.1, 7.3, 7, 7.8, 8, 5.1, 5.1]);
  });


});