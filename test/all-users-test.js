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
 
})