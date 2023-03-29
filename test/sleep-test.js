import { expect } from 'chai';
import Sleep from '../src/data/sleep';
import sleepTestData from '../test/sleep-test-data';


describe('Sleep', function() {
let userSleep1, userSleep2;

  this.beforeEach(() => {
    userSleep1 = new Sleep(sleepTestData[0]);
    userSleep2 = new Sleep(sleepTestData[1]);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of sleep', function() {
    expect(userSleep1).to.be.an.instanceOf(Sleep);
  })

  it('should be able to take in a user ID', function() {
    expect(userSleep1.userID).to.equal(1);
  })

})