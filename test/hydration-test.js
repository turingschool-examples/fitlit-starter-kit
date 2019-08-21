const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');
const sampleHydrationData = require('../test/hydration-sample-data.js');

describe('Hydration', function() {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    it('should return a user all time hydration amount', function() {
        
    })
    })