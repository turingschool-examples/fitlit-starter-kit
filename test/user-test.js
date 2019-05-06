const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {

  it('should be a function', () => {
    const user = new User();
    expect(User).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  })

  




})