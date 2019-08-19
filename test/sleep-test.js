const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/sleepUser.js');

describe('Sleep', function() {
    it('should be a function', function() {
        expect(Sleep).to.be.a('function');
    })
    })