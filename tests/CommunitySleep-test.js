const chai = require('chai');
const expect = chai.expect;

const CommunitySleep = require('../src/CommunitySleep');
const Sleep = require('../src/Sleep');

describe('CommunitySleep', function() {
  let communitySleep, sleep;

  beforeEach(function() {
    communitySleep = new CommunitySleep([
      //data with at least one week per user
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
      {"userID": 39, "date": "2019/08/16", "hoursSlept": 6.8, "sleepQuality": 1.8},
      {"userID": 40, "date": "2019/08/16", "hoursSlept": 9.3, "sleepQuality": 3.8},
      {"userID": 41, "date": "2019/08/16", "hoursSlept": 6.8, "sleepQuality": 2.9},
      {"userID": 39, "date": "2019/08/17", "hoursSlept": 8.2, "sleepQuality": 3.8},
      {"userID": 40, "date": "2019/08/17", "hoursSlept": 3.4, "sleepQuality": 3.4},
      {"userID": 41, "date": "2019/08/17", "hoursSlept": 6.7, "sleepQuality": 4.3},
      {"userID": 39, "date": "2019/08/18", "hoursSlept": 6.8, "sleepQuality": 3.8},
      {"userID": 40, "date": "2019/08/18", "hoursSlept": 6.9, "sleepQuality": 3.3},
      {"userID": 41, "date": "2019/08/18", "hoursSlept": 9.2, "sleepQuality": 2.6},
      {"userID": 39, "date": "2019/08/19", "hoursSlept": 2.1, "sleepQuality": 4.2},
      {"userID": 40, "date": "2019/08/19", "hoursSlept": 6.5, "sleepQuality": 3.8},
      {"userID": 41, "date": "2019/08/19", "hoursSlept": 4.0, "sleepQuality": 3.8},
      {"userID": 39, "date": "2019/08/20", "hoursSlept": 4.2, "sleepQuality": 1.1},
      {"userID": 40, "date": "2019/08/20", "hoursSlept": 6.8, "sleepQuality": 1.1},
      {"userID": 41, "date": "2019/08/20", "hoursSlept": 6.8, "sleepQuality": 3.8},
    ]);
  });
  it('should be able to calculate the average number of hours slept per day for the given user ID', () => {

  })
  it('should be able to calculate the average sleep quality per day over all time for the given user ID', () => {

  })
  it('should be able to return how many hours a user slept on a specific day, identified by a date', () => {

  })
  it('should be able to return the sleep quality of a user for a specific day', () => {

  })
  it('should be able to calculate how many hours slept each day over the course of 7 days' () => {

  })
  it('should be able to calculate the sleep quality over the course of 7 days on any given week', () => {

  })
  it('should be able to calculate the average sleep quality for all users', () => {

  })
  it('should be able to find which users average a sleep quality greater than 3 for a given week', () => {

  })
  it('should be able to find the users who slept the most number of hours for a given date', () => {

  })
})
