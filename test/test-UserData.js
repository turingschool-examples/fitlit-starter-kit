const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const sampleData = require('../test/sampleData');

describe('UserRepository', () => {

  it('should be a function', () => {
    const userRepo = new UserRepository(sampleData);
    expect(UserRepository).to.be.a('function')
  });

  it('should be an instance of UserRepository', () => {
    const userRepo = new UserRepository(sampleData);
    expect(userRepo).to.be.an.instanceOf(UserRepository)  
  });

  it('should have a method called getUserData', () => {
    const userRepo = new UserRepository(sampleData);
    expect(userRepo.getUserData).to.be.a('function');
  });

  it('shoulde be able to return a user', () => {
    const userRepo = new UserRepository(sampleData);
    expect(userRepo.getUserData(5)).to.eql(sampleData[4])
  });

  it('should get the average steps amongst all users', () => {
    const userRepo = new UserRepository(sampleData);
    expect(userRepo.getAllUsersAvgStepGoal()).to.eql(7167)
  })
})