const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User.js');
const UserRepository = require('../src/UserRepository');
const Hydration = require('../src/Hydration.js');
const HydrationRepository = require('../src/HydrationRepository')


describe('Hydration', function () {
  let hydrationDataSample;
  beforeEach(function() {
    hydrationDataSample = {
          "userID": 1,
          "hydrationData": [
            {
              "date": "06/05/2019",
              "numOunces": 64
            },
            {
              "date": "07/05/2019",
              "numOunces": 80
            },
            {
              "date": "08/05/2019",
              "numOunces": 39
            },
            {
              "date": "09/05/2019",
              "numOunces": 40
            },
            {
              "date": "10/05/2019",
              "numOunces": 65
            },
            {
              "date": "11/05/2019",
              "numOunces": 84
            },
            {
              "date": "12/05/2019",
              "numOunces": 33
            }
          ]}
  });
  it('should be an instance of Hydration', function() {
    const hydration = new Hydration();
    expect(hydration).to.be.an.instanceOf(Hydration);
  });
  it('should store ID passed through', function () {
    const hydration = new Hydration(2);
    expect(hydration.id).to.equal(2);
  });
  it('should calculate that users average water consumption for all time', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    const hydration = new Hydration(1)
    
    hydrationRepository.getHydrationDataFromId(hydrationDataSample)
    
    expect(hydration.getAverageFluidIntake(hydrationDataSample)).to.equal(57.857142857142854)
  });
  it('should return fluid intake from specified date', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    const hydration = new Hydration(1)

    hydrationRepository.getHydrationDataFromId(hydrationDataSample)

    expect(hydration.getFluidIntakeByDate(hydrationDataSample, '09/05/2019')).to.equal(40);
  });
  it('should return the amount of fluid intake for each day in a given week', function() {
    const hydrationRepository = new HydrationRepository('../data/sample-Hydration-data');
    const hydration = new Hydration(1)

    hydrationRepository.getHydrationDataFromId(hydrationDataSample)   

    expect(hydration.getDailyFluidIntakeByWeek(hydrationDataSample, '06/05/2019')).to.eql([64, 80, 39, 40, 65, 84, 33])
  })
})

