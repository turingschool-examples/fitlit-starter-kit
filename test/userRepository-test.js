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

  it('should compare the users step goal against the average of all users', function () {
    const userRepository = new UserRepository(fakeUsers);

    expect(userRepository.compareStepGoal(10000)).to.be.eql('Your goal is 4000 steps more than your friends!')
    // 6000 for avg.
  })
});