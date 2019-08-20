const chai = require('chai');
const expect = chai.expect;

// const data = require('../data/test-data.js');

const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {

    let obj = {
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
    }

    const user = new User(obj);
    expect(User).to.be.a('function');
  });

});
