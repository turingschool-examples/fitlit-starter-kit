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

  it.skip('shoud be able to tell how many mile walked based on steps taken', () =>{
    const activity = new Activity(ActivityData);

  });

  it.skip('shoud be know how minutes a user was active, based on their id, on a specified', () =>{
    const activity = new Activity(ActivityData);

  });

  it.skip('shoud now how many minutes active was their average for a given week', () =>{
    const activity = new Activity(ActivityData);

  });

  it.skip('shoud be able know if a user met thier step goal for a specified day', () =>{
    const activity = new Activity(ActivityData);

  });

  it.skip('shoud find all the days the user exceeded thier step goal', () =>{
    const activity = new Activity(ActivityData);

  });

  it.skip('shoud fin the users all-time stair climbing record', () =>{
    const activity = new Activity(ActivityData);

  });

});  