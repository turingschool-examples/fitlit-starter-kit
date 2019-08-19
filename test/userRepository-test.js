const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');

describe('User Repository', () => {

    it('should be a function', () => {
        expect(UserRepository).to.be.a('function');
    });
});