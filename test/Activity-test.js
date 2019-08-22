const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const mockActivityData = require('../mock-data/mock-activity');

let activity;

describe('Activity', () => {

  beforeEach( () => {
    activity = new Activity(mockActivityData, 2); 
    activity.findCurrentUserData();
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should have a parameter to take in all of the activity data', () => {
    expect(activity.allActivityData).to.eql(mockActivityData)
  });

  it('should have a parameter to take in an id for the current user', () => {
    expect(activity.currentUserId).to.eql(2);
  });

  describe('findCurrentUserData', () => {
    it('should return a list of the current user/s activity information', () => {
      expect(activity.currentUserData).to.eql([{
        "userID": 2,
        "date": "2019/06/15",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numSteps": 4112,
        "minutesActive": 220,
        "flightsOfStairs": 37
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numSteps": 13750,
        "minutesActive": 65,
        "flightsOfStairs": 4
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numSteps": 9858,
        "minutesActive": 243,
        "flightsOfStairs": 44
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numSteps": 8153,
        "minutesActive": 74,
        "flightsOfStairs": 10
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numSteps": 10225,
        "minutesActive": 174,
        "flightsOfStairs": 26
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numSteps": 3605,
        "minutesActive": 124,
        "flightsOfStairs": 31
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numSteps": 4148,
        "minutesActive": 142,
        "flightsOfStairs": 0
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "numSteps": 8568,
        "minutesActive": 81,
        "flightsOfStairs": 31
      }
      ])
    });
  });

  describe('findMilesWalkedForSpecificDayOfUser', () => {
    it('should return the miles walked for a specific day', () => {
      expect(activity.findMilesWalkedForSpecificDayOfUser()).to.equal()
    })
  })


});