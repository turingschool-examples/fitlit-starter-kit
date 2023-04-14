import { expect } from 'chai';
import Activity from '../src/Activity';
import activityTestData from '../src/data/activity-test-data.js';
import User from '../src/User.js';
import userTestData from '../src/data/user-test-data.js';

describe('Activity', () => {
  let user;
  let activity;

  beforeEach(() => {
    user = new User(userTestData.userTestData[0]);
    activity = new Activity(activityTestData.activityTestData.reverse(), 4);
    user.activity = activity;
  });

  it('should check all the properties to see if they hold the data we want', () => {
    let unsortedUser = new User(userTestData.userTestData[0]);
    let activity2 = new Activity(activityTestData.activityTestData);
    unsortedUser.activity = activity2;

    expect(unsortedUser.activity.data).to.deep.equal(activityTestData.activityTestData);
  });

  it('should hold the users stride', () => {
    expect(activity.userStride).to.equal(4);
  });
  
  it('should calculate minutes active for the lastest day', () => {
    expect(user.activity.getDailyActivityInfo("2023/03/20", 'minutesActive')).to.deep.equal(261);
  });

  it('should be able to check the amount of steps for the latest day', () => {
    expect(user.activity.getDailyActivityInfo("2023/03/20", 'numSteps')).to.deep.equal(7362);
  });

  it('should send an error if given a false arguement', () => {
    expect(user.activity.getDailyActivityInfo("2023/03/20", 'Banana')).to.deep.equal('Banana is not a valid argument!');
  });

  it('should calculate miles for a given day', () => {
    expect(user.activity.calculateMiles("2023/03/20")).to.equal(5.58);
  });

  it('should check how a each day in the last weeks steps compares to the goal', () => {
    expect(user.activity.getLatestWeek()).to.deep.equal([ 7255, 7765, 13297, 8443, 8934, 12970, 3049]);
  });
});