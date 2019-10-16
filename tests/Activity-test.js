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
    user1 = new User({
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
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 2000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    userRepository = new UserRepository();
    userRepository.users.push(user1, user2);
    activity1 = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3684,
      "minutesActive": 140,
      "flightsOfStairs": 16
    }, userRepository);
    activity2 = new Activity({
      "userID": 2,
      "date": "2019/06/20",
      "numSteps": 2856,
      "minutesActive": 280,
      "flightsOfStairs": 22
    }, userRepository);
  });
  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });
  it('should be an instance of activity', function() {
    expect(activity1).to.be.an.instanceof(Activity);
  });
  it('should hold a userId', function() {
    expect(activity2.userId).to.equal(2);
  });
  it('should hold a date', function() {
    expect(activity1.date).to.equal("2019/06/15");
  });
  it('should hold number of steps', function() {
    expect(activity1.steps).to.equal(3684);
  });
  it('should hold minutes active', function() {
    expect(activity2.minutesActive).to.equal(280);
  });
  it('should hold flights of stairs', function() {
    expect(activity2.flightsOfStairs).to.equal(22);
  });
  it('should have a default value of 0 for miles walked', function() {
    expect(activity2.milesWalked).to.equal(0);
  });
  it('should have a default value of null for reached step goal', function() {
    expect(activity2.reachedStepGoal).to.equal(null);
  });
  it('doActivity should add activities to user record', function() {
    expect(user1.activityRecord.length).to.equal(1);
  });
  it('should have a method that calculate miles walked', function() {
    expect(activity1.calculateMiles(userRepository)).to.equal('3.0');
  });
  describe('compareStepGoal', function() {
    it('should return false if goal isn\'t met', function() {
      activity1.compareStepGoal(userRepository);
      expect(activity1.reachedStepGoal).to.equal(false);
    });
    it('should return true if goal is met', function() {
      activity2.compareStepGoal(userRepository);
      expect(activity2.reachedStepGoal).to.equal(true);
    });
  });
});
