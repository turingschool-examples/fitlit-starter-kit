const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');


describe('Activity', function() {
let activity
  beforeEach(function() {
    activity = new Activity(2);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('userData should return the data of user by ID', function() {
    expect(activity.userData()).to.eql({
      "id": 2,
      "name": "Shayne Swift",
      "address": "747 Dickinson Gardens, South Helga AK 88484-2240",
      "email": "Lawson74@yahoo.com",
      "strideLength": 4.5,
      "dailyStepGoal": 11000
    });
  })

  it('userActivityData should return activity data of a user by ID', function() {
    const activity = new Activity(5);
    expect(activity.userActivityData()).to.eql([
      {
        "date": "06/05/2019",
        "numSteps": 3905,
        "minutesActive": 146,
        "flightsOfStairs": 42
      }
    ]);
  });

  it('stepsToMiles should convert a user’s number of steps to miles', function() {
    expect(activity.stepsToMiles("09/05/2019")).to.equal()
  });

});