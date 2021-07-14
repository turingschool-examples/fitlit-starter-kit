import { expect } from 'chai';
import { sleepTestData } from '../src/data/sleep-test-data';
import SleepRepo from '../src/SleepRepository';
import Sleep from '../src/Sleep';

describe('Sleep Repo', () => {
  let sleepRepo, sleepData;

  beforeEach(() => {
    sleepData = sleepTestData.map(object => new Sleep(object));
    sleepRepo = new SleepRepo(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of sleep', () => {
    expect(sleepData[0]).to.be.an('object');
    expect(sleepData[0]).to.be.an.instanceof(Sleep);
  });

  it('should hold all sleep objects', () => {
    expect(sleepRepo.sleepData[0]).to.be.an('object');
    expect(sleepRepo.sleepData[0]).to.deep.equal({"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2});
    expect(sleepRepo.sleepData[2].userID).to.equal(3);
  });

  it('should be able to find stats for a specific user', () => {
    let userSleepStats = sleepRepo.getSleepById(5);

    expect(userSleepStats).to.be.an('array');
    expect(userSleepStats[0]).to.deep.equal({
      userID: 5,
      date: '2019/06/15',
      hoursSlept: 4.1,
      sleepQuality: 3.6
    });
  })

  it('should be able to find average hours of sleep per day for any user', () => {
    let avgHours = sleepRepo.calculateAvgSleepStatPerDay(5, 'hoursSlept');

    expect(avgHours).to.be.a('number');
    expect(avgHours).to.equal(7);
  });

  it('should be able to find average rating of sleep quality per day for any user', () => {
    let avgRating = sleepRepo.calculateAvgSleepStatPerDay(5, 'sleepQuality');

    expect(avgRating).to.be.a('number');
    expect(avgRating).to.equal(3);
  });

  it('should be able to find how many hours a user has slept on a specific date', () => {
    let dailyHours = sleepRepo.getSleepStatByDate(10,'2019/06/15', 'hoursSlept');

    expect(dailyHours).to.be.a('number');
    expect(dailyHours).to.equal(4.4);
  });

  it('should be able to find how many hours a user has slept on a specific date', () => {
    let dailyRating = sleepRepo.getSleepStatByDate(10,'2019/06/15', 'sleepQuality');

    expect(dailyRating).to.be.a('number');
    expect(dailyRating).to.equal(1.6);
  });

  it('should return a user\'s hours of sleep for each day in a given week', () => {
    let weeklyHours = sleepRepo.getSleepStatsByWeek(1,'2019/06/19', 'hoursSlept');

    expect(weeklyHours).to.be.a('object');
    expect(weeklyHours).to.deep.equal({
      '2019/06/19': 10.7,
      '2019/06/20': 9.3,
      '2019/06/21': 7.8,
      '2019/06/22': 7,
      '2019/06/23': 7.8,
      '2019/06/24': 8,
      '2019/06/25': 5.1
    });
  });

  it('should return a user\'s sleep quality for each day in a given week', () => {
    let weeklyRatings = sleepRepo.getSleepStatsByWeek(1,'2019/06/19', 'sleepQuality');

    expect(weeklyRatings).to.be.a('object');
    expect(weeklyRatings).to.deep.equal({
      '2019/06/19': 1.2,
      '2019/06/20': 1.2,
      '2019/06/21': 4.2,
      '2019/06/22': 3,
      '2019/06/23': 1.5,
      '2019/06/24': 1.3,
      '2019/06/25': 3.7
    });
  });

});
