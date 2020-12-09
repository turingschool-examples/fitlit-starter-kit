const chai = require('chai');
const expect = chai.expect;
const hydrationTestDataFile = require('../data/hydration-test-data');
const hydrationTestDataArray = hydrationTestDataFile.testHydration;
const Hydration = require('../src/Hydration');
const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  let hydrationData, hydrationRepository;

  beforeEach(() => {
    hydrationData = hydrationTestDataArray.map(hydrationObject => {
      const hydration = new Hydration(hydrationObject);
      return hydration;
    });
    hydrationRepository = new HydrationRepository(hydrationData);
  })

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  })

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  })

  it('should hold all Hydration objects', () => {
    expect(hydrationRepository.hydrationInstanceData[0]).to.deep.equal(hydrationData[0]);
  })

  it('should return a users hydration data given their user ID', () => {
    function returnHydrationTestData(id) {
      return hydrationTestDataArray.filter(hydration => hydration.userID === id);
    }
    expect(hydrationRepository.returnHydrationData(1)).to.deep.equal(returnHydrationTestData(1));
    expect(hydrationRepository.returnHydrationData(2)).to.deep.equal(returnHydrationTestData(2));
  })

  it('should return a users average fluid ounces consumed per day for all time', () => {
    expect(hydrationRepository.calculateAverageDailyOuncesAllTime(1)).to.deep.equal(67);
    expect(hydrationRepository.calculateAverageDailyOuncesAllTime(2)).to.deep.equal(49);
  })

  // For a user, how many fluid ounces they consumed for a specific day (identified by a date)


  // For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day



})
