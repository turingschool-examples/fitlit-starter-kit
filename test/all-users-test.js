const chai = require('chai');
const expect = chai.expect;

const AllUserSampleActivityData = require('../test/allUserActivitySampleData')
const AllUsersSampleData = require('../test/allUserSleepSampleData')
const AllUsers = require('../src/all-users');

describe('AllUsers', function() {

    it('should be a function', function() {
        expect(AllUsers).to.be.a('function');
    })
    it('should return a week of user data', function () {
    const allUser = new AllUsers(AllUsersSampleData);
   allUser.getUserWeek('2019/06/25')
    }) 
    it('should return a week of multiple user data', function () {
        const allUser = new AllUsers(AllUsersSampleData);
        allUser.getUserWeekAverage('2019/06/25');
    }) 
    it('should return the users who slept the most for a given date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getBestSleeperByDay('2019/06/15')).to.deep.equal([{userID: 3, date: "2019/06/15", hoursSlept: 10.8, sleepQuality: 4.7}])
    })
    it('should return the users who slept the least for a specific date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getWorstSleeperByDay('2019/06/15')).to.deep.equal([{userID: 5, date: "2019/06/15", hoursSlept: 4.1, sleepQuality: 3.6}])
    })

    it('should return the all users stairs climbed average for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageStairsClimbed('2019/06/15')).to.equal(21);
    })

    it('should return the all users steps average for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageSteps('2019/06/15')).to.equal(6027);
    })

    it('should return the all users average active minutes for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageMinutes('2019/06/15')).to.equal(144);
    })
 
})