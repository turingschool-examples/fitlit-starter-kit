const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const users = require('../data/users');

describe('User', function() {
  
  it('should be a function', function() {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should instatiate a new User', function() {
    const user = new User();
    expect(user).to.be.an.instanceOf(User);
  });

  it('should be able to get user by id', function() {
    const user = new User(users[0]);
    expect(user.person.id).to.equal(1);
  });

  it('should be able to return the first name of a user', function() {
    const user = new User(users[0]);

    expect(user.returnFirstName()).to.equal('Nyasia')
  });

  
})