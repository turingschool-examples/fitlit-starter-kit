const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');
const sampleHydrationData = require('../test/hydration-sample-data.js');

describe('Hydration', function() {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    it.only('should return a user all time hydration amount', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.allTimeHydration(1)).to.equal(54.36)
    })
    })