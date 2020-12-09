const chai = require('chai');
const expect = chai.expect;
const sleepTestDataFile = require('../data/sleep-test-data');
const sleepTestDataArray = sleepTestDataFile.testSleep;
const Sleep = require('../src/Sleep');
const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  // let hydrationData, hydrationRepository;
  //
  // beforeEach(() => {
  //   hydrationData = hydrationTestDataArray.map(hydrationObject => {
  //     const hydration = new Hydration(hydrationObject);
  //     return hydration;
  //   });
  //   hydrationRepository = new HydrationRepository(hydrationData);
  // })

  it.skip('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  })

  it.skip('should be an instance of HydrationRepository', () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  })

  it.skip('should hold all Hydration objects', () => {
    expect(hydrationRepository.hydrationInstanceData[0]).to.deep.equal(hydrationData[0]);
  })

  it.skip('should return a users hydration data given their user ID', () => {
    function returnHydrationTestData(id) {
      return hydrationTestDataArray.filter(hydration => hydration.userID === id);
    }
    expect(hydrationRepository.returnHydrationData(1)).to.deep.equal(returnHydrationTestData(1));
    expect(hydrationRepository.returnHydrationData(2)).to.deep.equal(returnHydrationTestData(2));
  })

  it.skip('should return a users average oz consumed per day for all time', () => {
    expect(hydrationRepository.calculateAverageDailyOuncesAllTime(1)).to.deep.equal(67);
    expect(hydrationRepository.calculateAverageDailyOuncesAllTime(2)).to.deep.equal(49);
  })

  it.skip('should return a users oz consumed for a specific day', () => {
    expect(hydrationRepository.returnOuncesByDate(1, "2019/06/18")).to.deep.equal(85);
    expect(hydrationRepository.returnOuncesByDate(2, "2019/06/16")).to.deep.equal(22);
  })

  // For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
  it.skip('should return a users oz of water consumed each day over the course of a week', () => {
    expect(hydrationRepository.returnOuncesByWeek(1, "2019/06/15")).to.deep.equal({
      "2019/06/15": 27,
      "2019/06/16": 75,
      "2019/06/17": 47,
      "2019/06/18": 85,
      "2019/06/19": 42,
      "2019/06/20": 87,
      "2019/06/21": 94
    });
    expect(hydrationRepository.returnOuncesByWeek(2, "2019/06/16")).to.deep.equal({
      "2019/06/16": 22,
      "2019/06/17": 67,
      "2019/06/18": 62,
      "2019/06/19": 78,
      "2019/06/20": 1,
      "2019/06/21": 90,
      "2019/06/22": 28
    });
  })

})
