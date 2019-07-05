const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/practice-activity');
const Activity = require('../src/Activity');
const userData = require('../data/users');

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

  it('should return miles a user has walked ', function() {
    expect(activity.milesWalkedInDay("2019/06/15", userData)).to.equal(6); 
});

});