const chai = require('chai');
const expect = chai.expect;

const data = require('./data/users.js');
const userData = data.testData;

const UserRepository = require('../src/UserRepository.js');

describe('UserRepository', function() {
  let userRepo;
  beforeEach(function() {
    userRepo = new UserRepository(userData);
  });

  it.skip('should have an array of data', function() {

    expect(userRepo.data).to.be.an.instanceof(Array);
  });

  it.skip('should take in an array of data when instantiated', function() {

    expect(userRepo.data).to.deep.equal(userData);
  });

  it.skip('can find a user\'s data', function() {

    expect(userRepo.getUserData(11)).to.equal(userData[1]);
  });

  it.skip('can calculate the average step goal among all users', function() {

    expect(userRepo.getStepGoalAverage()).to.equal(6000)
  });
});
