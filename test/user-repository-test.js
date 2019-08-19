const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/user-repository');

describe('UserRepository', function() {
    it('should be a function', function() {
        expect(UserRepository).to.be.a('function');
    })
    })

