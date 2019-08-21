const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const mockHydrationData = require('../mock-data/mock-hydration');

let hydration;

describe('Hydration', () => {

  beforeEach( () => {
    hydration = new Hydration(mockHydrationData, 1); 
    hydration.findCurrentUserData();
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have a parameter to take in all of the hydration data', () => {
    expect(hydration.allHydrationData).to.eql(mockHydrationData)
  })

  it('should have a parameter to take in an id for the current user', () => {
    expect(hydration.currentUserId).to.eql(1);
  })

  describe('findCurrentUserHydrationData', () => {
    it('should return a list of the current user/s hydration information', () => {
      expect(hydration.currentUserData).to.eql([{
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 37
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 69
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 61
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 91
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 50
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 50
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 43
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 39
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 61
      }
      ])
    });
  });

  describe('findAverageFluidOzConsumedPerDayForAllTime', () => {
    it('should find the average fluid oz consumed per day for all time rounding to the nearest whole number', () => {
      expect(hydration.findAverageFluidOzConsumedPerDayForAllTime()).to.equal(60);
    });
  });
    
  describe('findAverageFluidOzConsumedforSpecificDay', () => {
    it('should find the fluid oz consumed for a specific day', () => {
      expect(hydration.findAverageFluidOzConsumedforSpecificDay("2019/06/15")).to.equal(37);
      expect(hydration.findAverageFluidOzConsumedforSpecificDay("2019/06/16")).to.equal(69);
      expect(hydration.findAverageFluidOzConsumedforSpecificDay("2019/06/24")).to.not.equal(62);
      expect(hydration.findAverageFluidOzConsumedforSpecificDay("2019/06/24")).to.equal(61);
    });
  });

  describe('findFluidOzConsumedEveryDayOverSpecificWeek', () => {
    it('should find the fluid oz consumed for each day over the course of a specified week', () => {
      expect(hydration.findFluidOzConsumedEveryDayOverSpecificWeek("2019/06/15", "2019/06/21")).to.eql([
        {date: "2019/06/15", numOunces: 37}, 
        {date: "2019/06/16", numOunces: 69}, 
        {date: "2019/06/17", numOunces: 96},
        {date: "2019/06/18", numOunces: 61},
        {date: "2019/06/19", numOunces: 91},
        {date: "2019/06/20", numOunces: 50}, 
        {date: "2019/06/21", numOunces: 50}
        ]);
    });
  });



});


