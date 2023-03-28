const chai = require('chai');
const expect = chai.expect;
import userTestData from '../test/user-test-data';
import User from '../src/data/User';

describe('User', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[2]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user1).to.be.an.instanceof(User);
  }); 

  it('should be able to take in a user id', function() {
    expect(user1.id).to.be.equal(1)
  });

  it('should be able to take in a user name', function() {
    expect(user1.name).to.be.equal('Trystan Gorczany')
  });

});