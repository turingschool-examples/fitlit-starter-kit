const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/user');
const Activity = require('../src/Activity');
const activityData = require('../data/activity');

let activity, userRepo, user, userActivityData, data;

beforeEach(() => {
  userActivityData = activityData.filter(data => data.userID === 2);
  data = {
    users: [{
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
    sleep: [],
    activity: userActivityData
  };
  userRepo = new UserRepository(data);
  userRepo.findToday();
  user = new User(userRepo.findUserByName('Jarvis Considine'));
  activity = new Activity(userRepo);
});

  describe("Activity", () => {
    it("should be function", () => {
      expect(Activity).to.be.a('function');
    });

    it("should be an instance of Active", () => {
      expect(activity).to.be.an.instanceof(Activity);
    });

    it("should can keep user ID", () => {
      expect(activity.userID).to.equal(2);
    });

    it("should can keep date", () => {
      expect(activity.date).to.equal('2019/09/22');
    });

    it("should can keep number of steps", () => {
      expect(activity.numSteps).to.equal(null);
    });

    it("should can keep active minutes", () => {
      expect(activity.minutesActive).to.equal(null);
    });

    it("should can keep flights of stairs", () => {
      expect(activity.flightsOfStairs).to.equal(null);
    });

    it("should have goal completed track false by default", () => {
      expect(activity.goalComplete).to.equal(false);
    });
  });
