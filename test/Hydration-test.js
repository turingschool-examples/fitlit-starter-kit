const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const userData = require('../test-data/users-fixtures');
const Hydration = require('../src/Hydration');
const hydrationData = require('../test-data/hydration-fixtures');

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration();
    expect(Hydration).to.be.a('function');
  });

   it('should store user information', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydrationData).to.be.a('array')
  });

  it('should calculate average daily hydration in ounces', function(){
    const hydration = new Hydration(hydrationData);
    expect(hydration.calculateAverageDailyHydration(1)).to.equal(53)
  })

});
