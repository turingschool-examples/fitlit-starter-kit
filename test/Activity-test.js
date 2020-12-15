const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const UserRepo = require('../src/UserRepo');

describe('Activity', () => {
  let data, activity, dataset, userRepo;

  beforeEach(() => {
    data = {
      "userID": 4,
      "date": "2019/06/15",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    };

    activity = new Activity(data);

    dataset = [
      {
        "id": 1,
        "name": "Brian Forbes",
        "address": "123 Blah St, Denver CO, 66666",
        "email": "stuffandthings@gmail.com",
        "strideLength": 2.4,
        "dailyStepGoal": 10000,
        "friends": [
          2,
          3,
          4
        ]
      },
      {
        "id": 2,
        "name": "Eric Campbell",
        "address": "123 SomeOther St, Denver CO, 66666",
        "email": "mainlyetcetera@gmail.com",
        "strideLength": 2.3,
        "dailyStepGoal": 5,
        "friends": [
          1,
          3
        ]
      },
      {
        "id": 3,
        "name": "David Whitaker",
        "address": "124 Random Lane, Denver CO, 66666",
        "email": "damwhitmaybeidontknow@gmail.com",
        "strideLength": 2.6,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          4
        ]
      },
      {
        "id": 4,
        "name": "Travis Rollins",
        "address": "234 Very Random Street, Denver CO, 66666",
        "email": "laskdjfaslkdj@gmail.com",
        "strideLength": 2.1,
        "dailyStepGoal": 10000,
        "friends": [
          1,
          3
        ]
      }
    ]

    userRepo = new UserRepo(dataset);
  });

  it('should have an appropriate constructor', () => {
    expect(activity.id).to.equal(data.userID);
    expect(activity.date).to.equal(data.date);
    expect(activity.steps).to.equal(data.numSteps);
    expect(activity.minActive).to.equal(data.minutesActive);
    expect(activity.flightsOfStairs).to.equal(data.flightsOfStairs);
  });

  it.skip('should return minutes active', () => {
    const minutes = activity.returnMinutes();

    expect(minutes).to.equal(data.minutesActive);
  });

  it.skip('should return whether step goal was reached', () => {    
    const user = userRepo.data.find(user => user.id === activity.id);
    const goal = user.dailyStepGoal;
    const didHitGoal = activity.checkStepGoal();

    expect(activity.steps).to.be.at.least(user.datilyStepGoal);
    expect(didHitGoal).to.equal(true);    
  });
});