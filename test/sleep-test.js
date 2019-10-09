const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository.js');
const data = require('../data/sleep.js');
const Sleep = require('../src/sleep.js');

describe('Sleep', function() {
  it('Should be a function', function() {
    let sleepRepository = new SleepRepository(data);
    sleepRepository.findUserId(4);
    let sleep = new Sleep(sleepRepository.currentUser)
    expect(sleep.data.length).to.equal(100)
  });

  it('Should find a users average hours and quality', function() {
    let sleepRepository = new SleepRepository(data);
    sleepRepository.findUserId(4);
    let sleep = new Sleep(sleepRepository.currentUser)
    expect(sleep.findAvgSleepAll()).to.equal('7')
    expect(sleep.findAvgQualAll()).to.equal('3.1')
  });

  it('Should find a users hours and quality for a day', function() {
    let sleepRepository = new SleepRepository(data);
    sleepRepository.findUserId(4);
    let sleep = new Sleep(sleepRepository.currentUser);
    expect(sleep.findHoursDay('2019/08/23'))   
    expect(sleep.findQualDay('2019/08/23'))
  });
  
  it('Should find a users hours and quality for a given week', function() {
    let sleepRepository = new SleepRepository(data);
    sleepRepository.findUserId(4);
    let sleep = new Sleep(sleepRepository.currentUser);
    expect(sleep.findSleepWeek('2019/08/23')).to.eql([
      5.3, 4.9,  7.6,
      9.4, 6.1, 10.1,
      6.6
    ])
    expect(sleep.findQualWeek('2019/08/23')).to.eql([
      1.9, 2.7, 3.3,
      3.1, 4.7, 1.7,
      3.2
    ])
  })
});