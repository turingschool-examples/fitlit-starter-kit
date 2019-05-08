const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

if (typeof module !== 'undefined') {
  var User = require('../src/User');
  var UserRepo = require('../src/UserRepo')
  var Hydration = require('../src/Hydration')
  var userData = require('../data/users-test-data')
  var hydrationData = require('../data/hydration-test-data')
}

describe('Hydration Test', function () {
  let user;
  let userRepo;
  let hydration;
  beforeEach(function () {
    userRepo = new UserRepo(userData)
    user = new User(userData, 1)
    hydration = new Hydration(userRepo.returnUserData(1))
  })

  it('should be a function', function () {
    expect(Hydration).to.be.a('function')
  })

  it('should have be an instance of Hydration', function () {
    expect(hydration).to.be.a.instanceOf(Hydration)
  })

  it('should take in user and hydration data', function () {
    expect(hydration.userObj).to.equal(userRepo.returnUserData(1))
  })

  it('should return a users hydration data', function () {
    expect(hydration.findHydrationData(hydrationData)).to.equal(hydrationData[0])
  })

  it('should find the average ounces per day', function () {
    hydration.findHydrationData(hydrationData)
    expect(hydration.averageOuncesPerDay(hydrationData)).to.be.a('number')
    expect(hydration.averageOuncesPerDay(hydrationData)).to.equal(55)
  })

  it('should find the amount of ounces xonsumed for a specific day', function () {
    hydration.findHydrationData(hydrationData)
  })
})