const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/practice-users');
const User = require('../src/User');

describe('User', function() {

  let user;

  beforeEach(() => {

    user = new User(userData[0]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
    
  it('should be an instance of UserRepository', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should return user name', function() {
    expect(user.returnUserName()).to.equal('Herminia');
  });
})