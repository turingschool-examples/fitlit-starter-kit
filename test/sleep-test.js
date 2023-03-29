import { expect } from 'chai';
import Sleep from '../src/data/sleep';
import sleepTestData from '../test/sleep-test-data';


describe('Sleep', function() {
let userSleep1, userSleep2;

  this.beforeEach(() => {
    userSleep1 = new Sleep(sleepTestData[0]);
    userSleep2 = new Sleep(sleepTestData[1]);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of sleep', function() {
    expect(userSleep1).to.be.an.instanceOf(Sleep);
  })

  it('should be able to take in a user ID', function() {
    expect(userSleep1.userID).to.equal(1);
  })

  it('should have a property of ID, date, hours slept, and sleep quality', function() {
    expect(userSleep1.userID).to.equal(1);
    expect(userSleep1.date).to.equal("2023/03/24");
    expect(userSleep1.hoursSlept).to.equal(9.6);
    expect(userSleep1.sleepQuality).to.equal(4.3);

    expect(userSleep2.userID).to.equal(2);
    expect(userSleep2.date).to.equal("2023/03/24");
    expect(userSleep2.hoursSlept).to.equal(8.4);
    expect(userSleep2.sleepQuality).to.equal(3.5);
  })

  it('should be able to average user\'s sleep', function() {
    expect(userSleep1.getAvgSleep(1)).to.equal(6.6);
    expect(userSleep2.getAvgSleep(2)).to.equal(8.1);
  });

  it('should be able to average user\'s sleep quality', function() {
    expect(userSleep1.getAvgQuality(1)).to.equal(3.6);
    expect(userSleep2.getAvgQuality(2)).to.equal(3.3);
  });

})