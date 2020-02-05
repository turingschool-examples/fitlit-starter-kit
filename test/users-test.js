const chai = require('chai');
const expect = chai.expect;

const data = require('./data/users.js');
const userData = data.testData;
const User = require('../src/User.js');

describe('User', function() {
  let user;
  beforeEach(function() {
    user = new User(userData[0]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an id', function() {
    expect(user.id).to.equal(1)
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Hannah Hudson')
  });

  it('should have an address', function() {
    expect(user.address).to.equal('1234 Fake Street, Townsville PR 00000-0000')
  });

  it('should have a stride length', function() {
    expect(user.strideLength).to.equal(3.7)
  });

  it('should have a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(2000)
  });

  it('should have some friends', function(){
    expect(user.friends).to.deep.equal([1, 111])
  });

  it('should be able to return a first name', function(){
    expect(user.getFirstName()).to.equal('Hannah')
  });
});
