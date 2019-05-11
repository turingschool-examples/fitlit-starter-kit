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

  it('should return the actuivity data based on the user ID', function () {
    expect(activity.findActivityData(1)).to.be.equal(data[0])
  })

  it('should calculate how many miles walked today in miles, based on their stride length', function () {
    expect(activity.milesWalkedToday('06/05/2019')).to.be.a('number')
    expect(activity.milesWalkedToday('06/05/2019')).to.be.equal(6.56)
  })

  it('should return how many minutes the user was active for a given day(specified by a date)', function () {
    expect(activity.activeMinutesPerDay('06/05/2019')).to.be.a('number')
    expect(activity.activeMinutesPerDay('06/05/2019')).to.equal(204)
  })

  it('should return how many minutes active did a user average for a given week', function () {
    expect(activity.activeMinutesPerWeek('06/05/2019')).to.equal(176.43)
  })

  it('should return true or false for if they reached their step goal for a given day(specified by a date)', function () {
    expect(user.user.dailyStepGoal).to.equal(8000)
    expect(activity.activeData.activityData[22].numSteps).to.equal(11328)
    expect(user.user.dailyStepGoal).to.be.lessThan(activity.activeData.activityData[22].numSteps)
    expect(activity.stepGoalReached('28/05/2019')).to.equal(true)
  })

  it('should find all the days where the user exceede their step goal', function () {
    expect(activity.daysExceededStepGoal()).to.be.a('array')
    expect(activity.daysExceededStepGoal()).to.not.include('06/05/2019')
  })

  it('should find their all time user record of flights of stairs', function () {
    expect(activity.allTimeStairRecord()).to.equal(50)
  })

  

})