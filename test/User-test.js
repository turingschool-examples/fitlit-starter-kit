import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';
import { user } from '../src/data/users';

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

  
});
