import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationTestData from '../src/data/hydration-test-data';

describe('Hydration', () => {
  let data;
  let hydration;
  let sadHydration;
  beforeEach(() => {
    data = hydrationTestData.hydrationTestData.reverse();
    sadHydration = new Hydration([]);
    hydration = new Hydration(data);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  
  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should store an array of hydration data', () => {
    expect(hydration.data).to.deep.equal(data);
  });
  
  it('should have a user id, number of ounces, and date', () => {
    const userData = data[0];
    expect(userData.userID).to.equal(1);
    expect(userData.date).to.equal("2023/03/02");
    expect(userData.numOunces).to.equal(28);
  });

  it('should calculate the user\'s average fluid ounces consumed per day for all time', () => {
    expect(hydration.findAvgDailyHydration(1)).to.equal(59);
  });

  it('should return message if user does not exist', () => {
    expect(sadHydration.findAvgDailyHydration()).to.equal('No Hydration Data Found');
  });

  it('should return the a specfic days water consumption', () => {
    expect(hydration.getHydrationSpecificDay('2023/03/02')).to.equal(28);
  });

  it('should return message if nothing logged that specfic day', () => {    
    expect(sadHydration.getHydrationSpecificDay('2023/03/03')).to.equal('No Hydration Data Found');
  });

  it('should return the user\'s total amount of water for 7 consecutive days', () => {
    expect(hydration.findWeeklyHydration()).to.deep.equal([ 36, 74, 86, 47, 74, 95, 35 ]);
  });
});

