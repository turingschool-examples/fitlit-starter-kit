const chai = require("chai");
const expect = chai.expect;

const UserRepository = require('../src/users-repository');
const userData  = require('../data/test-data');
const users = userData;


describe('UserRepository', function() {

  beforeEach(() => {
    userRepo = new UserRepository(users);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should store all users', function() {
    console.log(userRepo)
    expect(userRepo).to.deep.equal(userRepo);
  });


});