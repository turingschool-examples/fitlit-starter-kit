const chai = require('chai');
const expect = chai.expect;
const CommunityActivity = require('../src/CommunityActivity');

describe('CommunityActivity', function() {
  let communityActivity;

  beforeEach(function() {
    communityActivity = new CommunityActivity([
      { "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16 },
    { "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10 },
    { "userID": 3,
      "date": "2019/06/15",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33 },
    { "userID": 4,
      "date": "2019/06/15",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32 },
    { "userID": 5,
      "date": "2019/06/15",
      "numSteps": 11374,
      "minutesActive": 213,
      "flightsOfStairs": 13 }
    ]);
  });

  it('should be a function', function() {
    expect(CommunityActivity).to.be.a('function');
  })

  it('should be an instance of a CommunityActivity', function() {
    expect(communityActivity).to.be.an.instanceof(CommunityActivity)
  })

});
