import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationTestData from '../src/data/hydration-test-data';


describe('Hydration', () => {
  let data;
  let hydration;
  beforeEach(() => {
    data = hydrationTestData
    hydration = new Hydration(data);
  });

  it.skip('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  
  it.skip('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it.skip('should store an array of hydration data', () => {
    expect(hydration.data).to.deep.equal(data)
  })
  
  it.skip('should have a user id, number of ounces, and date', () => {
    expect(hydration.userID).to.equal(1);
    expect(hydration.date).to.equal("2023/03/02")
    expect(hydration.numOunces).to.equal(28);
  });

  it.skip('should calculate the user\'s average fluid ounces consumed per day for all time', () => {
    expect(hydration.findAvgDailyHydration(1)).to.equal(475);
  });

  it.skip('should return undefined if user does not exist', () => {
    expect(hydration.findAvgDailyHydration(5)).to.equal(undefined);
  });

  it.skip('should return the a specfic days water consumption', () => {
    expect(hydration.getHydrationSpecificDay('2023/03/02')).to.equal(28);
  });

  it.skip('should return the undefined if nothing logged that specfic day', () => {
    expect(hydration.getHydrationSpecificDay('2023/03/03')).to.equal(undefined);
  });

  it.skip('should return the user\'s total amount of water for 7 consecutive days', () => {
    expect(hydration.findWeeklyHydration('2023/03/02')).to.deep.equal(
      [28, 35, 95, 74, 47, 86, 74]
    );
  });

  it.skip('should return the days that the user has logged is under 7 days', () => {
    const hydration = [
      {
      "userID": 1,
      "date": "2023/03/02",
      "numOunces": 28
    },
    {
      "userID": 1,
      "date": "2023/03/05",
      "numOunces": 35
    }
  ];
    expect(hydration.findWeeklyHydration('2023/03/02')).to.deep.equal([28, 35]);
  });
});

