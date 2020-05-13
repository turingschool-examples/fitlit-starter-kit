const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')
const userDataTest = require('../data/userDataTest')

describe('UserRepository', function() {
  let userRepository

  beforeEach(() => {
    userRepository = new UserRepository(userDataTest)
  })

it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return a user object when searching by id', function() {
    expect(userRepository.getUserDataById(2)).to.equal(userDataTest[1]);
  });

  it('should calculate the total users step goals', function() {
    expect(userRepository.calculateAverageStepGoalForAllUsers()).to.equal(6667)
  })
})
