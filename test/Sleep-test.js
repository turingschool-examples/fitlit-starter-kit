const chai = require('chai');
const expect = chai.expect;
const sleepTestDataFile = require('../data/sleep-test-data');
const sleepTestDataArray = sleepTestDataFile.testSleep;
const Sleep = require('../src/Sleep');
describe('Sleep', () => {
  let sleepData;

  beforeEach(() => {
    sleepData = sleepTestDataArray.map(sleepObject => {
      const sleep = new Sleep(sleepObject);
      return sleep;
    });
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of Hydration', () => {
    expect(sleepData[0]).to.be.an.instanceof(Sleep);
  })

  it('should have an id', () => {
    expect(sleepData[0].userID).to.equal(1);
    expect(sleepData[10].userID).to.equal(2);
  })

  it('should have a date', () => {
    expect(sleepData[0].date).to.equal("2019/06/15");
    expect(sleepData[10].date).to.equal("2019/06/17");
  })

  it('should have hours slept', () => {
    expect(sleepData[0].hoursSlept).to.equal(8);
    expect(sleepData[10].hoursSlept).to.equal(4.7);
  })

  it('should have sleep quality', () => {
    expect(sleepData[0].sleepQuality).to.equal(4.4);
    expect(sleepData[10].sleepQuality).to.equal(4.3);
  })

  it('should return hours slept', () => {
    expect(sleepData[0].returnHoursSlept()).to.equal(8);
    expect(sleepData[10].returnHoursSlept()).to.equal(4.7);
  })

  it('should return sleep quality', () => {
    expect(sleepData[0].returnSleepQuality()).to.equal(4.4);
    expect(sleepData[10].returnSleepQuality()).to.equal(4.3);
  })

})
