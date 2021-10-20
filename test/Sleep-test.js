import { expect } from 'chai';
import Sleep from '../src/Sleep'

describe('Sleep', () => {
  it('should be a function', function () {
    expect(Sleep).to.be.a('function');
  })
  it('should store data', function () {
    const sleepData = [{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 37,
      "sleepQuality": 3.8

    },];
    const sleep = new Sleep(sleepData);
    expect(sleep.sleepData).to.deep.equal(sleepData);
  });
});
