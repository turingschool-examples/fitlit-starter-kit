const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepTestingData = require ('../Test/Sleep-TestingData');

describe('Sleep', () => {
  let sleep1, sleep2, sleep3;

  beforeEach(() => {
    sleep1 = new Sleep(sleepTestingData, 1);
    sleep2 = new Sleep(sleepTestingData, 2);
    // sleep3 = new Sleep(sleepTestingData, 3);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });

  it('should get all sleep data for a user by ID', () => {
    expect(sleep1.buildUserSleepData()).to.deep.equal(sleep1.userSleep);
    expect(sleep2.buildUserSleepData()).to.deep.equal(sleep2.userSleep)
  });

  it ('should calculate the average user sleep per day over all time', () => {
    expect(sleep1.calculateAverageHoursSlept()).to.equal('8.06');
    expect(sleep2.calculateAverageHoursSlept()).to.equal('7.86');
  });

  it ('should calculate the average user sleep quality per day over all time', () => {
    expect(sleep2.calculateAverageSleepQuality()).to.equal('3.49');
    expect(sleep1.calculateAverageSleepQuality()).to.equal('2.61');
  });

  it('should show hours slept by date', () => {
    expect(sleep1.calculateHoursSleptByDate("2019/06/20")).to.equal(9.3);
    expect(sleep1.calculateHoursSleptByDate("2019/06/18")).to.equal(10.4);
    expect(sleep2.calculateHoursSleptByDate("2019/06/16")).to.equal(7.5);
    expect(sleep2.calculateHoursSleptByDate("2019/06/18")).to.equal(10.8);
  });

  it('should show sleep quality by date', () => {
    expect(sleep2.calculateSleepQualityByDate("2019/06/20")).to.equal(2.4);
    expect(sleep2.calculateSleepQualityByDate("2019/06/19")).to.equal(2.5);
    expect(sleep1.calculateSleepQualityByDate("2019/06/21")).to.equal(4.2);
    expect(sleep1.calculateSleepQualityByDate("2019/06/17")).to.equal(2.6);
  });
});