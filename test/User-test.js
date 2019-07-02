const chai = require('chai');
const expect = chai.expect;

const data = require('../data/practice-users');
const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {
    const user = new User(data);
    expect(User).to.be.a('function');
  });
    
  it('should be an instance of UserRepository', function() {
    const user = new User(data);
    expect(user).to.be.an.instanceof(User);
  });
})