const chai = require("chai")
const expect = chai.expect;
const SleepRepository = require("../src/sleep-repository");
const sleepData = require("../data/sleep");
const sleepTestData = sleepData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weeklySleepTestData = sleepTestData.filter(user => user.userID === 1).slice(-7);
const testSleepUserData = sleepTestData.filter(user => user.userID === 1);
const allSleepQual = sleepTestData.reduce((acc, day) => { 
  return acc += day.sleepQuality
}, 0) / sleepTestData.length
const fixedSleepQual = allSleepQual.toFixed(1)
let users = new Set(sleepTestData.map(user => user.userID))
users = [...users]

let currentDay = sleepTestData.filter(day => day.date === '2019/06/23')
let maxHours = currentDay.reduce((acc, user) => {
  if(user.hoursSlept > acc) {
    acc = user.hoursSlept;
  }
  return acc;
}, 0)
let maxSleepers = currentDay.filter(user => user.hoursSlept === maxHours);

// console.log(maxSleepers)

describe('SleepRepository', function() {

    beforeEach(function() {
        sleepRepository = new SleepRepository(sleepTestData, 1);
      });

      it('should be a function', function() {
        expect(SleepRepository).to.be.a('function');
      });
    
      it('should be an instance of SleepRepository', function() {
        expect(sleepRepository).to.be.an.instanceof(SleepRepository);
      }); 

      it('should return average sleep quality of all users', function() {
        expect(sleepRepository.returnAllSleepQual()).to.equal(fixedSleepQual);
      });

      it('should return users who have sleep quality greater than 3', function() {
        expect(sleepRepository.returnGreatSleepers('2019/06/23')).to.deep.equal([2]);
      });

      it('should return the user with the highest hours of sleep for a given day', function() {
        expect(sleepRepository.returnHighestSleepers('2019/06/23')).to.deep.equal([{ userID: 2, date: '2019/06/23', hoursSlept: 8, sleepQuality: 4.9 }]);
      });

});