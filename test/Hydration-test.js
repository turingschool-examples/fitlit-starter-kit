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

    it('should have a date', () => {
        expect(hydration.date).to.equal("2019/06/15");
    });

    it('should have a value for numOunces', () => {
        expect(hydration.numOunces).to.equal(2);
    });

});
