import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of user', () => {
    const userData = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    };
    const user = new User(userData);
    expect(user).to.be.an.instanceOf(User);
  });

  it('should return a user\'s first name only', () => {
    const userData = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    };
    const user = new User(userData);
    expect(user.getFirstName()).to.equal('Luisa');
  })
});
