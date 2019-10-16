const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/userRepo');
const userData = require('../test/sampleUsers');

let userRepo;

describe('userRepo', function() {
  beforeEach(() => {
    userRepo = new UserRepo(userData);
  });

  it('should be an instance of userRepo', function() {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });

  it('should store a list of users', function() {
    expect(userRepo.users).to.deep.equal(userData);
  });

  it('should return a users info when given the users id', function() {
    expect(userRepo.findUser(1)).to.deep.equal(userData[0]);
  });

  it('should return the average daily steps goal amongst users', function() {
    expect(userRepo.calculateAvgStepGoal()).to.equal(6400)
  });
  
});
