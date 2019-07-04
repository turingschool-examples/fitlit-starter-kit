const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/practice-activity');
const Activity = require('../src/Activity');

describe('Activity', function() {

  let activity;
  beforeEach(() => {
    activity = new Activity(activityData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });
    
  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  // it('should return a list of current user sleep data', function() {
  //   expect(sleep.consumerInfo(3)).to.eql([sleepData[0], sleepData[1],sleepData[2],sleepData[3],sleepData[4],sleepData[5],sleepData[6],sleepData[7],sleepData[8]]); 
});