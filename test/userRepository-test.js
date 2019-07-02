const chai = require('chai')
const expect = chai.expect;


const UserRepository = require('../src/userRepository');
const fakeUsers = require('../fakeData/fakeUsers');


describe('UserRepository', function() {

  it('should be a function', function() {
    
    expect(UserRepository).to.be.a('function');
  }),

  it('should find the users information using their ID', function() {
    const userRepository = new UserRepository(fakeUsers, 1);
    
    expect(userRepository.getUserData()).to.deep.equal(fakeUsers[0])
  })

  it('should find the average daily step goal for all users', function () {
    const userRepository = new UserRepository(fakeUsers, 1);

    userRepository.getAverageStepGoal();

    expect(userRepository.getAverageStepGoal()).to.equal(6000)
  })
});