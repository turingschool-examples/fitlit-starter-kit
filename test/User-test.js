const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo')
const data = require('../data/users-test-data')

describe('User', function () {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    const userRepo = new UserRepo(data)
    const user = new User(userRepo.usersData, 1)
    expect(user).to.be.a.instanceOf(User)
  })

  it('should return the first name of the user called', function () {
    const userRepo = new UserRepo(data)
    const user = new User(userRepo.usersData, 1)
    expect(user.returnUserFirstName()).to.equal('Shayne')
  })

})