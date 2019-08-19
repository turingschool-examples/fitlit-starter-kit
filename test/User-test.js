const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');
const User = require('../src/User');

describe('User', () => {
  
  beforeEach(() => {
    let user = new User(userData)
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })


});