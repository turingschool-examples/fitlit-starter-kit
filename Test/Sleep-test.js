const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepTestingData = require ('../Test/Sleep-TestingData');

describe('Sleep', () => {
  let sleep1, sleep2, sleep3, sleepAll;

  beforeEach(() => {
    sleep1 = new Sleep(sleepTestingData, 1);
    sleep2 = new Sleep(sleepTestingData, 2);
    sleep3 = new Sleep(sleepTestingData, 3);
    sleepAll = new Sleep(sleepTestingData)
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
    expect(sleep3.calculateAverageHoursSleptPerDay()).to.equal(8.9);
    expect(sleep2.calculateAverageHoursSleptPerDay()).to.equal(7.9);
  });

  it ('should calculate the average user sleep quality per day over all time', () => {
    expect(sleep2.calculateAverageSleepQualityPerDay()).to.equal(3.5);
    expect(sleep1.calculateAverageSleepQualityPerDay()).to.equal(2.6);
  });

  it('should show hours slept by date', () => {
    expect(sleep1.calculateHoursSleptByDate("2019/06/20")).to.equal(9.3);
    expect(sleep3.calculateHoursSleptByDate("2019/06/18")).to.equal(9.8);
    expect(sleep2.calculateHoursSleptByDate("2019/06/16")).to.equal(7.5);
    expect(sleep2.calculateHoursSleptByDate("2019/06/18")).to.equal(10.8);
  });

  it('should show sleep quality by date', () => {
    expect(sleep2.calculateSleepQualityByDate("2019/06/20")).to.equal(2.4);
    expect(sleep2.calculateSleepQualityByDate("2019/06/19")).to.equal(2.5);
    expect(sleep3.calculateSleepQualityByDate("2019/06/21")).to.equal(3.7);
    expect(sleep3.calculateSleepQualityByDate("2019/06/17")).to.equal(4.9);
  });

  it('should generate the weekly hours slept by date', () => {
    expect(sleep1.generateHoursSleptByWeek("2019/06/15")).to.deep.equal([ 7.8, 9.3, 10.7, 10.4, 8, 4.1, 6.1 ])
    expect(sleep2.generateHoursSleptByWeek("2019/06/15")).to.deep.equal([ 4.3, 10.1, 9.6, 10.8, 5.7, 7.5, 7 ]);
  });

  it('should generate the weekly sleep quality by date', () => {
    expect(sleep1.generateSleepQualityByWeek("2019/06/15")).to.deep.equal([ 4.2, 1.2, 1.2, 3.1, 2.6, 3.8, 2.2 ])
    expect(sleep3.generateSleepQualityByWeek("2019/06/15")).to.deep.equal([ 3.7, 1.2, 3.4, 2.6, 4.9, 3.4, 4.7 ]);
  });

  it('should calculate the average of all users sleep quality', () => {
    expect(sleepAll.calculateAllUsersSleepQuality()).to.equal(3.2);
  });


});