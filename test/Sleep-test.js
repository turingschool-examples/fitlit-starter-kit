import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepTestData from '../src/data/sleep-test-data.js';

let sleep;

describe('Sleep Repository', () => {
  beforeEach(() => {
    sleep = new Sleep(sleepTestData.sleepTestData);
  });

  it.skip('should store an array of data', () => {
    expect(sleep.data).to.equal(sleepTestData.sleepTestData);
  });

  it.skip('should calculate average hours slept', () => {
    sleep.calculateAverageSleepHours();

    expect(sleep.avgHours).to.equal(7.2375);
  });

  it.skip('should calculate average sleep quality', () => {
    sleep.calculateAverageSleepQuality();

    expect(sleep.avgQuality).to.equal(3.1625);
  });

  it.skip('should retrieve sleep hours data', () => {
    sleep.hoursSlept("2023/03/1");

    expect(sleep.hoursSlept).to.equal(9.6);
  });
  
  it.skip('should retrieve sleep quality data', () => {
    sleep.qualityOfSleep("2023/03/1");

    expect(sleep.quality).to.equal(4.3);
  });
  
  it.skip('should retrieve sleep hours for specified week', () => {
    sleep.hoursSleptInWeek("2023/03/1");

    expect(sleep.weekHours).to.deep.equal([9.6, 8.4, 9.7, 4.7, 8]);
  });
  it.skip('should retrieve sleep quality for specified week', () => {
    sleep.qualitySleptInWeek("2023/03/1");

    expect(sleep.weekQuality).to.deep.equal([4.3, 3.5, 4.7, 3, 3.1]);
  });
});