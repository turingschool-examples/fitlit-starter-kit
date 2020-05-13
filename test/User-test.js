const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const userDataTest = require('../data/userDataTest')

describe('User', function() {
  let user;

  beforeEach(() => {
    user = new User(userDataTest)
  })
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user).to.be.an.instanceof(User);
  });
})
