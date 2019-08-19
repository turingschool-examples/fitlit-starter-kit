const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');

describe('User', () => {

    it('should be a function', () => {
        expect(User).to.be.a('function')
    });
});