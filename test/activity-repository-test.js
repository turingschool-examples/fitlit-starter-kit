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
    expect(activity).to.be.a('function');
  });



});