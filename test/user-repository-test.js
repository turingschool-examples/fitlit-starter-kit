const chai = require("chai")
const expect = chai.expect;
const userRepository = require("../src/user-repository");

describe('userRepository', function() {

    it('should be a function', function() {
        expect(userRepository).to.be.a('function');
    })
})