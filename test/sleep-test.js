import {expect} from 'chai';
import Sleep from '../src/classes/Sleep.js';
import sleepTestData from "./sleep-test-data";

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(sleepTestData);
  });
  
  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it("should have a property that holds the sleep data object", () => {
    sleep = new Sleep(sleepTestData[0]);
    expect(sleep.data).to.deep.equal({
      "userID": 1,
      "date": "2023/06/28",
      "hoursSlept": 8.4,
      "sleepQuality": 1.8
      }, );
  });

  it('should be able to calculate average sleep hours', function() {
    expect(sleep.calculateAverageSleepHours(1)).to.be.equal(8.48);
  });

  it('should be able to calculate average sleep quality', function() {
    expect(sleep.calculateAverageSleepQuality(1)).to.be.equal(2.52);
  });

  it('should be able to find sleep hours on a specific date', function() {
    expect(sleep.findSleepHoursOnDate(1, "2023/06/28")).to.be.equal(8.4);
  });
});