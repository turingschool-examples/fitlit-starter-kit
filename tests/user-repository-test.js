const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/users-repository');
const userData  = require('../data/test-data');
const users = userData;


describe('UserRepository', function() {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository(users);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should store all users', () => {
    expect(userRepo.users.length).to.deep.equal(5);
  });

  it('should find a specific user', () => {
    // console.log(userRepo.users.userData[0].getUser(2))
    expect(userRepo.getUser(4)).to.equal(users[3])
  })

  it('should return average step goal of all users', () => {
    expect(userRepo.returnAvgStepGoal()).to.equal(6400)
  });

});
