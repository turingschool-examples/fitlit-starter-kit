import { expect } from 'chai';
import Hydration from '../src/Hydration.js';
import hydrationDataSet from '../src/data/hydration-data.js';

const mockHydrationDataSet = hydrationDataSet

// At least three tests
// - should be a function
// - should be an instance of Hydration
// - should have an id
// - should have a date
// - should have the number of fluid ounces of water consumed
// - should be able to return the average fluid ounces consumed per day for all time
// - should be able to return how many fluid ounces consumed for a specific day
// - should be able to return how many fluid ounces consumed each day over the course of a week

describe ("Hydration", function() {
    let hydration;
    beforeEach(function() {
        hydration = new Hydration(1, mockHydrationDataSet);
        //console.log(hydration);
    });

    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });

    it('should be able to take in a hydration class', function() {
        expect(hydration.dataSet).to.deep.equal(mockHydrationDataSet);
    });

    it('should have an id', function() {
        expect(hydration.userID).to.equal(1);
    });

    it('should have a date', function() {
        expect(hydration.date).to.equal("2019/06/15");
    });

    it('should have the number of fluid ounces of water consumed', function() {
        expect(hydration.numOunces).to.equal(37);
    });

    it.skip('should have a ')


});