const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');
const mockHydrationData = require('../mock/mockHydrationData');
const Hydration = require('../src/Hydration');


let hydration;

describe('Hydration', () => {

    beforeEach( () => {
        hydration = new Hydration(mockHydrationData, 2);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Hydration).to.be.a('function');
    });

    it('should have a userID', () => {
        expect(hydration.userID).to.equal(2);
    });

    it('should find all hydration data for a specific user', () => {
        hydration.findCurrentUserHydrationData();
        expect(hydration.currentUserHydrationData.length).to.equal(7);
    });

    it('should calculate a user\'s average daily drink amt', () => {
        hydration.findCurrentUserHydrationData();
        expect(hydration.calculateAvgDailyAmtDrankByUserIdAllTime()).to.equal(72);
    });

    it('should return the amount a user drank on a specific day', () => {
        hydration.findCurrentUserHydrationData();
        expect(hydration.calculateAmtDrankByUserSpecificDate("2019/06/15")).to.equal(75);
    });

    it('should return the daily amounts a user drank over a week', () => {
        hydration.findCurrentUserHydrationData();
        expect(hydration.returnDrinkAmtEachDayOverWeekByUser()).to.eql([75, 91, 96, 70, 76, 71, 27]);
    });

});
