const chai = require("chai")
const expect = chai.expect;
const SleepRepository = require("../src/sleep-repository");
const sleepData = require("../data/sleep");
const sleepTestData = sleepData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weeklySleepTestData = sleepTestData.filter(user => user.userID === 1).slice(-7);
const testSleepUserData = sleepTestData.filter(user => user.userID === 1);

describe('SleepRepository', function() {

    beforeEach(function() {
        sleepRepository = new SleepRepository(sleepTestData, 1);
      });

      it('should be a function', function() {
        expect(SleepRepository).to.be.a('function');
      });
    
      it('should be an instance of UserRepository', function() {
        expect(sleepRepository).to.be.an.instanceof(SleepRepository);
      }); 

});