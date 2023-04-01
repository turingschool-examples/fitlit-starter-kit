import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import mock from '../src/data/mock';

describe('Sleep', function() {
  let user1, user2, user3;
  beforeEach(function() {
      user1 = new User(mock.users[0])
      user2 = new User(mock.users[1])
      user3 = new User(mock.users[2])
  })  
  it('should be a function', function() {
      expect(Sleep).to.be.a('function')
  });
  it('should be able to calculate average hours slept', function() {
    const sleep = new Sleep(user1.id);
    sleep.findAvgHours();

    expect(sleep.findAvgHours()).to.deep.equal("7.95");
  });
  it('should be able to store average sleep quality', function()  {
    const sleep = new Sleep(user1.id);
    sleep.findAvgQuality();

    expect(sleep.findAvgQuality()).to.deep.equal("3.80");
  })

  it('should be able to find hours slept by date', function() {
    const sleep = new Sleep(user1.id);
    sleep.findDailyHours("2023/03/24");

    expect(sleep.dailyHours).to.deep.equal(9.6);
  })

  it('should be able to find sleep quality by date', function() {
    const sleep = new Sleep(user1.id);
    sleep.findDailyQuality("2023/03/24");
    
    expect(sleep.dailyQuality).to.deep.equal(4.3);
  })
})
