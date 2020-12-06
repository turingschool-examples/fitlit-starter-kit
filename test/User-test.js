const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User(userData);
  })

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it.skip('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it.skip('should have an id', () => {
    expect(user.id).to.equal();
  })

  it.skip('should have a name', () => {
    expect(user.name).to.equal();
  })

  it.skip('should have an address', () => {
    expect(user.address).to.equal();
  })

  it.skip('should have an email', () => {
    expect(user.email).to.equal();
  })

  it.skip('should have a stride length', () => {
    expect(user.strideLength).to.equal();
  })

  it.skip('should have a daily step goal', () => {
    expect(user.dailyStepGoal).to.equal();
  })

  it.skip('should have some friends', () => {
    expect(user.friends).to.deep.equal();
  })

  it.skip('should return a users first name', () => {
    expect(user.returnFirstName()).to.equal('');
  })

})
