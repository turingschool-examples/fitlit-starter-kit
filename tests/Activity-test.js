const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', function() {
  let activity;

  beforeEach(function() {
    activity = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
  });
