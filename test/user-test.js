const chai = require('chai');
const expect = chai.expect;

const User = require('../src/userClass');
const sampleData = require('../test/sample-data');

describe('User', function() {
    it('should be a function', function() {
        expect(User).to.be.a('function');
    })
    it('should be able to return the user first name', function() {
        const user1 = new User(sampleData[0]);
        expect(user1.getUserFirstName()).to.equal('Luisa');
    })
    })