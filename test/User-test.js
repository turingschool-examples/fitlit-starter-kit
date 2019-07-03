const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;

describe('User', () => {

  let user;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
    user = new User(userRepo.returnUserData(2));
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should return the user\'s first name', () => {
    const firstName = user.returnUserFirstName();
    expect(firstName).to.equal('Jarvis');
  })

})