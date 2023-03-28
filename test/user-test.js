import { expect } from 'chai';
import UserRepository from '../src/data/UserRepository';
import userTestData from '../src/data/user-test-data';

describe('User', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new UserRepository(userTestData[0]);
    user2 = new UserRepository(userTestData[1]);
    user3 = new UserRepository(userTestData[2]);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user1).to.be.an.instanceof(UserRepository);
  }); 

  it('should be able to take in a user id', function() {
    expect(user1.id).to.be.equal(1)
  });

});