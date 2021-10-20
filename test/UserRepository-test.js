import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';

describe('User Repository', () => {
  let userData, userRepository;

  beforeEach(function(){
    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [16, 4, 8]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [9, 18, 24, 19]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [19, 11, 42, 33]
      }]
    userRepository = new UserRepository(userData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should display user data based on user id', function () {
    expect(userRepository.showData(1)).to.deep.equal(userData[0]);
    expect(userRepository.showData(0)).to.deep.equal(undefined);
  });

  it('should display average step goal amongst all users',function () {
    expect(userRepository.calculateAvgStepGoal()).to.equal(6666.67);
  });
});
