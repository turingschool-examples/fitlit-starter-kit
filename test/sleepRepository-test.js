const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository.js')
const data = require('../data/sleep.js')

describe('SleepRepository', function() {
  
  it('Should be a function', function() {
    let sleepRepository = new SleepRepository(data);
    expect(sleepRepository.data.length).to.equal(5000)
  });

  it('Should find sleep quality avg for all users', function() {
    let sleepRepository = new SleepRepository(data);
    expect(sleepRepository.findAllUserQual()).to.equal('2.98')
  });

  it('Should find sleep quality avg for all users for a given week', function() {
    let sleepRepository = new SleepRepository(data);
    expect(sleepRepository.findAllGoodQual('2019/08/05')).to.eql([
      1,  4,  8,  9, 19, 21, 23,
     24, 27, 30, 32, 33, 37, 39,
     41, 42, 47, 49
   ])
  });

  it('Should find the users who slept the most for a given day', function() {
    let sleepRepository = new SleepRepository(data);
    expect(sleepRepository.mostSleepDayAll('2019/08/14')).to.eql([
      { userID: 33, date: '2019/08/14', hoursSlept: 11, sleepQuality: 4.3 },
      { userID: 35, date: '2019/08/14', hoursSlept: 11, sleepQuality: 3.2 }
    ])
  });
});