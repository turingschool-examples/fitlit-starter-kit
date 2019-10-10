const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');
const mockSleepData = require('../mock/mockSleepData');
const Sleep = require('../src/Sleep');


let sleep;

describe('Sleep', () => {

    beforeEach( () => {
        sleep = new Sleep(mockSleepData, 2);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    });

    // it('should have a userID', () => {
    //     expect(hydration.userID).to.equal(2);
    // });
    //
    // it('should have a date', () => {
    //     hydration1 = new Hydration(mockHydrationData[0]);
    //     expect(hydration1.date).to.equal("2019/06/15");
    // });


});
