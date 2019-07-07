const chai = require('chai');
const expect = chai.expect;

const Activity = require("../src/activity");
const activityData = require("../data/sampleActivity");
const userData = require("../data/sampleUsers")

describe('Activity', function() {

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  })
    
  it('should be an instance of Hydration', function() {
    let activity = new Activity(activityData);
    expect(activity).to.be.an.instanceof(Activity);
  })

  it('should return the miles a user has walked on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userMilesWalkedPerDay(6, "2019/06/17", userData)).to.equal(6.63);
  })

  it('should return how many minutes a user was active on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userMinActivePerDay(3, "2019/06/19")).to.equal(188);
  })

  it('should return the average minutes a user was active in a given week', function() {
    let activity = new Activity(activityData);
    expect(activity.userAverageMinActivePerWeek(7, "2019/06/23")).to.equal(194.14);
  })

  it('should return if the user met their daily step goal', function() {
    let activity = new Activity(activityData);
    expect(activity.userDailyStepGoalMet(9, "2019/06/15", userData)).to.equal(true);
  })

  it('should return all days a user exceeded their step goal', function() {
    let activity = new Activity(activityData);
    expect(activity.userStepGoalExceeded(2)).to.deep.eql(["2019/06/17", "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/24"]);
  })

  it('should return day with the most flights of stairs climbed', function() {
    let activity = new Activity(activityData);
    // expect(activity.userStairRecord(10)).to.deep.eql({"2019/06/24": 45});
    expect(activity.userStairRecord(10)).to.equal(48);
  })

  it('should return the average stairs climbed for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgStairsAllUsers("2019/06/22")).to.equal(22.4);
  })

  it('should return the average steps for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgStepsAllUsers("2019/06/15")).to.equal(7231.4);
  })

  it('should return the average minutes active for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgMinActiveAllUsers("2019/06/23")).to.equal(129.2);
  })

});