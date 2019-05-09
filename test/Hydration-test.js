const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo')
const Hydration = require('../src/Hydration')
const data = require('../data/hydration-test-data')

describe('Hydration Test', function () {
  let user;
  let userRepo;
  let hydration;
  beforeEach(function () {
    user = new User(1)
    userRepo = new UserRepo()
    hydration = new Hydration(0)
  })

  it('should be a function', function () {
    expect(Hydration).to.be.a('function')
  })

  it('should have be an instance of Hydration', function () {
    expect(hydration).to.be.a.instanceOf(Hydration)
  })

  it('should take in user and hydration data', function () {
    userRepo.returnUserData(1)
    expect(hydration.userID).to.equal(userRepo.returnUserData(1).id)
    expect()
  })

  it('should return a users hydration data', function () {
    expect(hydration.usersHydrationData).to.equal(data[0])
  })

  it('should find the average ounces per day', function () {
    hydration.findHydrationData()
    expect(hydration.averageOuncesPerDay()).to.be.a('number')
    expect(hydration.averageOuncesPerDay()).to.equal(55)
  })

  it('should find the amount of ounces xonsumed for a specific day', function () {
    hydration.findHydrationData()
    expect(hydration.amountHydratedByDay('06/05/2019')).to.be.a('number')
    expect(hydration.amountHydratedByDay('06/05/2019')).to.equal(64)
  })

  it('should return the total consumed each day over a week', function () {
    hydration.findHydrationData()
    // hydration.waterForWeek('06/05/2019')
    expect(hydration.waterForWeek('06/05/2019')).to.have.length(7);
  })


})