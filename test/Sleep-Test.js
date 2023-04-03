import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import mock from '../src/data/mock';

describe('Sleep', function () {
  let user1;
  let sleep;
  beforeEach(() => {
    user1 = new User(mock.users[0]);
    sleep = new Sleep(mock.sleepData);
  });

  it('should be a function', function () {
    expect(Sleep).to.be.a('function')
  });

  it('should be able to calculate average hours slept', function () {
    expect(sleep.findAvgHours(user1)).to.equal("7.95");
  });

  it('should be able to store average sleep quality', function () {
    expect(sleep.findAvgQuality(user1)).to.equal("3.80");
  });

  it('should be able to find hours slept by date', function () {
    expect(sleep.findDailyHours(user1, "2023/03/24")).to.equal(9.6);
  });

  it('should be able to find sleep quality by date', function () {
    expect(sleep.findDailyQuality(user1, "2023/03/24")).to.equal(4.3);
  });

  it('should be able store one week of sleep data', function () {
    expect(sleep.findWeeklyHours(user1, "2023/03/24")).to.deep.equal([])
  });

  it('should be able store one week of sleep quality data', function () {
    expect(sleep.findWeeklyQuality(user1, "2023/03/24")).to.deep.equal([])
  })
})
