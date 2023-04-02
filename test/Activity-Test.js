import { expect } from 'chai';
import Activity from '../src/Activity'
import mock from '../src/data/mock';
import User from '../src/User';



describe('Activity', function () {
  let activity1, user;

  beforeEach(function () {
    activity1 = new Activity(mock.activityData)
    user = new User(mock.users[0])
  })

  it('should be a function', function () {
    expect(Activity).to.be.a('function')
  });
  it('should be an instance of Activity', function () {
    expect(activity1).to.be.an.instanceOf(Activity)
  });
  it('should be able to calculate miles walked on a certain day', function () {
    expect(activity1.milesWalkedByDay(user, '2023/03/25')).to.equal('10.81')
  });
  it('should have a method to find minutes active by day', function () {
    expect(activity1.minutesActiveByDay(user, '2023/03/25')).to.equal(111)
  });
  it('should have a method to determine if user reached their daily step goal', function () {
    expect(activity1.reachStepGoal(user, '2023/03/25')).to.equal('Congrats! You did it!')
  });
  it('should return a users step count for the day', function () {
    expect(activity1.todaysStepCount(user, '2023/03/25')).to.equal(14264)
  });
  it('should return the users weekly step count for the last 7 days', function () {
    expect(activity1.weeklyStepCount(user, '2023/03/22')).to.deep.equal([])
  })
})
