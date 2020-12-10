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
    expect(activityData[0].numSteps).to.equal(3577);
    expect(activityData[10].numSteps).to.equal(7864);
  })

  it('should have minutes active', () => {
    expect(activityData[0].minutesActive).to.equal(140);
    expect(activityData[10].minutesActive).to.equal(151);
  })

  it('should have flights of stairs', () => {
    expect(activityData[0].flightsOfStairs).to.equal(16);
    expect(activityData[10].flightsOfStairs).to.equal(28);
  })

})
