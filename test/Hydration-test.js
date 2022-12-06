const chai = require("chai");
const expect = chai.expect;
import hydrationTestData from './hydration-test-data';
import Hydration from '../src/Hydration';

describe('Hydration', function() {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });

    it('should create instance out of data from the hydration file', function() {
        const dayOfHydration = new Hydration (hydrationTestData[0])

        expect(dayOfHydration).to.be.an.instanceOf(Hydration); 
    });

    it('should have 3 properties: userID, date, and numOunces', function() {
        const dayOfHydration = new Hydration(hydrationTestData[0]);

        expect(dayOfHydration.userID).to.equal(20);
        expect(dayOfHydration.date).to.equal("2019/06/15");
        expect(dayOfHydration.numOunces).to.equal(23);
    })
})