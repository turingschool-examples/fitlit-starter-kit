const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const Sleep = require('../src/Sleep');
const usersData = require('../data/users');
const hydrationData = require('../data/hydration');
const sleepData = require('../data/sleep');
const activityData = require('../data/activity');
const data = {
  users: usersData,
  hydration: hydrationData,
  sleep: sleepData,
  activity: activityData
};

let sleep, userRepo, user, userInfo;

beforeEach(() => {
  userRepo = new UserRepository(data);
  userRepo.findUserByName('Jarvis Considine');
  userRepo.findToday();
  sleep = new Sleep(userRepo);
});

describe("Sleep", () => {
  it("should be function", () => {
    expect(Sleep).to.be.a('function');
  });

  it("should be an instance of Sleep", () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it("should can keep user ID", () => {
    expect(sleep.userID).to.equal(2);
  });

  it("should can keep current day", () => {
    expect(sleep.date).to.equal('2019/09/22');
  });

  it("should keep hours slept", () => {
    expect(sleep.hoursSlept).to.equal(null);
  });

  it("should keep sleep quality", () => {
    expect(sleep.sleepQuality).to.equal(null);
  });

  it("should update sleep hours", () => {
    sleep.updateInfo(userRepo);
    expect(sleep.hoursSlept).to.equal(5.1);
  });

  it("should update sleep quality", () => {
    sleep.updateInfo(userRepo);
    expect(sleep.sleepQuality).to.equal(4.6);
  });

  it("should get sleep hours for week", () => {
    expect(sleep.getWeeklyInfo(userRepo, 'hours')).to.deep.equal([7.4,9.5,4.8,10.6,8.5,8.2,5.1]);
  });

  it("should get sleep quality for week", () => {
    expect(sleep.getWeeklyInfo(userRepo, 'quality')).to.deep.equal([2.7,1.7,3.8,1.6,4.3,1.9,4.6]);
  });

  it("should get day average sleep hours for week", () => {
    expect(sleep.calculateDayAverageInfo(userRepo, 'hours')).to.equal(7.7);
  });

  it("should get day average sleep quality for week", () => {
    expect(sleep.calculateDayAverageInfo(userRepo, 'quality')).to.equal(2.9);
  });
});
