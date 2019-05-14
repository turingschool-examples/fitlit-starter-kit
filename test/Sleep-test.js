const chai = require('chai');
const expect = chai.expect;

const Sleep = require("../src/Sleep");
const mockSleepData = require("../data/mock-user-sleep");
const mockuserData = require('../data/mock-users');
const mockUser = mockuserData[0]
const sleepInfo = mockSleepData.filter(user => {
  return user.userID === mockUser.id
})[0]

describe("Sleep", function() {

  let sleep;
  beforeEach(function() {
    sleep = new Sleep(mockUser, sleepInfo);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should have default data types', function() {
    
    expect(sleep.user).to.be.an('object');
    expect(sleep.user.id).to.equal(1)
    expect(sleep.info).to.be.an('object');
    expect(sleep.info.sleepData).to.be.an('array')
  });

  it('should return average hours slept with avgHoursSlept', function() {
    expect(sleep.avgHoursSlept()).to.equal(8);
  });

  it('should return average sleep quality with avgSleepQuality', function() {
    expect(sleep.avgSleepQuality()).to.equal(3);
  });

  it('should return hours slept based on day', function() {
    expect(sleep.hoursSlept('11/05/2019')).to.equal(5.6)
    expect(sleep.hoursSlept('18/05/2019')).to.equal(10.9)
  });

  it('should return sleep quality based on day', function() {
    expect(sleep.sleepQuality('25/05/2019')).to.equal(4.2)
    expect(sleep.sleepQuality('12/05/2019')).to.equal(1.7)
  });

  it('should return week of sleep quality based on day', function() {
    expect(sleep.weekQuality('12/05/2019')[6]).to.equal('Date: 18/05/2019, Sleep Quality: 2.5')
  });

  it('should return week of hours slept based on day', function() {
    expect(sleep.weekSleep('12/05/2019')[5]).to.equal('Date: 17/05/2019, Hours Slept: 10.1')
  });
});