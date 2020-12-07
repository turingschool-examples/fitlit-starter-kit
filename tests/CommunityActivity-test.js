const chai = require('chai');
const expect = chai.expect;
const CommunityActivity = require('../src/CommunityActivity');
const Activity = require('../src/Activity');

describe('CommunityActivity', function() {
  let communityActivity, activity;

  beforeEach(function() {
    communityActivity = new CommunityActivity([
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
         "userID": 5,
        "date": "2019/06/15",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      }
    ]);
    activity = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
     });
  });

  it('should be a function', function() {
    expect(CommunityActivity).to.be.a('function');
  });

  it('should be an instance of a CommunityActivity', function() {
    expect(communityActivity).to.be.an.instanceof(CommunityActivity)
  });

  if('should hold Activity objects for all users', function() {
    expect(communityActivity.activities.length).to.equal(5)
    expect(communityActivity.activities[0]).to.deep.equal(activity)
  })

  it('should return community average stairs climbed on a specific date', function() {
    expect(communityActivity.findStairAverage("2019/06/15")).to.equal(21)
  });

  it('should return community average steps taken on a specific date', function() {
    expect(communityActivity.findStepsAverage("2019/06/15")).to.equal(21034)
  });

  it('should return community average minutes active on a specific date', function() {
    expect(communityActivity.findActiveMinuteAverage("2019/06/15")).to.equal(145)
  });

});
