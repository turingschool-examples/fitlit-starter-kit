const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const mockActivityData = require('../mock/mockActivityData');

let user;
let activity

describe('Activity', () => {

    beforeEach( () => {
        activity = new Activity(mockActivityData);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Activity).to.be.a('function');
    });

    
});