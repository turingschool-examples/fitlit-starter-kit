import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users';

describe('User', () => {

  let user1, user2;

    beforeEach(() => {
      user1 = new User(userData[0]);
      user2 = new User(userData[1]);
    });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should take in an object as a parameter', () => {
    expect(user1.userData).to.be.an('object');
    expect(user2.userData).to.be.an('object');
  })

});
