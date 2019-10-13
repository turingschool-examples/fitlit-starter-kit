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
    // console.log(activityData)
  })
});