const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activityUser');

describe('Activity', function() {
    it('should be a function', function() {
        expect(Activity).to.be.a('function');
    })
    })