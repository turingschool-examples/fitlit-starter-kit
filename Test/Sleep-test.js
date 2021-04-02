const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepTestingData = require ('../Test/Sleep-TestingData');

describe('Sleep', () => {
  let sleep1, sleep2, sleep3;

  beforeEach(() => {
    sleep1 = new Sleep(sleepTestingData, 1);
    sleep2 = new Sleep(sleepTestingData, 2);
    sleep3 = new Sleep(sleepTestingData, 3);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });

  it('should get all sleep data for a user by ID', () => {
    // console.log(sleep1)
    expect(sleep1.buildUserSleepData()).to.deep.equal(sleep1.userSleep);
    expect(sleep2.buildUserSleepData()).to.deep.equal(sleep2.userSleep)
  });

});