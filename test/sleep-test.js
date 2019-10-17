const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../class/sleep');
const sleepTestData = require('../data/test-data/sleep-test-data')


describe('Sleep', function() {

  it('should find sleep amount per day', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.findHoursSleptByDay('2019/06/15', 1)).to.equal(6.1);
  });

  it('should find average sleep quality', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.averageSleepQualityAllTime(1)).to.equal(0.2);
  });

  it('should find sleep quality for a date', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.findSleepQualityByDate('2019/06/15', 1)).to.equal(2.2);
  });

  it('should find amount of time slept over a week', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.calculateWeeklyHoursSlept('2019/06/15', 1)).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8]);
  });

  it('should find amount of sleep quality over a week', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.findSleepQualityWeekly('2019/06/17', 1)).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2]);
  });

  it('should find amount of sleep quality over all time', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.allUserSleepQuality()).to.equal(58);
  });

  it('should find amount of sleep quality over all time', function() {
  	const sleepTest = new Sleep(sleepTestData);
    expect(sleepTest.allUserSleepQuality()).to.equal(58);
  });


});