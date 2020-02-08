const chai = require('chai');
const expect = chai.expect;

const data = require('./data/activity.js');
const activityData = data.activityData;
const Activity = require('../src/Activity.js');

describe('Activity', function() {
  let activity;
  beforeEach(function() {
    activity = new Activity(activityData);
  });

  it('Should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('Should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });
});
