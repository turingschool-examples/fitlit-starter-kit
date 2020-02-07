const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity')

describe('Activity', function() {

  let activity, activityData;

  beforeEach(() => {
    activityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    }
  ]
  activity = new Activity(activityData);
});

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of acitivty', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should calculate miles walked today', function() {
    expect(activity.calculateMilesToday(1, "2019/06/15", 4.3)).to.equal(2.91);
  });

  it('should calculate miles walked today', function() {
    expect(activity.getMinutesActive(1, "2019/06/16")).to.equal(138);
  });

  it('should show the minutes active in the past 7 days', function() {
    activityData = [
      {
        "userID": 1,
        "date": "2019/09/16",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/09/17",
        "numSteps": 2456,
        "minutesActive": 134,
        "flightsOfStairs": 23
      },
      {
        "userID": 1,
        "date": "2019/09/18",
        "numSteps": 5342,
        "minutesActive": 56,
        "flightsOfStairs": 45
      },
      {
        "userID": 1,
        "date": "2019/09/19",
        "numSteps": 4237,
        "minutesActive": 164,
        "flightsOfStairs": 38
      },
      {
        "userID": 1,
        "date": "2019/09/20",
        "numSteps": 6783,
        "minutesActive": 120,
        "flightsOfStairs": 78
      },
      {
        "userID": 1,
        "date": "2019/09/21",
        "numSteps": 3769,
        "minutesActive": 124,
        "flightsOfStairs": 26
      },
      {
        "userID": 1,
        "date": "2019/09/22",
        "numSteps": 2975,
        "minutesActive": 90,
        "flightsOfStairs": 33
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numSteps": 3455,
        "minutesActive": 50,
        "flightsOfStairs": 23
      }
    ];
    activity = new Activity(activityData);
  
    
    expect(activity.getPrevDaysActive(1, "2019/09/22")).to.deep.equal([140,134, 56, 164, 120, 124, 90]); 
  });

  it('should be able to calculate the average minutes active from the past 7 days', function() {
    expect(activity.calculateActiveAverage()).to.equal(118.28);
  });
});