const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData = require('./test-data/user-data');
const hydrationData = require('./test-data/hydration-data');
const sleepData = require('./test-data/sleep-data');
const activityData = require('./test-data/activity-data');


describe('UserRepository', function() {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository();
    userRepo.populateUserData(userData);
    userRepo.populateHydrationData(hydrationData);
    userRepo.populateSleepData(sleepData);
    userRepo.populateActivityData(activityData);
  });

  it("should be a function", function() {
    expect(UserRepository).to.be.a('function');
  });
  
  it("should be an instance of User", function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it("should store a userData array", function() {
    expect(userRepo.userData).to.be.an('array');
  });

  it("should be able to store a User object", function() {
    expect(userRepo.userData[0]).to.deep.equal({ id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', stride: 4.3, dailyStepGoal: 10000, friends: [ 16, 4, 8 ] });
  });

  it("should be able to retrieve a User object", function() {
    expect(userRepo.retrieveUserData(1)).to.deep.equal({ id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', stride: 4.3, dailyStepGoal: 10000, friends: [ 16, 4, 8 ] });
  });

  it("should store a hydrationData array", function() {
    expect(userRepo.hydrationData).to.be.a('array');
  });

  it("should be able to store a HydrationEntry instance", function() {
    expect(userRepo.hydrationData[0]).to.deep.equal({ id: 1, date: '2019/06/15', numOunces: 37 });
  });

  it("should store a sleepData array", function() {
    expect(userRepo.sleepData).to.be.a('array');
  });

  it("should be able to store a sleepEntry instance", function() {    
    expect(userRepo.sleepData[0]).to.deep.equal({ id: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 });
  });

  it("should store an activityData array", function() {
    expect(userRepo.activityData).to.be.a('array');
  });

  it("should be able to store an activityEntry instance", function() {
    expect(userRepo.activityData[0]).to.deep.equal({ id: 1, date: '2019/06/15', numSteps: 3577, minutesActive: 140, flightsOfStairs: 16 });
  });

  it("should have an average step goal property", function() {
    expect(userRepo.avgStepGoal).to.equal(null);
  });

  it("should calculate the average daily step goal for all users", function() {
    const avgStepGoal = userRepo.retrieveAvgStepGoal();

    expect(avgStepGoal).to.equal(6667);
  });

  it("should calculate the average daily water intake for all users", function() {
    const avgDailyWater = userRepo.calculateAvgDailyWater();

    expect(avgDailyWater).to.equal(61);
  });

  it("should be able to retrieve the ounces drank by a user on a specific date", function() {
    const numOunces1 = userRepo.retrieveNumOuncesByDate(1, '2019/06/18');
    const numOunces2 = userRepo.retrieveNumOuncesByDate(2, '2019/06/16');
    const numOunces3 = userRepo.retrieveNumOuncesByDate(3, '2019/06/20');

    expect(numOunces1).to.equal(61);
    expect(numOunces2).to.equal(91);
    expect(numOunces3).to.equal(51);
  });

  it("should calculate the average daily water intake for a user over the course of a week", function() {
    const avgWeeklyWater1 = userRepo.calculateAvgWeeklyWater(1, '2019/06/15');
    // add 2 more method calls

    expect(avgWeeklyWater1).to.equal(66);
  });

});