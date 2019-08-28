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

  it('should have access to users\' sleep information', () => {
    const sleepRepository = new SleepRepository(1);
    expect(sleepRepository.sleepData.length).to.equal(130);
  });

  it('should be able to calculate the average sleep quality of all users', () => {
    const sleepRepository = new SleepRepository();
    expect(sleepRepository.findGlobalSleepAverage()).to.be.equal(3);
  });

  it('should be able to show the numbers of users who have above average sleep quality', () => {
    const sleepRepository = new SleepRepository();
    expect(sleepRepository.findSleepersAboveAverage)
  });

  it("should provide the user or users with the most hours of sleep", () => {
    const sleepRepository = new SleepRepository();
    expect(sleepRepository.findSleepiestUserPerDay("2019/06/21")).to.deep.equal('Mae Connelly');
  });

});