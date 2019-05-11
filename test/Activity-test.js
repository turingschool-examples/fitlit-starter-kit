const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity')
const data = require('../data/activity-test-data')

describe('Activity Test', function () {

  let activity;

  beforeEach(function () {
    activity = new Activity()
  })

  it('should be a function', function () {
    expect(Activity).to.be.a('function')
  })

  it('should have be an instance of activity', function () {
    expect(activity).to.be.a.instanceOf(Activity)
  })

  it('should calculate how many miles walked today in miles, based on their stride length', function () {
    console.log(activity.milesWalkedToday('06/05/2019'))
    expect(activity.milesWalkedToday('06/05/2019'))

  })

})