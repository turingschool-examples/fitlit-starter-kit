const chai = require('chai');
const expect = chai.expect;
const activityTestDataFile = require('../data/activity-test-data');
const activityTestDataArray = activityTestDataFile.testActivity;
const Activity = require('../src/Activity');

describe('Activity', () => {
  let activityData;

  beforeEach(() => {
    activityData = activityTestDataArray.map(activityObject => {
      const activity = new Activity(activityObject);
      return activity;
    });
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  })

  it('should be an instance of Activity', () => {
    expect(activityData[0]).to.be.an.instanceof(Activity);
  })

  it('should have an id', () => {
    expect(activityData[0].userID).to.equal(1);
    expect(activityData[10].userID).to.equal(2);
  })

  it('should have a date', () => {
    expect(activityData[0].date).to.equal("2019/06/15");
    expect(activityData[10].date).to.equal("2019/06/17");
  })

  it('should have number of steps', () => {
    expect(sleepData[0].numSteps).to.equal(4.4);
    expect(sleepData[10].numSteps).to.equal(4.3);
  })

  it('should have minutes active', () => {
    expect(sleepData[0].sleepQuality).to.equal(4.4);
    expect(sleepData[10].sleepQuality).to.equal(4.3);
  })

})
