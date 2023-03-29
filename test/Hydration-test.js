import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationTestData from '../src/data/hydration-test-data';


describe('Hydration', () => {
  let data;
  let hydration;
  beforeEach(() => {
    data = hydrationTestData.hydrationTestData
    hydration = new Hydration(data);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
  
  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should store an array of hydration data', () => {
    expect(hydration.data).to.deep.equal(data)
  })
  
  it('should have a user id, number of ounces, and date', () => {
    const userData = data[0];
    expect(userData.userID).to.equal(1);
    expect(userData.date).to.equal("2023/03/02")
    expect(userData.numOunces).to.equal(28);
  });

  it('should calculate the user\'s average fluid ounces consumed per day for all time', () => {
    expect(hydration.findAvgDailyHydration(1)).to.equal(59);
  });

  it('should return message if user does not exist', () => {
    expect(hydration.findAvgDailyHydration(5)).to.equal('No User Found');
  });

  it('should return the a specfic days water consumption', () => {
    expect(hydration.getHydrationSpecificDay('2023/03/02')).to.equal(28);
  });

  it('should return message if nothing logged that specfic day', () => {
    expect(hydration.getHydrationSpecificDay('2023/03/03')).to.equal('No hydration data on 2023/03/03');
  });

  it('should return the user\'s total amount of water for 7 consecutive days', () => {
    expect(hydration.findWeeklyHydration('2023/03/02')).to.deep.equal(
      [28, 35, 95, 74, 47, 86, 74]
    );
  });

  it('should still return the days that the user has logged even if under 7 days', () => {
    const hydrationData = [
      {"userID": 1,"date": "2023/03/02","numOunces": 28},   
      {"userID": 1,"date": "2023/03/05","numOunces": 35}
    ];
    const hydration =new Hydration(hydrationData)
    expect(hydration.findWeeklyHydration('2023/03/02')).to.deep.equal([28, 35]);
  });
});

