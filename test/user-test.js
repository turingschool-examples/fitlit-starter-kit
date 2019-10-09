const chai = require('chai');
const expect = chai.expect;

const User = require('../class/user');

describe('User', function() {
  let userData = {};

  beforeEach( () => {
    userData = new User({
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

  it('should represents a single User', function() {
    expect(userData.name).to.equal('Luisa Hane');
  });

  it('should have a parameter to take in a userData object', function() {
    expect(userData).to.deep.equal({
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

  it('should hold each users properties from the data file')

});
