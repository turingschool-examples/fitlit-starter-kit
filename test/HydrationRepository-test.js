const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/hydration-test-data');
const testHydrationData = testData.testHydrationData;
const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepository');

describe('HydrationRepo', () => {
  let allHydration, hydrationRepo;

  beforeEach(() => {
    allHydration = testHydrationData.map(hydrationData => {
      const hydration = new Hydration(hydrationData);
      return hydration;
    });
    hydrationRepo = new HydrationRepo(allHydration);
  })

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  })

  it('should be an instance of HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo);
  })

  it('should hold all Hydration objects', () => {
    expect(hydrationRepo.allHydration[0]).to.deep.equal(allHydration[0]);
  })

  it('should return a users hydration data given their user ID', () => {
    function testWaterById(id) {
      return testHydrationData.filter(hydration => hydration.userID === id);
    }
    expect(hydrationRepo.getHydrationById(1)).to.deep.equal(testWaterById(1));
    expect(hydrationRepo.getHydrationById(2)).to.deep.equal(testWaterById(2));
  })

  it('should return a users avg oz consumed per day for all time', () => {
    expect(hydrationRepo.getUserAvgDailyOzAllTime(1)).to.deep.equal(67);
    expect(hydrationRepo.getUserAvgDailyOzAllTime(2)).to.deep.equal(49);
  })

  it('should return a users oz consumed for a specific day', () => {
    expect(hydrationRepo.getUserOzByDate(1, "2019/06/18")).to.deep.equal(85);
    expect(hydrationRepo.getUserOzByDate(2, "2019/06/16")).to.deep.equal(22);
  })

  it('should return a users hydration data for a given week', () => {
    expect(hydrationRepo.getUserOzByWeek(1, "2019/06/21")).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 27
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 75
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 47
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 85
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 42
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 87
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 94
    }
    ]);
    expect(hydrationRepo.getUserOzByWeek(2, "2019/06/22")).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 22
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 67
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "numOunces": 62
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "numOunces": 78
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "numOunces": 1
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "numOunces": 90
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "numOunces": 28
    }
    ]);
  })
})
