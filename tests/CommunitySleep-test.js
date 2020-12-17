const chai = require('chai');
const expect = chai.expect;

const CommunitySleep = require('../src/CommunitySleep');
const Sleep = require('../src/Sleep');

describe('CommunitySleep', function() {
  let communitySleep, sleep;

  beforeEach(function() {
    communitySleep = new CommunitySleep([
      {"userID": 39, "date": "2019/08/10", "hoursSlept": 4.8, "sleepQuality": 1.4},//1
      {"userID": 40, "date": "2019/08/10", "hoursSlept": 4.1, "sleepQuality": 2.1},
      {"userID": 41, "date": "2019/08/10", "hoursSlept": 10.3, "sleepQuality": 3.6},
      {"userID": 39, "date": "2019/08/11", "hoursSlept": 4.2, "sleepQuality": 2.3},//2
      {"userID": 40, "date": "2019/08/11", "hoursSlept": 4.8, "sleepQuality": 2.0},
      {"userID": 41, "date": "2019/08/11", "hoursSlept": 7.0, "sleepQuality": 1.4},
      {"userID": 39, "date": "2019/08/12", "hoursSlept": 5.5, "sleepQuality": 3.3},//3
      {"userID": 40, "date": "2019/08/12", "hoursSlept": 3.4, "sleepQuality": 1.4},
      {"userID": 41, "date": "2019/08/12", "hoursSlept": 8.1, "sleepQuality": 2.7},
      {"userID": 39, "date": "2019/08/13", "hoursSlept": 4.8, "sleepQuality": 1.0},//4
      {"userID": 40, "date": "2019/08/13", "hoursSlept": 9.2, "sleepQuality": 3.3},
      {"userID": 41, "date": "2019/08/13", "hoursSlept": 5.5, "sleepQuality": 1.4},
      {"userID": 39, "date": "2019/08/14", "hoursSlept": 4.8, "sleepQuality": 1.4},//5
      {"userID": 40, "date": "2019/08/14", "hoursSlept": 6.0, "sleepQuality": 1.4},
      {"userID": 41, "date": "2019/08/14", "hoursSlept": 4.8, "sleepQuality": 2.2},
      {"userID": 39, "date": "2019/08/15", "hoursSlept": 7.5, "sleepQuality": 1.4},//6
      {"userID": 40, "date": "2019/08/15", "hoursSlept": 6.8, "sleepQuality": 3.8},
      {"userID": 41, "date": "2019/08/15", "hoursSlept": 8.1, "sleepQuality": 2.5},
      {"userID": 39, "date": "2019/08/16", "hoursSlept": 6.8, "sleepQuality": 1.8},//7
      {"userID": 40, "date": "2019/08/16", "hoursSlept": 9.3, "sleepQuality": 3.8},
      {"userID": 41, "date": "2019/08/16", "hoursSlept": 6.8, "sleepQuality": 2.9},
      {"userID": 39, "date": "2019/08/17", "hoursSlept": 8.2, "sleepQuality": 3.8},//8
      {"userID": 40, "date": "2019/08/17", "hoursSlept": 3.4, "sleepQuality": 3.4},
      {"userID": 41, "date": "2019/08/17", "hoursSlept": 6.7, "sleepQuality": 4.3},
      {"userID": 39, "date": "2019/08/18", "hoursSlept": 6.8, "sleepQuality": 3.8},//9
      {"userID": 40, "date": "2019/08/18", "hoursSlept": 6.9, "sleepQuality": 3.3},
      {"userID": 41, "date": "2019/08/18", "hoursSlept": 9.2, "sleepQuality": 2.6},
      {"userID": 39, "date": "2019/08/19", "hoursSlept": 8.4, "sleepQuality": 4.2},//10
      {"userID": 40, "date": "2019/08/19", "hoursSlept": 6.5, "sleepQuality": 3.8},
      {"userID": 41, "date": "2019/08/19", "hoursSlept": 4.0, "sleepQuality": 3.8},
      {"userID": 39, "date": "2019/08/20", "hoursSlept": 4.2, "sleepQuality": 1.4},//11
      {"userID": 40, "date": "2019/08/20", "hoursSlept": 6.8, "sleepQuality": 1.1},
      {"userID": 41, "date": "2019/08/20", "hoursSlept": 6.8, "sleepQuality": 3.8},
    ]);
  });

  it('should be able to calculate the average number of hours slept per day for the given user ID', () => {
    expect(communitySleep.calculateAvgSleepHrsPerDay(39)).to.equal(6.0);
    expect(communitySleep.calculateAvgSleepHrsPerDay(40)).to.equal(6.1);
    expect(communitySleep.calculateAvgSleepHrsPerDay(41)).to.equal(7.0);
  });

  it('should be able to calculate the average sleep quality per day over all time for the given user ID', () => {
    expect(communitySleep.calculateAvgSleepQualPerDay(39)).to.equal(2.3);
    expect(communitySleep.calculateAvgSleepQualPerDay(40)).to.equal(2.7);
    expect(communitySleep.calculateAvgSleepQualPerDay(41)).to.equal(2.8);
  });

  it('should be able to return how many hours a user slept on a specific day, identified by a date', () => {
    expect(communitySleep.findHrsSleptOnDay(39, "2019/08/20")).to.equal(4.2);
    expect(communitySleep.findHrsSleptOnDay(40, "2019/08/16")).to.equal(9.3);
    expect(communitySleep.findHrsSleptOnDay(41, "2019/08/12")).to.equal(8.1);
  });

  it('should be able to return the sleep quality of a user for a specific day', () => {
    expect(communitySleep.findSleepQualityOnDay(39, "2019/08/10")).to.equal(1.4);
    expect(communitySleep.findSleepQualityOnDay(40, "2019/08/18")).to.equal(3.3);
    expect(communitySleep.findSleepQualityOnDay(41, "2019/08/19")).to.equal(3.8);
  });

  it('should be able to calculate how many hours slept each day over the course of 7 days, for a single user', () => {
    expect(communitySleep.calculateSleepWeek(39, "2019/08/11", "2019/08/17")).to.deep.equal([4.2, 5.5, 4.8, 4.8, 7.5, 6.8, 8.2]);
    expect(communitySleep.calculateSleepWeek(40, "2019/08/10", "2019/08/16").to.deep.equal([4.1, 4.8, 3.4, 9.2, 6.0, 6.8, 9.3]));
    expect(communitySleep.calculateSleepWeek(41, "2019/08/14", "2019/08/20").to.deep.equal([4.8, 8.1, 6.8, 6.7, 9.2, 4.0, 6.8]));
  });

  it('should be able to calculate the sleep quality over the course of 7 days on any given week, for a single user', () => {
    expect(communitySleep.calculateSleepQualityWeek(39, "2019/08/10", "2019/08/16").to.deep.equal([1.4, 2.3, 3.3, 1.0, 1.4, 1.4, 1.8]));
    expect(communitySleep.calculateSleepQualityWeek(40, "2019/08/12", "2019/08/18").to.deep.equal([1.4, 3.3, 1.4, 3.8, 3.8, 3.4, 3.3]));
    expect(communitySleep.calculateSleepQualityWeek(41, "2019/08/14", "2019/08/20").to.deep.equal([2.2, 2.5, 2.9, 4.3, 2.6, 3.8, 3.8]));
  })

  it('should be able to calculate the average sleep quality for all users', () => {
    expect(communitySleep.calculateAvgSleepQuality().to.equal(2.6));//rounded down
  })

  it('should be able to find which users average a sleep quality greater than 3 for a given week', () => {
    expect(communitySleep.findBestQualitySleepers("2019/08/10", "2019/08/16").to.deep.equal([]));//none// return console.log
    expect(communitySleep.findBestQualitySleepers("2019/08/13", "2019/08/19").to.deep.equal([40]));
    expect(communitySleep.findBestQualitySleepers("2019/08/14", "2019/08/20").to.deep.equal([41]));
  })
  it('should be able to find the users who slept the most number of hours for a given date (can be more than 1)', () => {
    expect(communitySleep.findMostHrsSleepers("2019/08/11").to.deep.equal([41]));
    expect(communitySleep.findMostHrsSleepers("2019/08/17").to.deep.equal([39]));
    expect(communitySleep.findMostHrsSleepers("2019/08/20").to.deep.equal([40, 41]));
  })
})
