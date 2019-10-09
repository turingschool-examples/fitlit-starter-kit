const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../class/hydration');

describe('Hydration', function() {
  let hydrationData = {};

  beforeEach( () => {
    hydrationData = new Hydration({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });
  });

  it('should For a user ID the average fluid ounces consumed per day for all time', function() {
    expect(hydrationData.id).to.equal(1);
  })

});
