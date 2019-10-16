const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const UserRepo = require('../src/User-repo');
const User = require('../src/User');

describe('Activty', function(){
  let activityData;
  let activity;
  let user1;
  let user2;
  let user3;
  let user4;
  let user5;
  let users;
  let userRepo;

  beforeEach(function() {
    activityData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numSteps": 3577,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 2,
        "date": "2019/06/14",
        "numSteps": 4294,
        "minutesActive": 138,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/13",
        "numSteps": 7402,
        "minutesActive": 116,
        "flightsOfStairs": 33
      },
      {
        "userID": 4,
        "date": "2019/06/12",
        "numSteps": 3486,
        "minutesActive": 114,
        "flightsOfStairs": 32
      },
      {
        "userID": 1,
        "date": "2019/06/14",
        "numSteps": 11374,
        "minutesActive": 213,
        "flightsOfStairs": 13
      },
      {
        "userID": 2,
        "date": "2019/06/13",
        "numSteps": 14810,
        "minutesActive": 287,
        "flightsOfStairs": 18
      },
      {
        "userID": 3,
        "date": "2019/06/12",
        "numSteps": 2634,
        "minutesActive": 107,
        "flightsOfStairs": 5
      },
      {
        "userID": 4,
        "date": "2019/06/11",
        "numSteps": 10333,
        "minutesActive": 114,
        "flightsOfStairs": 31
      },
      {
        "userID": 1,
        "date": "2019/06/02",
        "numSteps": 6389,
        "minutesActive": 41,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/03",
        "numSteps": 8015,
        "minutesActive": 106,
        "flightsOfStairs": 37
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "numSteps": 11652,
        "minutesActive": 20,
        "flightsOfStairs": 24
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "numSteps": 9256,
        "minutesActive": 108,
        "flightsOfStairs": 2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numSteps": 3578,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numSteps": 3579,
        "minutesActive": 140,
        "flightsOfStairs": 16
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 3580,
        "minutesActive": 140,
        "flightsOfStairs": 16
      }];

      activity = new Activity(activityData);
      user1 = new User({id: 1,
        name: "Alex Roth",
        address: "1234 Turing Street, Denver CO 80301-1697",
        email: "alex.roth1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [2, 3, 4]
      });
      user2 = new User({id: 2,
        name: "Allie McCarthy",
        address: "1235 Turing Street, Denver CO 80301-1697",
        email: "allie.mcc1@hotmail.com",
        strideLength: 3.3,
        dailyStepGoal: 9000,
        friends: [1, 3, 4]
      });
      user3 = new User({
        id: 3,
        name: "The Rock",
        address: "1236 Awesome Street, Denver CO 80301-1697",
        email: "therock@hotmail.com",
        strideLength: 10,
        dailyStepGoal: 60000,
        friends: [1, 2, 4]
      });

      user4 = new User({
        id: 4,
        name: "Rainbow Dash",
        address: "1237 Equestria Street, Denver CO 80301-1697",
        email: "rainbowD1@hotmail.com",
        strideLength: 3.8,
        dailyStepGoal: 7000,
        friends: [1, 2]
      });


      users = [user1, user2, user3, user4];
      userRepo = new UserRepo(users);

  });

  it('should get a users friend lists activity', function() {
    expect(activity.getFriendsActivity(user4, userRepo)).to.eql([{
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/14",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13
    },
    {
      "userID": 1,
      "date": "2019/06/02",
      "numSteps": 6389,
      "minutesActive": 41,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 3578,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numSteps": 3579,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numSteps": 3580,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 2,
      "date": "2019/06/14",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 2,
      "date": "2019/06/13",
      "numSteps": 14810,
      "minutesActive": 287,
      "flightsOfStairs": 18
    },
    {
      "userID": 2,
      "date": "2019/06/03",
      "numSteps": 8015,
      "minutesActive": 106,
      "flightsOfStairs": 37
    }]);
  });
  it('should get a users ranked friendslist activity for a chosen week', function() {
    expect(activity.getFriendsAverageStepsForWeek(user4, "2019/06/15", userRepo)).to.eql([{
      '2': 9552
    },
    {
      '1': 7475.5
    }]);
  });
  it('should get a users ranked friendslist activity for a chosen week with names', function() {
    expect(activity.showChallengeListAndWinner(user4, "2019/06/15", userRepo)).to.eql([
      'Allie McCarthy: 9552', 'Alex Roth: 7475.5'])

  });
  it('should show a 3-day increasing streak for a users step count', function() {
    expect(activity.getStepStreak(userRepo, 1)).to.eql(['2019/06/17', '2019/06/18'])
  });
});
