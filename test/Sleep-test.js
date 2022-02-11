import { expect } from 'chai';
import UserRepository from '../src/js/UserRepository';
import userTestData from '../src/data/user-test-data';
import sleepTestData from '../src/data/sleep-test-data';
import User from '../src/js/User';
import Sleep from '../src/js/Sleep';


describe('Sleep', () => {
  let users, user, sleep;

  beforeEach('setup test',() => {
    users = new UserRepository(userTestData);
    user = new User(userTestData[0]);
    sleep = new Sleep(sleepTestData, user.id);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to store sleep data', () => {
    expect(sleep.days).to.be.an('array');
  });

  it('should store the given user\'s sleep data', () => {
    expect(sleep.days).to.be.eql(sleepTestData.slice(2));
  });

  it('should be able to return the average amount of time slept of all time', () => {
    expect(sleep.getAverage()).to.be.eql(7.6);
  });

  it('should be able to return the average amount of sleep quality of all time', () => {
    expect(sleep.getAverageQuality()).to.be.eql(2.9);
  });

  it('should be able to return the amount of time slept on a given day', () => {
    expect(sleep.getSleep('2019/06/25')).to.be.eql(5.1);
  });

  it('should be able to return the amount of time slept on other given days', () => {
    expect(sleep.getSleep('2019/06/26')).to.be.eql(7.7);
    expect(sleep.getSleep('2019/06/23')).to.be.eql(8);
    expect(sleep.getSleep('2019/06/18')).to.be.eql(10.4);
  });

  it('should be able to return the sleep quality on a given day', () => {
    expect(sleep.getSleep('2019/06/25')).to.be.eql(3.7);
  });

  it('should be able to return the sleep quality on other given days', () => {
    expect(sleep.getSleep(sleepTestData[10].date)).to.be.eql(sleepTestData[10].sleepQuality);
    expect(sleep.getSleep(sleepTestData[4].date)).to.be.eql(sleepTestData[4].sleepQuality);
    expect(sleep.getSleep(sleepTestData[18].date)).to.be.eql(sleepTestData[18].sleepQuality);
  });

  it('should be able to return the amount of time slept each day for a week when given a day', () => {
    expect(sleep.getWeekSleep('2019/06/15')).to.be.eql(
      [
        {
          "date":"2019/06/15",
          "hoursSlept":6.1
        },
        {
          "date":"2019/06/16",
          "hoursSlept":4.1
        },
        {
          "date":"2019/06/17",
          "hoursSlept":8
        },
        {
          "date":"2019/06/18",
          "hoursSlept":10.4
        },
        {
          "date":"2019/06/19",
          "hoursSlept":10.7
        },
        {
          "date":"2019/06/20",
          "hoursSlept":9.3
        },
        {
          "date":"2019/06/21",
          "hoursSlept":7.8
        }
      ];
    );
  });

  it('should be able to return the amount of time slept each day for a different week when given a day', () => {
    expect(sleep.getWeekSleep('2019/06/17')).to.be.eql([
        {
          "date":"2019/06/17",
          "hoursSlept":8
        },
        {
          "date":"2019/06/18",
          "hoursSlept":10.4
        },
        {
          "date":"2019/06/19",
          "hoursSlept":10.7
        },
        {
          "date":"2019/06/20",
          "hoursSlept":9.3
        },
        {
          "date":"2019/06/21",
          "hoursSlept":7.8
        }
        {
          "date":"2019/06/22",
          "hoursSlept":7,
        },
        {
          "date":"2019/06/23",
          "hoursSlept":8,
        }
      ]);
  });
})
