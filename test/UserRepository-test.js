import { expect } from 'chai';
import { beforeEach } from 'mocha';
import User from '../src/User';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js';

describe('User Repository', () => {
  let user1, user2, user3, userRepository;

beforeEach(() => {
  user1 = new User(userData[0])
  user2 = new User(userData[1])
  user3 = new User(userData[2])
  userRepository = new UserRepository([user1, user2, user3])
})

  it.skip('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it.skip('should instantiate a new user repository', function () {

    expect(userRepository).to.be.a('function');
    })
    
  it.skip('should take in user data', function() {

    expect(user1.data).to.equal(
      {"id": 1,
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
      })
    })
    
  it.skip('should supply user data when given id', function() {
  
    userRepository.getData()
  
    expect(user2.id).to.equal(user2.userData)
    })
    
  it.skip('should give the average step goal of all users', function () {
  
    userRepository.stepAverage()
  
    expect()
    })
});


//test the data being passed in -> test this.data

//test the output of the get user data method, make sure the id argument works

//test the output of the average step goals -> make sure the math is solid