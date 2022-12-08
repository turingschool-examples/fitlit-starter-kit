import { expect } from 'chai';
import Hydration from '../src/Hydration.js';
import userHydrationData from '../src/data/hydration-data.js';

const mockHydrationData = userHydrationData

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
    let hydration
    beforeEach(function() {
        hydration = new Hydration(mockHydrationData)
    })

    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    });

    it('should be able to take in a Hydration class', function() {
        expect(hydration).to.deep.equal(Hydration);
    });
});