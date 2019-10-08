const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const users = require('../data/users');
const hydration = require('../data/hydration');
const sleep = require('../data/sleep');
const activity = require('../data/activity');
const data = {
  users: users,
  hydration: hydration,
  sleep: sleep,
  activity: activity
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
    userRepository.getWeekDate("2019/06/15");
  });

  it("should be an instance of UserRepository", () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should store information about all users', function () {
    expect(userRepository.usersData[0]).to.deep.equal({
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
    });
  });

  it('should keep current user ID', function () {
    expect(userRepository.currentUserId).to.equal(2);
  });

  it('should keep current user information', function () {
    expect(userRepository.currentUserInfo).to.deep.equal({
      bio: {},
      hydration: [],
      sleep: [],
      activity: []
    });
  });

  it('should find user when name given', function () {
    const name = "Jarvis Considine";
    userRepository.findUserByName(name);
    expect(userRepository.currentUserId).to.equal(2);
  });

  it('should update current user bio when user is found', function () {
    const name = "Jarvis Considine";
    userRepository.findUserByName(name);
    expect(userRepository.currentUserInfo.bio).to.deep.equal({
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
    });
  });

  describe("updateCurrentUserInfo method", () => {
    it('should update user hydration information', function () {
      userRepository.updateCurrentUserInfo('hydration');
      expect(userRepository.currentUserInfo.hydration[0]).to.deep.equal({
        "date": "2019/06/15",
        "numOunces": 75
      });
    });

    it('should update user sleep information', function () {
      userRepository.updateCurrentUserInfo('sleep');
      expect(userRepository.currentUserInfo.sleep[0]).to.deep.equal({
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      });
    });

    it('should update user activity information', function () {
      userRepository.updateCurrentUserInfo('activity');
      expect(userRepository.currentUserInfo.activity[0]).to.deep.equal({
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      });
    });
  });

  it('should calculate average step goal', function () {
    expect(userRepository.calculateAverageStepGoal()).to.equal(6700);
  });

  it('should calculate average all user\'s sleep quality', function () {
    expect(userRepository.getAllUserAverageQualtiy()).to.equal(2.98);
  });

});
