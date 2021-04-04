const chai = require('chai');
const expect = chai.expect;
const Avtivity = require('../src/Activity');

describe('Activity', () => {
  let activity;

  beforeEach(() => {
    activity = new Activity(activityTestData, 1);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should get all activity data for a user by ID', () => {
    expect(activity.buildUserActivityData()).to.deep.equal(activity.userActivity);
  });

  it('should be able to tell the user how many miles they have walked', () => {
    expect(activity.returnMilesWalked().to.equal(//total miles walked for user 1))
  });

  it('should able to tell a user how many minutes they were active on a given day', () => {
    expect(activity.returnActiveMinutes(selectedDate).to.equal(//active minutes for user 1 on 9/22))
  });

  it('should tell the user how many active minutes in a given week', () => {
    expect(activity.returnWeeklyAverageMinutes(startDate).to.equal(//active minues for selected week))
  })

  it('should tell the user if they met their step goal on a given date', () => {
    expect(activity.calculateStepGoalMet(selectedDate).to.equal(//true or false))
  })

  it('should tell the user all days that they exceeded their step goal', () => {
    expect(activity.findStepGoalExceeded().to.deep.equal(//array of days))
  })

  it('should tell the user their all time stair climbing record', () => {
    expect(activity.returnStairClimbingRecord().to.equal(//stair climbing record))
  })

  it('should be able to calculate the average activity data for all users on a given date', () => {
    expect(activity.returnAverageStairsClimbed(selectedDate).to.equal(//average stairs climbed for all users))
    expect(activity.returnAverageStepsTaken(selectedDate).to.equal(//average steps taken for all users))
    expect(activity.returnAverageActiveMinutes(selectedDate).to.equal(//average active minutes for all users))
  })
})
