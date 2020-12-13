/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;
const CommunityActivity = require('../src/CommunityActivity');
const Activity = require('../src/Activity');
const User = require('../src/User');

describe('CommunityActivity', function() {
  let communityActivity, communityActivity2, communityActivity3, activity, activity2, user, user2;

  beforeEach(function() {
    communityActivity = new CommunityActivity([
      {"userID": 2,
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
        "userID": 21,
        "date": "2019/08/04",
        "numSteps": 13803,
        "minutesActive": 204,
        "flightsOfStairs": 10
      },
      {
        "userID": 21,
        "date": "2019/08/05",
        "numSteps": 13308,
        "minutesActive": 75,
        "flightsOfStairs": 32
      },
      {
        "userID": 21,
        "date": "2019/08/06",
        "numSteps": 14360,
        "minutesActive": 117,
        "flightsOfStairs": 34
      },
      {
        "userID": 21,
        "date": "2019/08/07",
        "numSteps": 7690,
        "minutesActive": 126,
        "flightsOfStairs": 33
      },
      {
        "userID": 21,
        "date": "2019/08/08",
        "numSteps": 10712,
        "minutesActive": 174,
        "flightsOfStairs": 49
      },
      {
        "userID": 21,
        "date": "2019/08/09",
        "numSteps": 6421,
        "minutesActive": 214,
        "flightsOfStairs": 45
      },
      {
        "userID": 21,
        "date": "2019/08/10",
        "numSteps": 9223,
        "minutesActive": 53,
        "flightsOfStairs": 36
      },
      {
        "userID": 21,
        "date": "2019/08/11",
        "numSteps": 13634,
        "minutesActive": 193,
        "flightsOfStairs": 43
      },
      {
        "userID": 21,
        "date": "2019/08/12",
        "numSteps": 8537,
        "minutesActive": 239,
        "flightsOfStairs": 29
      },
      {
        "userID": 50,
        "date": "2019/09/14",
        "numSteps": 6856,
        "minutesActive": 294,
        "flightsOfStairs": 12
      },
      {
        "userID": 50,
        "date": "2019/09/15",
        "numSteps": 12344,
        "minutesActive": 84,
        "flightsOfStairs": 24
      },
      {
        "userID": 50,
        "date": "2019/09/16",
        "numSteps": 2289,
        "minutesActive": 298,
        "flightsOfStairs": 48
      },
      {
        "userID": 50,
        "date": "2019/09/17",
        "numSteps": 2438,
        "minutesActive": 176,
        "flightsOfStairs": 48
      },
      {
        "userID": 50,
        "date": "2019/09/18",
        "numSteps": 11712,
        "minutesActive": 142,
        "flightsOfStairs": 10
      },
      {
        "userID": 50,
        "date": "2019/09/19",
        "numSteps": 6722,
        "minutesActive": 180,
        "flightsOfStairs": 36
      },
      {
        "userID": 50,
        "date": "2019/09/20",
        "numSteps": 12122,
        "minutesActive": 107,
        "flightsOfStairs": 11
      },
      {
        "userID": 50,
        "date": "2019/09/21",
        "numSteps": 3229,
        "minutesActive": 272,
        "flightsOfStairs": 31
      },
      {
        "userID": 50,
        "date": "2019/09/22",
        "numSteps": 2121,
        "minutesActive": 237,
        "flightsOfStairs": 14
      }
    ]);

    communityActivity2 = new CommunityActivity([
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

    communityActivity3 = new CommunityActivity([
      {
        "userID": 1,
        "date": "2019/09/02",
        "numSteps": 7167,
        "minutesActive": 292,
        "flightsOfStairs": 37
      },
      {
        "userID": 2,
        "date": "2019/09/02",
        "numSteps": 13456,
        "minutesActive": 165,
        "flightsOfStairs": 2
      },
      {
        "userID": 3,
        "date": "2019/09/02",
        "numSteps": 5465,
        "minutesActive": 202,
        "flightsOfStairs": 41
      },
      {
        "userID": 4,
        "date": "2019/09/02",
        "numSteps": 7723,
        "minutesActive": 296,
        "flightsOfStairs": 46
      },
      {
        "userID": 5,
        "date": "2019/09/02",
        "numSteps": 5535,
        "minutesActive": 141,
        "flightsOfStairs": 18
      }
    ]);
    
    activity = new Activity({
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    });

    activity2 = new Activity({
      "userID": 50,
      "date": "2019/09/22",
      "numSteps": 2121,
      "minutesActive": 237,
      "flightsOfStairs": 14
    });

    user = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    });

    user2 = new User({
      "id": 50,
      "name": "Jordon Lind",
      "address": "3866 Jay Loaf, New Felix OR 96784-0274",
      "email": "Dane76@hotmail.com",
      "strideLength": 4.4,
      "dailyStepGoal": 2000,
      "friends": [
        9,
        27,
        21,
        13
      ]
    });

  });

  it('should hold Activity objects for all users', function() {
    expect(communityActivity.activities.length).to.equal(27)
    expect(communityActivity.activities[0]).to.deep.equal(activity)
    expect(communityActivity.activities[26]).to.deep.equal(activity2)
  });

  it('should return an Activity for a specific day', function() {
    expect(communityActivity.findUserActivityByDate("2019/06/15", user)).to.deep.equal(activity)
    expect(communityActivity.findUserActivityByDate("2019/09/22", user2)).to.deep.equal(activity2)
  });

  it('should tell how many miles a user has walked based on steps for a given date', function() {
    expect(communityActivity.findUserStepMiles("2019/06/15", user)).to.equal(3.66)
    expect(communityActivity.findUserStepMiles("2019/06/16", user)).to.equal(3.5)
    expect(communityActivity.findUserStepMiles("2019/09/21", user2)).to.equal(2.69)
    expect(communityActivity.findUserStepMiles("2019/09/22", user2)).to.equal(1.77)
  });

  it('should tell if a user has met their step goal for a given date', function() {
    expect(communityActivity.hasUserMetStepGoal("2019/06/15", user)).to.equal(false)
    expect(communityActivity.hasUserMetStepGoal("2019/06/17", user)).to.equal(true)
    expect(communityActivity.hasUserMetStepGoal("2019/09/21", user2)).to.equal(true)
    expect(communityActivity.hasUserMetStepGoal("2019/09/22", user2)).to.equal(true)
  });

  it('should be able to tell how many minutes a user was active for a given date', function() {
    expect(communityActivity.findUserActivityMinutes("2019/06/15", user)).to.equal(138)
    expect(communityActivity.findUserActivityMinutes("2019/06/16", user)).to.equal(220)
    expect(communityActivity.findUserActivityMinutes("2019/09/21", user2)).to.equal(272)
    expect(communityActivity.findUserActivityMinutes("2019/09/22", user2)).to.equal(237)
  });

  it('should find all days a user has exceeded their step goal', function() {
    const activity3 = new Activity({
      "userID": 2,
      "date": "2019/06/17",
      "numSteps": 13750,
      "minutesActive": 65,
      "flightsOfStairs": 4
    })

    expect(communityActivity.daysExceedingStepGoal(user)[0]).to.deep.equal(activity3)
    expect(communityActivity.daysExceedingStepGoal(user2).length).to.equal(9)
    expect(communityActivity2.daysExceedingStepGoal(user)).to.deep.equal([])
  });

  it('should find the all-time stair climbing record for any user', function() {
    expect(communityActivity.findRecordStairs(user)).to.equal(44)
    expect(communityActivity.findRecordStairs(user2)).to.equal(48)
  });

  it('should return week of activities for any user', function() {
    const weekOfActivitiesAtIndex0 = new Activity({
      userID: 2,
      date: '2019/06/17',
      numSteps: 13750,
      minutesActive: 65,
      flightsOfStairs: 4
    });

    expect(communityActivity.findWeekActivities("2019/06/15", "2019/06/21", user).length).to.equal(7)
    expect(communityActivity.findWeekActivities("2019/06/17", "2019/06/23", user)[0]).to.deep.equal(weekOfActivitiesAtIndex0)
  })

  it('should be able to access any specific activity from a week of activities for any user', function() {
    expect(communityActivity.findWeekActivities("2019/06/15", "2019/06/21", user)[1].numSteps).to.equal(4112)
    expect(communityActivity.findWeekActivities("2019/06/17", "2019/06/23", user)[0].minutesActive).to.equal(65)
    expect(communityActivity.findWeekActivities("2019/06/17", "2019/06/23", user)[6].stairsClimbed).to.equal(0)
  })

  it('should return community average stairs climbed on a specific date', function() {
    expect(communityActivity2.findCommunityAverage("2019/06/15", 'stairsClimbed')).to.equal(21)
    expect(communityActivity3.findCommunityAverage("2019/09/02", 'stairsClimbed')).to.equal(29)
  });

  it('should return community average steps taken on a specific date', function() {
    expect(communityActivity2.findCommunityAverage("2019/06/15", 'numSteps')).to.equal(6027)
    expect(communityActivity3.findCommunityAverage("2019/09/02", 'numSteps')).to.equal(7869)
  });

  it('should return community average minutes active on a specific date', function() {
    expect(communityActivity2.findCommunityAverage("2019/06/15", 'minutesActive')).to.equal(144)
    expect(communityActivity3.findCommunityAverage("2019/09/02", 'minutesActive')).to.equal(219)
  });

});
