const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const userDataTest = require('../data/userDataTest')

describe('User', function() {
  let user;

  beforeEach(() => {
    user = new User(userDataTest)
  })


})
