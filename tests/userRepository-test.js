const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');

describe('UserRepository', function() {

    it('should be a function', function() {
        const userRepository = new UserRepository();
        expect(UserRepository).to.be.a('function');
    })
});