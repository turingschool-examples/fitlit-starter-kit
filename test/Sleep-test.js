const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let sleep1;
  let sleep2;
  let sleep3;
  let sleep4;
  let sleep5;
  let sleep6;
  let sleep7;
  let sleep8;
  let sleep9;
  let sleep10;
  let sleep11;
  let sleep12;
  let sleep13;

  let sleepData;
  let sleep;

  beforeEach(() => {
    sleep1 = {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    }

    sleep2 = {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    }

    sleep3 = {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    }

    sleep4 = {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    }

    sleep5 = {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 4.1,
      "sleepQuality": 3.6
    }

    sleep6 = {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.6,
      "sleepQuality": 2.9
    }

    sleep7 = {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 5.1,
      "sleepQuality": 2.6
    }

    sleep8 = {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 8.1,
      "sleepQuality": 3.5
    }

    sleep9 = {
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 8.9,
      "sleepQuality": 2.2
    }

    sleep10 = {
      "userID": 1,
      "date": "2019/06/24",
      "hoursSlept": 4.4,
      "sleepQuality": 1.6
    }

    sleep11 = {
      "userID": 2,
      "date": "2019/06/24",
      "hoursSlept": 4.9,
      "sleepQuality": 3.9
    }

    sleep12 = {
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 8,
      "sleepQuality": 3.4
    }

    sleep13 = {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 10.1,
      "sleepQuality": 1.8
    }
    
    sleepData = [
      sleep1,
      sleep2,
      sleep3,
      sleep4,
      sleep5,
      sleep6,
      sleep7,
      sleep8,
      sleep9,
      sleep10,
      sleep11,
      sleep12,
      sleep13
    ]

    sleep = new Sleep(1, sleepData)
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  })

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep)
  })

//
  it('should return user Sleep data', () => {
    expect(sleepData.length).to.equal(13)
  })

  it('should return Sleep Data for a specific user', () => {
    expect(userSleep.length).to.equal(10)
  })

  it('should return hours slept for a given day', () => {
    expect(sleep.getDailySleepHours("2019/06/23")).to.equal(8.9)
  })

  it('should return sleep quality for a given day', () => {
    expect(sleep.getDailySleepQual("2019/06/23")).to.equal(2.2)
  })

  it('should calculate average all time sleep hours', () => {
    expect(sleep.getAvgSleepHours()).to.equal(6.95)
  })

  it('should calculate average all time sleep quality', () => {
    expect(sleep.getAvgSleepQual()).to.equal(3.1)
  })

  it('should return specific sleep hours over 7 days', () => {
    expect(sleep.getWeeklySleepHours("2019/06/15")).to.equal([6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1])
  })

  it('should return specific sleep quality over 7 days', () => {
    expect(sleep.getWeeklySleepQual("2019/06/15")).to.equal([2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6])
  })
})