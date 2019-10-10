const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');
const mockSleepData = require('../mock/mockSleepData');
const Sleep = require('../src/Sleep');


let sleep;

describe('Sleep', () => {

    beforeEach( () => {
        sleep = new Sleep(mockSleepData, 1);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    });

    it('should have a userId', () => {
        expect(sleep.userID).to.equal(1);
    });

    it('should find all sleep data for a specific user', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.currentUserSleepData.length).to.equal(7);
    });

    it('should calculate a user\'s average daily hours slept', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.calculateAvgHoursSleptPerDayByUser()).to.equal(8);
    });


});
