const chai = require('chai')
const expect = chai.expect;


const User = require('../src/user');
const UserRepository = require('../src/userRepository')
const fakeUsers = require('../fakeData/fakeUsers');

describe('User', function() {

  it('should be a function', function() {

    expect(User).to.be.a('function')
  });

  it('should take only represent one user', function() {

    let user = new User()

  });


})