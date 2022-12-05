import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/UserRepository';

describe('User Repository', () => {
  let users;
  let userRepo;

  beforeEach(() => {
    let nonClassUsers = [{
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
    }]

    users = nonClassUsers.map(item => new User(item))
    userRepo = new UserRepository(users)
  })

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be a UserRepository Class', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should store users in an array as a property', function () {
    expect(userRepo.users).to.deep.equal([users]);
  });

  it('the stored users in the property array should be instances of the User Class', function () {
    expect(userRepo.users[0]).to.be.an.instanceOf(User);
  });

  it('should have a method to return a users data when given their user ID', function () {
    expect(userRepo.returnUserData(2)).to.deep.equal({
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
    });
  });

  it('should have a method to return the avg step goal amongst all users', function () {
    expect(userRepo.returnAverageDailyStepGoal()).to.equal(20000/3);
  });


});