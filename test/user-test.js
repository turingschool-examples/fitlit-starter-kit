const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/UserRepo');
const usersSampleData = require('../data/users-sample');
const User = require('../src/user');

describe('User', () => {

  let userRepo;
  let user;
  let email = "Dimitri.Bechtelar11@gmail.com";
  
  beforeEach(() => {
    userRepo = new UserRepo(usersSampleData);
    user = new User(userRepo.getUserData(email));
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(user).to.be.an.instanceOf(User);
  });

});
