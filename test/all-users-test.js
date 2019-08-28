const chai = require('chai');
const expect = chai.expect;
const AllUserSampleActivityData = require('../test/allUserActivitySampleData')
const AllUsersSampleData = require('../test/allUserSleepSampleData')
const AllUsers = require('../src/all-users');

describe('AllUsers', function() {

    it.skip('should be a function', function() {
        expect(AllUsers).to.be.a('function');
    })
    it.skip('should return a week of multiple users data', function () {
        const allUser = new AllUsers(AllUsersSampleData);
        //for the test, the calculation for index is much smaller than what
        //is needed for DOM functionality; this test will fail with the DOM calculations
        expect(allUser.getUsersWeek('2019/06/25')).to.deep.equal([ { userID: 1, date: '2019/06/18', hoursSlept: 10.4, sleepQuality: 3.1 },
          { userID: 2, date: '2019/06/18', hoursSlept: 10.8, sleepQuality: 3.2 },
          { userID: 3, date: '2019/06/18', hoursSlept: 9.8, sleepQuality: 2.6 },
          { userID: 4, date: '2019/06/18', hoursSlept: 5.9, sleepQuality: 2.5 },
          { userID: 5, date: '2019/06/18', hoursSlept: 5.2, sleepQuality: 4.1 },
          { userID: 1, date: '2019/06/19', hoursSlept: 10.7, sleepQuality: 1.2 },
          { userID: 2, date: '2019/06/19', hoursSlept: 9.6, sleepQuality: 2.5 },
          { userID: 3, date: '2019/06/19', hoursSlept: 7.2, sleepQuality: 3.4 },
          { userID: 4, date: '2019/06/19', hoursSlept: 5.2, sleepQuality: 2.3 },
          { userID: 5, date: '2019/06/19', hoursSlept: 4.8, sleepQuality: 3.4 },
          { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
          { userID: 2, date: '2019/06/20', hoursSlept: 10.1, sleepQuality: 2.4 },
          { userID: 3, date: '2019/06/20', hoursSlept: 9.4, sleepQuality: 1.2 },
          { userID: 4, date: '2019/06/20', hoursSlept: 8.3, sleepQuality: 1.9 },
          { userID: 5, date: '2019/06/20', hoursSlept: 10.1, sleepQuality: 3.5 },
          { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
          { userID: 2, date: '2019/06/21', hoursSlept: 4.3, sleepQuality: 4.8 },
          { userID: 3, date: '2019/06/21', hoursSlept: 8.9, sleepQuality: 3.7 },
          { userID: 4, date: '2019/06/21', hoursSlept: 10.6, sleepQuality: 2.7 },
          { userID: 5, date: '2019/06/21', hoursSlept: 9.6, sleepQuality: 4.1 },
          { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
          { userID: 2, date: '2019/06/22', hoursSlept: 4.8, sleepQuality: 3.3 },
          { userID: 3, date: '2019/06/22', hoursSlept: 9.8, sleepQuality: 2.1 },
          { userID: 4, date: '2019/06/22', hoursSlept: 7.7, sleepQuality: 1.5 },
          { userID: 5, date: '2019/06/22', hoursSlept: 8.1, sleepQuality: 1.3 },
          { userID: 1, date: '2019/06/23', hoursSlept: 7.8, sleepQuality: 1.5 },
          { userID: 2, date: '2019/06/23', hoursSlept: 8, sleepQuality: 4.9 },
          { userID: 3, date: '2019/06/23', hoursSlept: 4.7, sleepQuality: 3.9 },
          { userID: 4, date: '2019/06/23', hoursSlept: 9.9, sleepQuality: 2.6 },
          { userID: 5, date: '2019/06/23', hoursSlept: 5.1, sleepQuality: 1.6 },
          { userID: 1, date: '2019/06/24', hoursSlept: 8, sleepQuality: 1.3 },
          { userID: 2, date: '2019/06/24', hoursSlept: 10.8, sleepQuality: 1 },
          { userID: 3, date: '2019/06/24', hoursSlept: 9.3, sleepQuality: 1.8 },
          { userID: 4, date: '2019/06/24', hoursSlept: 5, sleepQuality: 3.5 },
          { userID: 5, date: '2019/06/24', hoursSlept: 6.8, sleepQuality: 2.1 },
          { userID: 1, date: '2019/06/25', hoursSlept: 5.1, sleepQuality: 3.7 },
          { userID: 2, date: '2019/06/25', hoursSlept: 9.7, sleepQuality: 1.3 },
          { userID: 3, date: '2019/06/25', hoursSlept: 6.4, sleepQuality: 4.9 },
          { userID: 4, date: '2019/06/25', hoursSlept: 7.2, sleepQuality: 2.4 },
          { userID: 5, date: '2019/06/25', hoursSlept: 6.3, sleepQuality: 4.4 }
        ])
    }) 
    it.skip('should return users with average sleep quality over 3 for a week', function () {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getHighQualitySleepers('2019/06/25')).to.eql(['5'])
    }) 
    it.skip('should return the users who slept the most for a given date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getBestSleeperByDay('2019/06/15')).to.deep.equal([{userID: 3, date: "2019/06/15", hoursSlept: 10.8, sleepQuality: 4.7}])
    })
    it.skip('should return the users who slept the least for a specific date', function() {
        const allUser = new AllUsers(AllUsersSampleData);
        expect(allUser.getWorstSleeperByDay('2019/06/15')).to.deep.equal([{userID: 5, date: "2019/06/15", hoursSlept: 4.1, sleepQuality: 3.6}])
    })

    it.skip('should return the all users stairs climbed average for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageStairsClimbed('2019/06/15')).to.equal(21);
    })

    it.skip('should return the all users steps average for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageSteps('2019/06/15')).to.equal(6027);
    })

    it.skip('should return the all users steps average for a specific date', function () {
        const allUser = new AllUsers(AllUserSampleActivityData);
        expect(allUser.getAverageMinutes('2019/06/15')).to.equal(144);
    })
 
})