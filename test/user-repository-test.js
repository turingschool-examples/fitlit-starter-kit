const chai = require('chai');
const expect = chai.expect;

const sampleData = require('../test/sample-data')
const UserRepository = require('../src/user-repository');

describe('UserRepository', function() {

it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
})

it.only('should return user data',function() {
    const user1 = new UserRepository(sampleData)
    expect(user1.returnUserData(1)).to.equal(sampleData[0])
})
})

