const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');
const mockUserData2 = require('../mock/mockUserData2');
const mockSleepData = require('../mock/mockSleepData');
const mockSleepDataLarge = require('../mock/mockSleepData');
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
        expect(sleep.calculateAvgHoursSleptPerDayByUser()).to.equal(8.06);
    });

    it('should calculate a user\'s average daily sleep quality', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.calculateAvgSleepQualityPerDayByUser()).to.equal(2.61);
    });

    it('should return the amount a user slept on a specific day', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.returnHoursSleptByUserOnSpecificDate("2019/06/15")).to.equal(6.1);
    });

    it('should return a user\'s sleep quality on a specific day', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.returnSleepQualityByUserOnSpecificDate("2019/06/15")).to.equal(2.2);
    });

    it('should return the daily amounts a user slept over a week', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.calculateHoursSleptEachDayByUserOverSpecificWeek()).to.eql([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8]);
    });

    it('should return avg hours slept for all users', () => {
        expect(sleep.calculateAvgSleepQualityAllUsers()).to.equal(8.26);
    });

    it('should return users with avg sleep quality over 3 for the last week', () => {
      sleep1 = new Sleep(mockSleepData, 1, mockUserData2);
        expect(sleep1.findUsersWithAvgSleepQualityMoreThanThreeOverFinalWeek()).to.eql(["Jarvis Considine", "Herminia Witting"]);
    });

    it('should return the deepest sleepers for a specific date', () => {
      sleep1 = new Sleep(mockSleepData, 1, mockUserData2);
        expect(sleep1.findUsersSleptMostHoursIdentifiedByDate("2019/06/15")).to.eql(["Herminia Witting"]);
    });

    it('should return the date the current user slept the best', () => {
        sleep.findCurrentUserSleepData();
        expect(sleep.findDateUserSleptBest()).to.equal("2019/06/21");
    });
});
