const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity-Repository');
const activityTestData = require('../test-data/activity-test-data');

describe('Activity', () => {
  let activity;
  beforeEach(() => {
    activity = new Activity(activityTestData);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should calculate stairs climbed for all users', function () {
    expect(activity.returnStairsClimbedAllUsersByDate('2019/06/15')).to.equal(59);
  });



});