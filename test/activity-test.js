import { expect } from 'chai';
import Activity from '../src/data/Activity';
import activityTestData from './activity-test-data';

describe('Activity', function() {
  let activity
  beforeEach(() => {
    activity = new Activity(activityTestData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  // it('should be able to take in a user ID', function() {
  //   expect(activity.userID).to.equal(activityTestData[0].userID);
  // });

  // it('should be able to take in a date', function() {
  //   expect(user1.date).to.equal('2023/03/24');
  // });

  // it('should be able to take in number of steps', function() {
  //   expect(user1.numSteps).to.equal(7362);
  // });

  // it('should be able to take in minutes active', function() {
  //   expect(user1.minutesActive).to.equal(261);
  //   expect(user2.minutesActive).to.equal(125);
  // });

  // it('should be able to take in a users flights of stairs traversed', function() {
  //   expect(user1.flightsOfStairs).to.equal(26)
  });
// });
