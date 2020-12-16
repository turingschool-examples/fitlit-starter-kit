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
    expect(activity.minutes).to.equal(data.minutesActive);
    expect(activity.flightsOfStairs).to.equal(data.flightsOfStairs);
  });

  it('should return minutes active', () => {
    const minutes = activity.returnMinutes();

    expect(minutes).to.equal(data.minutesActive);
  });

  it('should return whether step goal was reached', () => {    
    const user1 = userRepo.data.find(user => user.id === activity.id);
    const goal1 = user1.dailyStepGoal;
    const didHitGoal1 = activity.checkStepGoal(goal1);

    expect(activity.steps).to.be.at.most(goal1);
    expect(didHitGoal1).to.equal(false);    

    const newData = data = {
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 11002,
      "minutesActive": 124,
      "flightsOfStairs": 6
    };
    const newActivity = new Activity(newData);
    const user2 = userRepo.data.find(user => user.id === newActivity.id);
    const goal2 = user2.dailyStepGoal;
    const didHitGoal2 = newActivity.checkStepGoal(goal2);

    expect(newActivity.steps).to.be.at.least(goal2);
    expect(didHitGoal2).to.equal(true);
  });
});