const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

describe('Activity', function() {
  let activity;
  let user;
  let userRepository;
  beforeEach(() => {
    user = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    });
    userRepository = new UserRepository();
    userRepository.users.push(user);
    activity = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
  });

  //property tests

  it('should have a method that calculate miles walked', function() {
    expect(activity.calculateMiles(userRepository)).to.equal(3);
  });
});
