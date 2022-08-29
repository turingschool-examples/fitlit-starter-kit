// import { expect } from 'chai';
// import UserRepository from '../src/UserRepository';
//
// describe('User Repository', () => {
//   it('should be a function', function () {
//     expect(UserRepository).to.be.a('function');
//   });
// });
const chai = require('chai');
const expect = chai.expect;

describe ('UserRepository', function() {

  it('should be a function', function() {
    var userRepository = new UserRepository();

    expect(UserRepository)to.be.a('function')
  });

  it('should take in user information', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

  it('should store all user information', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

  it('should determine which user information to retrieve by ID', function() {
    var userRepository = new UserRepository(data);

    userRepository.findUserData(id)

    expect(userRepository.id)to.(id)
  });

  it('should ', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

  it('should find all user step goals', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

  it('should add all user step goals', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });


  it('should find the total number of users', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

  it('should return average of all user step goals', function() {
    var userRepository = new UserRepository(data);

    expect()to.()
  });

});
