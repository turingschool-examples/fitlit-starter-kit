const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-test-data');

const Activity = require('../src/Activity');

describe('Activity', () => {
  
  beforeEach(() => {
    let activity = new Activity(activityData)
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function');

  })


});