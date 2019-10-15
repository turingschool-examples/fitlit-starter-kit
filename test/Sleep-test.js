const expect = require('chai').expect;
const Sleep = require('../src/Sleep');
const sleepTestData = require('../subData.js/sleepSubData')

describe.only('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(5, sleepTestData);
  });
  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should find a single user\'s data', () => {
    expect(sleep.findUser(5)).to.eql([
      { userID: 5, date: '2019/06/15', hoursSlept: 4.1, sleepQuality: 3.6 },
      { userID: 5, date: '2019/06/16', hoursSlept: 7.4, sleepQuality: 2.4 },
      { userID: 5, date: '2019/06/17', hoursSlept: 10.5, sleepQuality: 3.7 },
      { userID: 5, date: '2019/06/18', hoursSlept: 5.2, sleepQuality: 4.1 },
      { userID: 5, date: '2019/06/19', hoursSlept: 4.8, sleepQuality: 3.4 },
      { userID: 5, date: '2019/06/20', hoursSlept: 10.1, sleepQuality: 3.5 },
      { userID: 5, date: '2019/06/21', hoursSlept: 9.6, sleepQuality: 4.1 },
      { userID: 5, date: '2019/06/22', hoursSlept: 8.1, sleepQuality: 1.3 },
      { userID: 5, date: '2019/06/23', hoursSlept: 5.1, sleepQuality: 1.6 },
      { userID: 5, date: '2019/06/24', hoursSlept: 6.8, sleepQuality: 2.1 }
    ])
  });

  it('should return the average number of hours slept per day', () => {
    expect(sleep.findAvgHoursSlept(5)).to.equal(7.17)
  });

  it('should return the avergae sleep quality per day', () => {
    expect(sleep.findAvgSleepQuality(5)).to.equal(2.98)
  });

  it('should return hours slept for a specific date', () => {
    expect(sleep.findHoursSlept(5, '2019/06/24')).to.equal(6.8)
  });

  it('should return sleep quality for a specific day', () => {
    expect(sleep.findSleepQuality(5, '2019/06/24')).to.equal(2.1)
  });

  it('should return a week\'s worth of information', () => {
    expect(sleep.findAnyWeek(5, '2019/06/22')).to.eql([
      { userID: 5, date: '2019/06/16', hoursSlept: 7.4, sleepQuality: 2.4 },
      { userID: 5, date: '2019/06/17', hoursSlept: 10.5, sleepQuality: 3.7 },
      { userID: 5, date: '2019/06/18', hoursSlept: 5.2, sleepQuality: 4.1 },
      { userID: 5, date: '2019/06/19', hoursSlept: 4.8, sleepQuality: 3.4 },
      { userID: 5, date: '2019/06/20', hoursSlept: 10.1, sleepQuality: 3.5 },
      { userID: 5, date: '2019/06/21', hoursSlept: 9.6, sleepQuality: 4.1 },
      { userID: 5, date: '2019/06/22', hoursSlept: 8.1, sleepQuality: 1.3 }
    ])
  });

  it('should show how many hours slept every night over the course of a given week', () => {
    expect(sleep.findHoursSleptForWeek(5, '2019/06/22')).to.eql(
      [{ date: '2019/06/16', hoursSlept: 7.4 },
      { date: '2019/06/17', hoursSlept: 10.5 },
      { date: '2019/06/18', hoursSlept: 5.2 },
      { date: '2019/06/19', hoursSlept: 4.8 },
      { date: '2019/06/20', hoursSlept: 10.1 },
      { date: '2019/06/21', hoursSlept: 9.6 },
      { date: '2019/06/22', hoursSlept: 8.1 }]
    )
  });

  it('should the quality of sleep for the course of a week', () => {
    expect(sleep.findSleepQualityForWeek(5, '2019/06/22')).to.eql(
      [{ date: '2019/06/16', sleepQuality: 2.4 },
      { date: '2019/06/17', sleepQuality: 3.7 },
      { date: '2019/06/18', sleepQuality: 4.1 },
      { date: '2019/06/19', sleepQuality: 3.4 },
      { date: '2019/06/20', sleepQuality: 3.5 },
      { date: '2019/06/21', sleepQuality: 4.1 },
      { date: '2019/06/22', sleepQuality: 1.3 }]
    )
  });

  it('should return the average sleep quality among all users', () => {
    expect(sleep.findAvgQualityForAll()).to.equal(2.90)
  });

  it('should return users who average a sleep quality greater than 3 for a given week', () => {
    expect(sleep.findAvgOverThree()).to.eql([
      { "userID": 2, "avgSleepQuality": 3.36 },
      { "userID": 3, "avgSleepQuality": 3.17 }
    ])
  })

  it('should return the user(s) who slept the most number of hours', () => {
    expect(sleep.findUserWhoSleptMost('2019/06/24')).to.eql([{
      "userID": 2,
      "date": "2019/06/24",
      "hoursSlept": 10.8,
      "sleepQuality": 1
    }]);
  });

  it('should return the night(s) with the user\'s best sleep quality', () => {
    expect(sleep.findBestSleepQualityNight(5)).to.eql([
      {
      "date": "2019/06/18",
       "hoursSlept": 5.2,
       "sleepQuality": 4.1,
       "userID": 5
      },
     {
      "date": "2019/06/21",
       "hoursSlept": 9.6,
       "sleepQuality": 4.1,
       "userID": 5
      }
    ]);
  });
})