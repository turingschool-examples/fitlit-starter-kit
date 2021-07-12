import { expect } from 'chai';
import UserRepository from '../src/UserRepository';


describe.only('User Repository', () => {
let user1, user2, user3;
let userData;
let userRepository;

beforeEach(() => {
  user1 = {
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
  user2 = {
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
  };
  user3 = {
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
  };

  userData = [user1, user2, user3];

  userRepository = new UserRepository(userData);

})

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should be able to store user data', () => {
    expect(userRepository.userData).to.be.an('array');
    expect(userRepository.userData).to.equal(userData);
    expect(userRepository.userData[1]).to.equal(user2);
    expect(userRepository.userData[1].strideLength).to.equal(4.5);
  });

  it('should return a user\'s data given an ID', () => {
    let foundUser = userRepository.returnUserData(3);

    expect(foundUser).to.be.an('object');
    expect(foundUser).to.equal(user3);
    expect(foundUser.name).to.equal('Herminia Witting');
  });

  it('should return the average step goal amongst all users', () => {
    let avgSteps = userRepository.calculateAvgStepGoal();

    expect(avgSteps).to.equal(6667);
  });
});
