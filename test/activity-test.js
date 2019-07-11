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

  it('should return the steps a user has walked on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userStepsWalkedPerDay(8, "2019/06/23")).to.equal(3337);
  })

  it('should return the flights of stairs a user has climbed on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userStairsClimbedPerDay(1, "2019/06/18")).to.equal(33);
  })

  it('should return the miles a user has walked on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userMilesWalkedPerDay(6, "2019/06/17", userData)).to.equal(6.63);
  })

  it('should return how many minutes a user was active on a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.userMinActivePerDay(3, "2019/06/19")).to.equal(188);
  })

  it('should return if the user met their daily step goal', function() {
    let activity = new Activity(activityData);
    expect(activity.userDailyStepGoalMet(9, "2019/06/15", userData)).to.equal(true);
  })

  it('should return all days a user exceeded their step goal', function() {
    let activity = new Activity(activityData);
    expect(activity.userStepGoalExceeded(2, userData)).to.deep.eql(["2019/06/17", "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/24"]);
  })

  it('should return day with the most flights of stairs climbed', function() {
    let activity = new Activity(activityData);
    expect(activity.userStairRecord(10)).to.equal(48);
  })

  it('should return the average stairs climbed for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgStairsAllUsers("2019/06/22")).to.equal(22);
  })

  it('should return the average steps for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgStepsAllUsers("2019/06/15")).to.equal(7231);
  })

  it('should return the average minutes active for all users for a given day', function() {
    let activity = new Activity(activityData);
    expect(activity.avgMinActiveAllUsers("2019/06/23")).to.equal(129.2);
  })

  it('should return remaining steps if step goal has not yet been met', function() {
    let activity = new Activity(activityData);
    expect(activity.hasUserMetStepGoal(1, "2019/06/24", userData)).to.equal("You have 2814 steps until you have met your step goal. You've got this!")
  })

  it('should return an object with date keys and numSteps values', function() {
    let activity = new Activity(activityData);
    expect(activity.userStepsPerWeek(4, "2019/06/24")).to.deep.eql({ '2019/06/18': 10056,
    '2019/06/19': 13451,
    '2019/06/20': 3314,
    '2019/06/21': 11807,
    '2019/06/22': 3595,
    '2019/06/23': 12134,
    '2019/06/24': 3704 })
  })

  it('should return an object with date keys and stair flight values', function() {
    let activity = new Activity(activityData);
    expect(activity.userStairsPerWeek(6, "2019/06/24")).to.deep.eql({ '2019/06/18': 10,
    '2019/06/19': 47,
    '2019/06/20': 24,
    '2019/06/21': 22,
    '2019/06/22': 24,
    '2019/06/23': 31,
    '2019/06/24': 20 })
  })

  it('should return an object with date keys and minutes active values', function() {
    let activity = new Activity(activityData);
    expect(activity.userMinutesActivePerWeek(9, "2019/06/24")).to.deep.eql({ '2019/06/18': 188,
    '2019/06/19': 187,
    '2019/06/20': 125,
    '2019/06/21': 281,
    '2019/06/22': 222,
    '2019/06/23': 136,
    '2019/06/24': 126 })
  })
});