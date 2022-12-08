import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../src/data/hydration-data';

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
        hydration = new Hydration
    })
    it('should be a function')
});