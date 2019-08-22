const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const mockActivityData = require('../mock-data/mock-hydration');

let activity;

describe('Activity', () => {

  beforeEach( () => {
    activity = new Activity(mockActivityData, 2); 
    activity.findCurrentUserData();
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should have a parameter to take in all of the activity data', () => {
    expect(activity.allActivityData).to.eql(mockActivityData)
  });

  it('should have a parameter to take in an id for the current user', () => {
    expect(activity.currentUserId).to.eql(2);
  });

});