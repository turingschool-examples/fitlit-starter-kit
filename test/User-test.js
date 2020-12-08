const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let data, user;

  beforeEach(() => {
    data = {
      "id": 1,
      "name": "Brian Forbes",
      "address": "123 Blah St, Denver CO, 66666",
      "email": "stuffandthings@gmail.com",
      "strideLength": 2.4,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3,
        4
      ]
    };

  });    
});