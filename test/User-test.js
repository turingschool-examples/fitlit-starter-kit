const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const userData = require('../test-data/users-fixtures')

describe('User', function() {

  it('should be a function', function() {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should hold a single users data', function() {
    const user = new User(userData[0]);
    expect(user.userData).to.deep.eql(userData[0]);
  });

  it('should return the users first name', function() {
    const user = new User(userData[0]);
    expect(user.displayUsersFirstName()).to.equal('Luisa');
  });

  it('should return a users friends', function() {
    const user = new User(userData);
    expect(user.findFriends(1)).to.deep.eql([16, 4, 8]);
  });
});