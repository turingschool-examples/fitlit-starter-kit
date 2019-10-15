const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const Sleep = require('../src/Sleep');
const sleepData = require('../data/sleep');

let sleep, userRepo, user, userInfo, userSleepData, data;

beforeEach(() => {
  userSleepData = sleepData.filter(data => data.userID === 2);
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
    sleep: userSleepData,
    activity: []
  };
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

  it("should can keep date information", () => {
    expect(sleep.date).to.equal('2019/09/22');
  });

  it("should keep hours slept", () => {
    expect(sleep.hoursSlept).to.equal(null);
  });

  it("should keep sleep quality", () => {
    expect(sleep.sleepQuality).to.equal(null);
  });

  it("should can update sleep hours", () => {
    sleep.updateInfo(userRepo);
    expect(sleep.hoursSlept).to.equal(5.1);
  });

  it("should can update sleep quality", () => {
    sleep.updateInfo(userRepo);
    expect(sleep.sleepQuality).to.equal(4.6);
  });

  it("should can show parts of sleep quality", () => {
    sleep.updateInfo(userRepo);
    expect(sleep.splitQuality()).to.deep.equal([4,6]);
  });

  describe("changeDate method", () => {
    it("should show today if date's not given", () => {
      sleep.changeDate(userRepo);
      expect(sleep.date).to.equal('2019/09/22');
    });

    it("should change date if date is given", () => {
      sleep.changeDate(userRepo, '2019/07/01');
      expect(sleep.date).to.equal('2019/07/01');
    });

    it("should get sleep hours if date is given", () => {
      sleep.changeDate(userRepo, '2019/07/01');
      expect(sleep.date).to.equal('2019/07/01');
    });

    it("should update sleep hours for given date", () => {
      sleep.changeDate(userRepo, '2019/07/01');
      expect(sleep.hoursSlept).to.equal(9);
    });

    it("should update sleep quality for given date", () => {
      sleep.changeDate(userRepo, '2019/07/01');
      expect(sleep.sleepQuality).to.equal(4.7);
    });

    it("should show no sleep hours if date is not found in database", () => {
      sleep.changeDate(userRepo, '2011/07/01');
      expect(sleep.hoursSlept).to.equal(0);
    });

    it("should show no sleep quality if date is not found in database", () => {
      sleep.changeDate(userRepo, '2011/07/01');
      expect(sleep.sleepQuality).to.equal(0);
    });
  });

  describe('getWeeklyInfo method', () => {
    it("should get sleep hours for current week", () => {
      const weekHours = sleep.getWeeklyInfo(userRepo, 'hours');
      expect(weekHours).to.deep.equal([7.4, 9.5, 4.8, 10.6, 8.5, 8.2, 5.1]);
    });

    it("should get sleep quality for current week", () => {
      const weekQuality = sleep.getWeeklyInfo(userRepo, 'quality');
      expect(weekQuality).to.deep.equal([2.7, 1.7, 3.8, 1.6, 4.3, 1.9, 4.6]);
    });

    it("should get sleep hours for any week", () => {
      sleep.changeDate(userRepo, '2019/07/21');
      const weekHours = sleep.getWeeklyInfo(userRepo, 'hours');
      expect(weekHours).to.deep.equal([9.3, 8.7, 5.2, 5.1, 6.8, 4.7, 9.5]);
    });

    it("should get sleep quality for any week", () => {
      sleep.changeDate(userRepo, '2019/07/21');
      const weekQuality = sleep.getWeeklyInfo(userRepo, 'quality');
      expect(weekQuality).to.deep.equal([4.6, 2.2, 2.1, 1.4, 3.1, 3.6, 5]);
    });
  })

  it("should get day average sleep hours for week", () => {
    expect(sleep.calculateDayAverageInfo(userRepo, 'hours')).to.equal(7.4);
  });

  it("should get day average sleep quality for week", () => {
    expect(sleep.calculateDayAverageInfo(userRepo, 'quality')).to.equal(3);
  });
});
