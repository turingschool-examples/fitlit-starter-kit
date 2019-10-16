const chai = require('chai');
const expect = chai.expect;

const Activity = require('../class/activity');
const User = require('../class/user');


describe('Activity', function() {
  let activityData = {};

  beforeEach( () => {
    activityData = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    })
  });

// for a date get miles walked by a user
// baised on their strideLength
// userdata[0].strideLength

// steps * strideLength / 5280

  it('should For a specific day (specified by a date), return the miles a user has walked based on their number of steps (use their strideLength to help calculate this)', function () {
    activityData.milesWalked();
    expect(activityData.milesWalked()).to.deep.equal(2)
  });



});
