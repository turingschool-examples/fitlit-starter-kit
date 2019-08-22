const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');
const sampleHydrationData = require('../test/hydration-sample-data.js');

describe('Hydration', function() {
    it.skip('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    it.skip('should return a user all time hydration amount', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.allTimeHydration(1)).to.equal(54.36)
    })
    it.only('should return a user water consumpution on a given day', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.dailyHydration(1, "2019/06/16")).to.equal(69)
    })
    it.skip('should return hydration for a week', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.weeklyHydration(1, '2019/07/09')).to.deep.equal([26,30,46,26,34,24,89]);
    })
    })