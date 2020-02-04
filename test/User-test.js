const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User(1, 'Luisa Hane', '15195 Nakia Tunnel, Erdmanport VA 19901-1697', 'Diana.Hayes1@hotmail.com', 4.3, 10000, [16, 4, 8]);

  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

})
