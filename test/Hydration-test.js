const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration')
const data = require('../data/hydration-test-data')

describe('Hydration Test', function () {

  let hydration;

  beforeEach(function () {
    hydration = new Hydration()
  })

  it('should be a function', function () {
    expect(Hydration).to.be.a('function')
  })

  it('should have be an instance of Hydration', function () {
    expect(hydration).to.be.a.instanceOf(Hydration)
  })

  it('should take in hydration data per user', function () {
    expect(hydration.data.userID).to.equal(1)
    expect(hydration.data.hydrationData).to.be.a('array')
    expect(hydration.data.hydrationData).to.have.length(100)
  })

  it('should return a users hydration data', function () {
    expect(hydration.data).to.equal(data[0])
  })

  it('should find the average ounces per day', function () {
    hydration.findHydrationData()
    expect(hydration.averageOuncesPerDay()).to.be.a('number')
    expect(hydration.averageOuncesPerDay()).to.equal(55)
  })

  it('should find the amount of ounces consumed for a specific day', function () {
    hydration.findHydrationData()
    expect(hydration.amountHydratedByDay('06/05/2019')).to.be.a('number')
    expect(hydration.amountHydratedByDay('06/05/2019')).to.equal(64)
  })

  it('should return the total consumed each day over a week', function () {
    hydration.findHydrationData()
    expect(hydration.waterForWeek('10/05/2019')).to.have.length(7);
  })


})