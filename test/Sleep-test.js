const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepo');

describe('Hydration', () => {
  let sleepData, instanceData;

  beforeEach(() => {
    sleepData = {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.6,
        "sleepQuality": 2.5
      };
    instanceData = new Sleep(sleepData);

  });

  it.skip('should have an appropriate constructor', () => {
    expect(instanceData.id).to.equal(1);
    expect(instanceData.date).to.equal('2019/06/15');
    expect(instanceData.hoursSlept).to.equal(6.6);
    expect(instanceData.sleepQuality).to.equal(2.5);
  });

  it.skip('should have a way to return hours slept for specific date', () => {
    expect(instanceData.returnHoursSlept()).to.equal(6.6);
  });

  it.skip('should have a way to return sleep quality for specific date', () => {
    expect(instantData.returnSleepQuality()).to.equal(2.5);
  });

});
