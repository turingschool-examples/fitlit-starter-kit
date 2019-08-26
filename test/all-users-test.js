const chai = require('chai');
const expect = chai.expect;

const AllUsersSampleData = require('../test/allUserSleepSampleData')
const AllUsers = require('../src/all-users');

describe('AllUsers', function() {

    it.only('should be a function', function() {
        expect(AllUsers).to.be.a('function');
    })
    it.only('should return a week of user data', function () {
    const allUser = new AllUsers(AllUsersSampleData);
   allUser.getUserWeek('2019/06/25')
    }) 
    it.only('should return a week of multiple user data', function () {
        const allUser = new AllUsers(AllUsersSampleData);
        allUser.getUserWeekAverage('2019/06/25');
    }) 
    it.only('should return the users who slept the most for a given date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getBestSleeperByDay('2019/06/15')).to.deep.equal([{userID: 3, date: "2019/06/15", hoursSlept: 10.8, sleepQuality: 4.7}])
    })
    it.only('should return the users who slept the least for a specific date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getWorstSleeperByDay('2019/06/15')).to.deep.equal([{userID: 5, date: "2019/06/15", hoursSlept: 4.1, sleepQuality: 3.6}])
    })
 
})