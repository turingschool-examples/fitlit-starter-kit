import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import mock from '../src/data/mock';

describe('Sleep', function() {
  let user1;
  let sleep;
  beforeEach(() =>  {
    user1 = new User(mock.users[0]);
    sleep = new Sleep(user1.id);
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
    sleep.findAvgQuality();

    expect(sleep.findAvgQuality()).to.deep.equal("3.80");
  })

  it('should be able to find hours slept by date', function() {
    sleep.findDailyHours(user1, "2023/03/24");

    expect(sleep.dailyHours).to.deep.equal(9.6);
  })

  it('should be able to find sleep quality by date', function() {
    sleep.findDailyQuality("2023/03/24");
    
    expect(sleep.dailyQuality).to.deep.equal(4.3);
  })

  it('should be able store one week of sleep data', function()  {
    sleep.findWeeklyHours(user1, "2023/03/24"); 
    
    expect(sleep.weeklyHours).to.deep.equal({ '2023/03/24': 9.6 })
  })

  it('should be able store one week of sleep quality data', function()  {
    sleep.findWeeklyQuality(user1, "2023/03/24"); 
    
    expect(sleep.weeklyQuality).to.deep.equal({ '2023/03/24': 4.3 })
  })
})
