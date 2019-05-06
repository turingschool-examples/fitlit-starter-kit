const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = require('../src/User');
const data = require('../data/users-test-data');

describe('User', function () {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function () {
    const user = new User()
    expect(user).to.be.a.instanceOf(User)
  })

  it('should take in user data', function () {
    const user = new User(data)
    expect(user.data).to.equal(data)
  })

  it('should return the first name of the user called', function () {
    const user = new User(data)
    
    expect(user.returnUserFirstName(3)).to.equal('Elaina')
  })
})