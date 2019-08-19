const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');

describe('Hydration', function() {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    })