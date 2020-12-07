const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/user.js')
const UserRepository = require('../src/UserRepository');

describe('UserRespository', function() {
  let userRepository;

  beforeEach(function()) {
    userRepository = new UserRepository(userData);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepository)to.be.an.instanceof(UserRepository);
  });





});
