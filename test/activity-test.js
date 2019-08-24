const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Activity = require('../src/Activity');
const userData = require('../data-subsets/users-subset')
const ActivityData = require('../data-subsets/activity-subset');

describe('Activity', () => {

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    const activity = new Activity(ActivityData);
    expect(activity).to.be.an.instanceof(Activity);
  });

});  