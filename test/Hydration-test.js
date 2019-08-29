const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const mockHydrationData = require('../mock-data/mock-hydration');
const mockHydrationUser1 = require('../mock-data/mock-hydration-user1')[0];
const hydrationUser1ForAWeek = require('../mock-data/mock-hydration-user1')[1];


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
      expect(hydration.currentUserData).to.eql(mockHydrationUser1)
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
      expect(hydration.findFluidOzConsumedEveryDayOverSpecificWeek("2019/06/15", "2019/06/21")).to.eql(hydrationUser1ForAWeek);
    });

    describe('findTodaysDate', () => {
      it('should return the last date from the user/s data to represent today', () => {
        hydration.findTodaysDate();
        expect(hydration.today).to.equal("2019/06/24")
      });
    });
  });
});

