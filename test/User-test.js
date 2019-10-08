const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

let user;

describe('User', () => {

    beforeEach(() => {
        user = new User();
    });
    
    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });
});