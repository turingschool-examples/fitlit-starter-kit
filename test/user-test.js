const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const userData = require('../test/sampleUsers');
const data = userData[1];

let user;

describe('user', function() {
  beforeEach(() => {
    user = new User(data);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should have a name', function() {
    expect(user.name).to.equal("Jarvis Considine")
  });

  it('should return the first name', function() {
    expect(user.returnFirstName()).to.equal('Jarvis')
  });


});

