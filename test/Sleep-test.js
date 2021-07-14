import { expect } from 'chai';
import { sleepTestData } from '../src/data/sleep-test-data';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
  let sleepData;

  beforeEach(() => {
    sleepData = sleepTestData.map(object => new Sleep(object))
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', () => {
    expect(sleepData[0]).to.be.an('object');
    expect(sleepData[0]).to.be.an.instanceof(Sleep);
  });

  it('should have a user ID', () => {
    expect(sleepData[1].userID).to.be.a('number');
    expect(sleepData[1].userID).to.equal(2);
  });

  it('should have a date', () => {
    expect(sleepData[5].date).to.be.a('string');
    expect(sleepData[5].date).to.equal('2019/06/15');
  });

  it('should have a number of hours slept', () => {
    expect(sleepData[10].hoursSlept).to.be.a('number');
    expect(sleepData[10].hoursSlept).to.equal(4.9);
  });

  it('should have a sleep quality rating', () => {
    expect(sleepData[10].sleepQuality).to.be.a('number');
    expect(sleepData[10].sleepQuality).to.equal(3.9);
  });

});
