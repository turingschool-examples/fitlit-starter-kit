const chai = require('chai');
const expect = chai.expect;

const userData = require('../data-subsets/users-subset');
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it.only('should be an instance of Sleep', () => {
    const sleep = new Sleep(userData[0]);
   console.log(sleep.sleepObjects);
    console.log(sleep.findWeek('2019/06/18'));
    console.log(sleep.findAvgSleepQual());
    console.log(sleep.hoursSleptByDate('2019/06/18'))
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to output user\'s average hours slept', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findAvgHoursSlept()).to.equal(8.3);
  });

  it.only('should be able to output user\'s average sleep quality', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findAvgSleepQual()).to.equal(2.3);
  });

  // it.only('should be able to output a user\'s hours slept by day', () => {
  //   const sleep = new Sleep(userData[0]);
  //   expect(sleep.hoursSleptByDate('2019/06/18').to.equal(10.4));
  // })

});