const chai = require('chai');
const expect = chai.expect;

const UserRepo = require("../src/userRepo");
const userData = require("../data/sampleUsers");

describe('User', function() {

  it('should be a function', function() {
    expect(UserRepo).to.be.a('function');
  })
  
  it('should be an instance of User', function() {
    let users = new UserRepo(userData);
    expect(users).to.be.an.instanceof(UserRepo);
  })

  it('should return the user data per the user ID', function() {
    let users = new UserRepo(userData);
    expect(users.returnUserData(5)).to.deep.eql(userData[4]);
  })
  
  it('should return the average step goal of all users', function() {
    let users = new UserRepo(userData);
    expect(users.averageGoalSteps()).to.equal(6200);
  })
  
});