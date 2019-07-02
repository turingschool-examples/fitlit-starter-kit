const chai = require('chai')
const expect = chai.expect;


const UserRepository = require('../src/userRepository');
const fakeUsers = require('../fakeData/fakeUsers')

describe('UserRepository', function() {

  it('should be a function', function() {
    
    expect(UserRepository).to.be.a('function');
  }),

  it('should take an object as an arguement', function() {
    const userRepository = new UserRepository(fakeUsers)

    expect(userRepository.data).to.be.an('object')
  })
});