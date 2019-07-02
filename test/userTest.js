const chai = require('chai')
const expect = chai.expect;


const UserRepository = require('../src/user');
const fakeUsers = require('../fakeData/fakeUsers');

describe('User', function() {

  it('should be a function', function() {

  
    expect(User).to.be.a('function')
  });

})