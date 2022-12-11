import { expect } from 'chai';
import User from '../src/User';
import UserRepository from '../src/UserRepository';

describe('UserRepository', () => {
  let userRepository, users;

  beforeEach(() => {

    users = {
      userData: [
        {
          id: 1,
          name: "Luisa Hane",
          address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          email: "Diana.Hayes1@hotmail.com",
          strideLength: 4.3,
          dailyStepGoal: 10000,
          friends: [
            16,
            4,
            8
          ]
        },
        {
          id: 2,
          name: "Jarvis Considine",
          address: "30086 Kathryn Port, Ciceroland NE 07273",
          email: "Dimitri.Bechtelar11@gmail.com",
          strideLength: 4.5,
          dailyStepGoal: 5000,
          friends: [
            9,
            18,
            24,
            19
          ]
        },
        {
          id: 3,
          name: "Herminia Witting",
          address: "85823 Bosco Fork, East Oscarstad MI 85126-5660",
          email: "Elwin.Tromp@yahoo.com",
          strideLength: 4.4,
          dailyStepGoal: 5000,
          friends: [
            19,
            11,
            42,
            33
          ]
        }]
    }

    userRepository = new UserRepository(users)
  })

  it('should be a function', function () {

    expect(UserRepository).to.be.a('function');
  });

  it('should instantiate a new user repository', function () {

    expect(userRepository.data).to.deep.equal(users);
  })

  it('should take in user data', function () {

    expect(userRepository.data.userData[0]).to.deep.equal(
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
      })

  })

  it('should supply user data when given id', function () {

    expect(userRepository.getData(userRepository.data.userData[1].id)).to.deep.equal({
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [
        9,
        18,
        24,
        19
      ]
    })

  })

  it('should give the average step goal of all users', function () {

    expect(userRepository.stepGoalAverage()).to.equal(6666)
  })
});