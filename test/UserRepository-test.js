const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const sleepData = require('../data/sleep-mock-data');
const activityData = require('../data/activity-mock-data');
const data = {
  users: [{
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  }, {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    }],
  hydration: [],
  sleep: sleepData,
  activity: activityData
};

let userRepository, user;

beforeEach(() => {
  userRepository = new UserRepository(data);
  user = {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    };
  userRepository.currentUserId = 2;
})

describe("UserRepository", () => {
  it("should be function", () => {
    expect(UserRepository).to.be.a('function');
  });

  it("should be an instance of UserRepository", () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should store information about all users', function () {
    expect(userRepository.usersData).to.deep.equal([{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }, {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      }]);
  });

  it('should keep current user ID', function() {
    expect(userRepository.currentUserId).to.equal(2);
  });

  it('should find user when name given', function() {
    const name = "Jarvis Considine";
    userRepository.findUserByName(name);
    expect(userRepository.currentUserId).to.equal(2);
  });

  it('should calculate average step goal', function() {
    expect(userRepository.calculateAverageStepGoal()).to.equal(7500);
  });

  it('should calculate average all user\'s sleep quality', function() {
    expect(userRepository.getAllUserAverageQualtiy()).to.equal(2.6);
  });

  it('should keep choosen day', function() {
    userRepository.findToday();
    expect(userRepository.day).to.equal("2019/09/22");
  });

  it('should return true if day is valid', function() {
    let resultCorrect = !!(userRepository.validateDate("2019/09/22"));
    expect(resultCorrect).to.equal(true);
  });

  it('should return true if day is valid', function() {
    let resultIncorrect = !!(userRepository.validateDate("1999/09/22"));
    expect(resultIncorrect).to.equal(false);
  });

  it('should can find week', function() {
    userRepository.findToday();
    const week = userRepository.getWeekDates(userRepository.day);
    expect(week).to.deep.equal(["2019/09/16","2019/09/17","2019/09/18","2019/09/19","2019/09/20","2019/09/21","2019/09/22"]);
  });

  it('should can find people who sleep well this week', function() {
    userRepository.findToday();
    const goodSleepPerson = userRepository.findGoodSleepWeekUsers(userRepository.day);
    expect(goodSleepPerson).to.deep.equal([ ]);
  });

  it('should can find person who slept most hours', function() {
    userRepository.findToday();
    const sleepPerson = userRepository.findSleepingBeauty(userRepository.day);
    expect(sleepPerson).to.deep.equal([
      { userID: 2,
        date: '2019/09/22',
        hoursSlept: 5.1,
        sleepQuality: 4.6 }]);
  });

  describe('findAverageActivityValue method', () => {
    it('should calculate average stairs climbed for all users', function () {
      const stairs = userRepository.findAverageActivityValue('flightsOfStairs');
      expect(stairs).to.equal(20);
    });

    it('should calculate average steps taken for all users', function () {
      const steps = userRepository.findAverageActivityValue('numSteps');
      expect(steps).to.equal(7958);
    });

    it('should calculate average active minutes for all users', function () {
      const minutes = userRepository.findAverageActivityValue('minutesActive');
      expect(minutes).to.equal(178);
    });
  });

  it('should find user who have the highest steps number', function() {
    userRepository.day = '2019/09/22';
    const forrest = userRepository.findForestGumpOfDay(userRepository.activityUsersData);
    expect(forrest).to.equal(2);
  });
});
