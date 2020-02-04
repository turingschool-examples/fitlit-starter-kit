const chai = require('chai');
const expect = chai.expect;

const User = require('./test/users.js');

describe('User', function() {
  beforeEach(function(done) {
    const user = new User;
  });

  it('should be a function', function() {
    expect(user).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });

  it('should have a name', function() {
  
  })
})