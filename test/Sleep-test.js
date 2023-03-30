import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepTestData from '../src/data/sleep-test-data.js';


describe('Sleep Repository', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepTestData.sleepTestData);
    sleep.sortData()
  });

  it('should store an array of data', () => {
    expect(sleep.data.length).to.equal(sleepTestData.sleepTestData.length);
  });

  it('should be able to sort based on date', ()=> {
    expect(sleep.data[2]).to.deep.equal({ 
      "userID":3,"date":"2023/03/24","hoursSlept":9.7,"sleepQuality":4.7})
  })

  it('should calculate average hours slept', () => {
    expect(sleep.getAverage("hoursSlept")).to.equal(7.5724);
  });

  it('should calculate average sleep quality', () => {
    expect(sleep.getAverage("sleepQuality")).to.equal(3.0259);
  });

  it('should retrieve sleep hours data', () => {
    expect(sleep.getInfoForSpecificDate("2023/03/24", "hoursSlept")).to.equal(9.6);
  });
  
  it('should retrieve sleep quality data', () => {
    expect(sleep.getInfoForSpecificDate("2023/03/24", "sleepQuality")).to.equal(4.3);
  });
  
  it('should retrieve sleep hours for specified week', () => {
    expect(sleep.getInfoForPastWeek("hoursSlept")).to.deep.equal([9.6, 8.4, 9.7, 4.7, 8, 4.2, 4.1]);
  });

  it('should retrieve sleep quality for specified week', () => {
    expect(sleep.getInfoForPastWeek("sleepQuality")).to.deep.equal([4.3, 3.5, 4.7, 3, 3.1, 1.2, 3.9]);
  });
});