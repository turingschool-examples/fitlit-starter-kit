const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activity.js')
const ActivityRepository = require('../src/activityRepository.js')
const data = require('../data/activity.js')

describe('Activity', function() {
  it('Should be a function', function() {
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    let activity = new Activity(activityRepository.currentUser)
    expect(activity.data.length).to.equal(100);
  })
})