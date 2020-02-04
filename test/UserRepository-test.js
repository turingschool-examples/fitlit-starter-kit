const chai = require('chai');
const expect = chai.expect;

const userData = require('./data/users.js');
const activityData = require('./data/activity.js');
const hydrationData = require('./data/hydration.js');
const sleepData = require('./data/sleep.js');

const UserRepository = require('../src/UserRepository.js');

describe('UserRepository', function() {
  let userRepo;
  beforeEach(function() {
    userRepo = new UserRepository(userData);
  });

  it('should have an array of data', function() {

    expect(userRepo.data).to.be.an.instanceof(Array);
  });

  it('should take in an array of data when instantiated', function() {

    expect(userRepo.data).to.deep.equal(userData);
  });

  it('can find a user\'s data', function() {
    let user11 = {
      "id": 11,
      "name": "Khalid Williams",
      "address": "420 Snap Way, Metropolis KS 04038-3499",
      "email": "khalid.williams@outlook.com",
      "strideLength": 5.2,
      "dailyStepGoal": 6000,
      "friends": [1]
    };

    expect(userRepo.getUserData(11)).to.equal(user11);
  });

  it('can calculate the average step goal among all users', function() {

    expect(userRepo.getStepGoalAverage()).to.equal(6000)
  });
});
