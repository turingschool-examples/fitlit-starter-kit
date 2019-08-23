const chai = require('chai');
const expect = chai.expect;

const userData = require('../data-subsets/users-subset');
const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of the sleep repository', () => {
    const sleepRepository = new SleepRepository(userData);
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('should be able to calculate the sleep quality of all users', () => {
    const sleepRepository = new SleepRepository();
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });



});