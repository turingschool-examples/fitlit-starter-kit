const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/user');
const Activity = require('../src/Activity');
const activityData = require('../data/activity-mock-data');
const sleepData = require('../data/sleep-mock-data');

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
    sleep: sleepData,
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

    describe("updateInfo method", () => {
      describe("updateInfo method if date isn't given", () => {
        beforeEach(()=>{
          activity.updateInfo(userRepo);
        });
        it("should show number of steps for today", () => {
          expect(activity.numSteps).to.equal(9050);
        });

        it("should show active minutes for today", () => {
          expect(activity.minutesActive).to.equal(25);
        });

        it("should show flights of stairs for today", () => {
          expect(activity.flightsOfStairs).to.equal(0);
        });
      });

      describe("updateInfo method if given date is not in database", () => {
        beforeEach(()=>{
          activity.date = '1999/11/11'
          activity.updateInfo(userRepo);
        });

        it("should show no number of steps if date is not in database", () => {
          expect(activity.numSteps).to.equal(0);
        });

        it("should show no active minutes if date is not in database", () => {
          expect(activity.minutesActive).to.equal(0);
        });

        it("should show no flights of stairs if date is not in database", () => {
          expect(activity.flightsOfStairs).to.equal(0);
        });
      });
    });

    it("should count miles", () => {
      activity.updateInfo(userRepo);
      const miles = activity.findMiles(user);
      expect(miles).to.equal(7);
    });

    describe("changeDate method", () => {
      beforeEach(()=>{
        activity.changeDate(userRepo, '2019/09/19');
      });

      it("should show number of steps for chosen day", () => {
        expect(activity.numSteps).to.equal(5773);
      });

      it("should show active minutes for chosen day", () => {
        expect(activity.minutesActive).to.equal(181);
      });

      it("should show flights of stairs for chosen day", () => {
        expect(activity.flightsOfStairs).to.equal(3);
      });

      it("should count miles for chosen day", () => {
        const miles = activity.findMiles(user);
        expect(miles).to.equal(4);
      });
    });

    it("should show all activity info for week", () => {
      const info = activity.getWeekInformation(userRepo);
      expect(info).to.deep.equal([
        { userID: 2,
          date: '2019/09/16',
          numSteps: 7322,
          minutesActive: 164,
          flightsOfStairs: 21 },
        { userID: 2,
          date: '2019/09/17',
          numSteps: 2813,
          minutesActive: 277,
          flightsOfStairs: 2 },
        { userID: 2,
          date: '2019/09/18',
          numSteps: 8664,
          minutesActive: 142,
          flightsOfStairs: 3 },
        { userID: 2,
          date: '2019/09/19',
          numSteps: 5773,
          minutesActive: 181,
          flightsOfStairs: 3 },
        { userID: 2,
          date: '2019/09/20',
          numSteps: 2969,
          minutesActive: 273,
          flightsOfStairs: 6 },
        { userID: 2,
          date: '2019/09/21',
          numSteps: 7505,
          minutesActive: 48,
          flightsOfStairs: 40 },
        { userID: 2,
          date: '2019/09/22',
          numSteps: 9050,
          minutesActive: 25,
          flightsOfStairs: 0 } ]);
    });

    describe("getAverageForSevenDays method", () => {
      describe("getAverageForSevenDays method for current week", () =>{
        beforeEach(()=>{
          activity.getAverageForSevenDays(userRepo);
        });
        it("should show average number of steps for week", () => {
          expect(activity.numSteps).to.equal(6299);
        });

        it("should show average active minutes for week", () => {
          expect(activity.minutesActive).to.equal(158);
        });

        it("should show average flights of stairs for week", () => {
          expect(activity.flightsOfStairs).to.equal(10);
        });

        it("should count miles for week", () => {
          const miles = activity.findMiles(user);
          expect(miles).to.equal(5);
        });
      });
    });

    it("should check compliting of steps goal", () => {
      activity.changeDate(userRepo, '2019/09/19');
      activity.checkStepGoal(user);
      expect(activity.goalComplete).to.equal(true);
    });

    it("should find all days with complited steps goal", () => {
      activity.changeDate(userRepo);
      const info =  activity.findGoalCompletedDays(userRepo, user);
      expect(info).to.deep.equal(
        [ '2019/09/16',
          '2019/09/18',
          '2019/09/19',
          '2019/09/21',
          '2019/09/22' ]);
    });

    it("should find the highest number of flights", () => {
      const flight = activity.findStairRecord(userRepo.activityUsersData);
      expect(flight).to.equal(40);
    });
  });
