const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');
const activityTestData = require('../data/test-data/activity-test-data');

var activityRepository;
beforeEach(() => {
  activityRepository = new ActivityRepository(activityTestData);
});

describe('ActivityRepository', function() {

  it.only('should be a function', function() {
    expect(ActivityRepository).to.be.a('function')
  });

  it.only('find users based on date', function() {
    expect(activityRepository.getUsers("2019/06/18")).to.eql(
      [  {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "numSteps": 2546,
        "minutesActive": 274,
        "flightsOfStairs": 26
      }]
    )
  });

    it.only('should calculate average number of stairs for a specific date', function() {
      expect(activityRepository.findStairAverage("2019/06/18")).to.equal(30)
    })







}); //<<----end of describe block
