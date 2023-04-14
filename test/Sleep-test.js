import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepTestData from '../src/data/sleep-test-data.js';

describe('Sleep Repository', () => {
  let sleep;
  beforeEach(() => {
    let specificData = sleepTestData.sleepTestData.filter(sleep => sleep.userID === 1)
    sleep = new Sleep(specificData.reverse());
  });
  
  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.instanceof(Sleep);
  });

  it('should store an array of data', () => {
    expect(sleep.data.length).to.equal(8);
  });

  it('should calculate average hours slept', () => {
    expect(sleep.getAverage("hoursSlept")).to.equal(7.0625);
  });

  it('should calculate average sleep quality', () => {
    expect(sleep.getAverage("sleepQuality")).to.equal(3.375);
  });

  it('should return error if invalid argument is given', () => {
    expect(sleep.getAverage("Tacos")).to.equal("Tacos is not a valid argument!");
  });

  it('should retrieve sleep hours data', () => {
    expect(sleep.getInfoForSpecificDate("2023/03/24", "hoursSlept")).to.equal(9.6);
  });
  
  it('should retrieve sleep quality data', () => {
    expect(sleep.getInfoForSpecificDate("2023/03/24", "sleepQuality")).to.equal(4.3);
  });

  it('should return an error if date is not available', () => {
    expect(sleep.getInfoForSpecificDate("1889/04/25", "sleepQuality")).to.equal("There is no data for this date");
  });
  
  it('should retrieve sleep hours for specified week', () => {
    expect(sleep.getInfoForPastWeek("hoursSlept")).to.deep.equal([ 7.8, 6.4, 6.7, 6.4, 8.2, 5.1, 6.3 ]);
  });

  it('should retrieve sleep quality for specified week', () => {
    expect(sleep.getInfoForPastWeek("sleepQuality")).to.deep.equal([ 4.1, 4.7, 2, 1, 3.4, 4.2, 3.3 ]);
  });

  it('should return error if invalid argument is given', () => {
    expect(sleep.getAverage("ice cream")).to.equal("ice cream is not a valid argument!");
  });
});