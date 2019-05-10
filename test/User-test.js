const chai = require('chai');
const expect = chai.expect;

var User = require('../src/User');

describe('User', function () {
  let userRepo;
  let user;

  beforeEach(function () {
    userRepo = new UserRepo()
    user = new User(1)
  })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    expect(user).to.be.a.instanceOf(User)
  })

  it('should be able to return a user object by ID', function () {
    expect(user.returnUserData(3)).to.equal(userRepo.users[2])
  })

  it('should return the first name of the user called', function () {
    expect(user.returnUserFirstName()).to.equal('Nyasia')
  })



})