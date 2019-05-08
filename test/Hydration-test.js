const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const hydrationTestData = require('../data/hydration-test-data')

describe('Hydration', function() {

  let hydration
  beforeEach(function() {
    hydration = new Hydration(hydrationTestData)
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have be connected to test data file', function() {
    expect(hydrationTestData[0].userID).to.eql(1);
  });

  it('should tell how many ounces a user consumed per day on average', function() {
    expect(hydration.aveOuncesEveryDay(user)).to.eql(55.75);
  })

  it('should tell how many ounces consumed for a specific day', function() {
    expect(hydration.singleDayOunces(user, "07/05/2019")).to.eql(80)
  })

  it('should tell how many ounces consumed for a week', function() {
    expect(hydration.weekOunces(user, ))
  })

});
