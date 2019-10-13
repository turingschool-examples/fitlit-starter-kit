const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/activity.js');
const activityData = require('../test/activitySample.js');
const User = require('../src/user.js');
const userData = require('../test/sampleUsers.js');

let user = new User(userData[1]);
let activity;

describe('Activity', function(){
  beforeEach(() => {
    activity = new Activity(user);
  });
  it('should be an instance of activity', function() {
    expect(activity).to.be.an.instanceOf(Activity);
  });
  it('should return miles a user walked', function() {
    expect(activity.returnUserMiles(activityData, "2019/06/16")).to.equal(2.24);
  });
  it('should return user\'s minutes active', function() {
    expect(activity.returnMinutesActive(activityData, "2019/06/15")).to.equal(138);
  });
  it('should return a weekly average of minutes active for 1 user', function() {
    expect(activity.returnWeekAvg(activityData, '2019/06/15')).to.equal(125);
  });
  it('should return true when user has reached their step goal for a day', function() {
    expect(activity.matchGoal('2019/06/15', activityData)).to.equal(false);
  });
  it('should return all days where step goal was achieved', function() {
    expect(activity.checkBestDays(activityData)).to.deep.equal([ '2019/06/17', '2019/06/18', '2019/06/19' ]);
  });
  it('should return user\'s stair climbing record', function() {
    expect(activity.checkRecord(activityData)).to.equal('2019/06/18')
  });

  describe('Activity user avgs', function() {

  
    it('should check avg minutes active', function() {
      expect(activity.checkUserAvgs('2019/06/15', 'minutesActive', activityData)).to.equal(144.2);
    });
    it('should check avg stairs', function() {
      expect(activity.checkUserAvgs('2019/06/15', 'flightsOfStairs', activityData)).to.equal(20.8);
    })
    it('should check avg steps', function() {
      expect(activity.checkUserAvgs('2019/06/15', 'numSteps', activityData)).to.equal(6026.6);
    })
  });
});