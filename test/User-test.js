import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';
import { users } from '../src/data/users';

describe('User', () => {

  let usersData;
  let user1;
  // let userRepository;
  // let userSleepData;
  // let userHydrationData;

  beforeEach( () => {
    usersData = {
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
    user1 = new User(usersData);
    // userRepository = new UserRepository(user1); //Not sure if this is correct
  });


  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('should have a user id', () => {
    expect(user1.id).to.equal(1);
  });

  it('should have a user name', () => {
    expect(user1.name).to.equal('Luisa Hane');
  });

  it('should have a user address', () => {
    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });

  it('should have a user email', () => {
    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
  });

  it('should have a user\s strideLength', () => {
    expect(user1.strideLength).to.equal(4.3);
  });

  it('should have a user\s daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(10000);
  });

  it('should have a list of user\s friends', () => {
    expect(user1.friends.length).to.equal(3);
  });

  it('should return a users name', () => {
    expect(user1.returnUserName()).to.equal('Luisa');
  });
});
