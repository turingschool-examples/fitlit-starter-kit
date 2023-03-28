import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepTestData from '../src/data/sleep-test-data.js';


describe('Sleep Repository', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepTestData.sleepTestData);
  });

  it.skip('should store an array of data', () => {
    expect(sleep.data).to.equal(sleepTestData.sleepTestData);
  });

  it.skip('should be able to sort based on date', ()=> {
    sleep.sortData()

    expect(sleep.data[2]).to.deep.equal({"userID":1,"date":"2023/03/3","hoursSlept":8.4,"sleepQuality":3.5})
  })

  it('should calculate average hours slept', () => {
    expect(sleep.getAverage("hoursSlept")).to.equal(7.2375);
  });

  it('should calculate average sleep quality', () => {
    expect(sleep.getAverage("sleepQuality")).to.equal(3.1625);
  });

  it('should retrieve sleep hours data', () => {
    expect(sleep.getSleepInfoForSpecificDate("2023/03/1", "hoursSlept")).to.equal(9.6);
  });
  
  it('should retrieve sleep quality data', () => {
    expect(sleep.getSleepInfoForSpecificDate("2023/03/1", "sleepQuality")).to.equal(4.3);
  });
  
  it.skip('should retrieve sleep hours for specified week', () => {
    sleep.hoursSleptInWeek("2023/03/1");
    
    expect(sleep.hoursSleptInWeek("2023/03/11")).to.deep.equal([9.6, 8.4, 9.7, 4.7, 8]);
  });
  it.skip('should retrieve sleep quality for specified week', () => {
    sleep.qualitySleptInWeek("2023/03/1");

    expect(sleep.weekQuality).to.deep.equal([4.3, 3.5, 4.7, 3, 3.1]);
  });
});