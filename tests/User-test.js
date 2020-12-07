const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User({
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      })
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have all properties', function() {
    expect(user.userID).to.equal(1)
    expect(user.name).to.equal('Luisa Hane')
    expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user.strideLength).to.equal(4.3)
    expect(user.dailyStepGoal).to.equal(10000)
    expect(user.friends).to.deep.equal([16, 4, 8])
  });

  it('should return a first name', function() {
    expect(user.getFirstName()).to.equal('Luisa')
  });

});
