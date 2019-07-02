const chai = require('chai')
const expect = chai.expect;


const UserRepository = require('../src/userRepository');
const fakeUsers = require('../fakeData/fakeUsers');


describe('UserRepository', function() {

  it('should be a function', function() {
    
    expect(UserRepository).to.be.a('function');
  }),


  it('should find the users information using their ID', function() {
    const userRepository = new UserRepository(fakeUsers);
    
    expect(userRepository.getUserData(1)).to.be.eql(fakeUsers[0])
  })
});