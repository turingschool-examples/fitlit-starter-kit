const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/activityRepository.js')
const data = require('../data/activity.js')

describe('ActivityRepository', function() {
  it('Should be a function', function() {
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4)
    expect(activityRepository.currentUser.length).to.equal(100)
  })
})