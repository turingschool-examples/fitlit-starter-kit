const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    // const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });


  it('should have a averageStepGoal to return the average of step goal', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.averageStepGoal()).to.equal(7750);
  });

  it('should have a mostCommonState to return the most common state', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.mostCommonState()).to.equal('SD');
  });

})