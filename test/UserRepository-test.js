import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User Repository', () => {

let userData;
let userRepository;

  beforeEach( () => {
    userData = [
      {
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
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }];

    userRepository = new UserRepository(userData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  });

  it('should return a user\'s data when given an id', () => {
    
      // console.log(userRepository.dailyStepGoal)

    expect(userRepository.getUserById(1)).to.deep.equal(userRepository.users[0]);
  });

  it('should return the average step goal of all users', () => {


  });

  // it("should take in user data", function () {
  //
  //   let repository = new UserRepository(userData)
  //   let data = repository.data
  //   expect(data.length).to.equal(3)
  // })
  //
  // it("should return a user's data when given an id", function () {
  //   let repository = new UserRepository(userData)
  //   expect(repository.findUserData(1)).to.equal(userData[1])
  // })
});
