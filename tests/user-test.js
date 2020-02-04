const chai = require('chai');
const expect = chai.expect;

const User = require('../src/users');
const UserRepository = require('../src/UserRepository');

describe('User', function() {

  let user;
  let userInfo;

  beforeEach(function() {
    userInfo = {"id": 2, "name": 'Jarvis Considine', "address": '30086 Kathryn Port, Ciceroland NE 07273', "email": 'Dimitri.Bechtelar11@gmail.com', "strideLength": 4.5, "dailyStepGoal": 5000, "friends": [9,18,24,19]};
    user = new User(userInfo);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of a User', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have an id', function() {
    expect(user.id).to.equal(2);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Jarvis Considine');
  });

  it('should have an address', function() {
    expect(user.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
  });

  it('should have an email', function() {
    expect(user.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  });

  it('should have a stride length', function() {
    expect(user.strideLength).to.equal(4.5);
  });

  it('should have a daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(5000);
  });

  it('should have friends', function() {
    expect(user.friends).to.deep.equal([9,18,24,19]);
  });

});












//
