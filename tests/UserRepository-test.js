const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/user.js')
const UserRepository = require('../src/UserRepository');

describe('UserRespository', function() {
  let userRepository;

  beforeEach(function()) {
    userRepository = new UserRepository(userData)
  }







});
