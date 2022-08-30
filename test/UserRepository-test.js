import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import { users } from '../src/data/users';

describe('User Repository', () => {
  let userRepository;
  let userData;

    beforeEach(() => {
      userData = [
        {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10,
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
        "dailyStepGoal": 50,
        "friends": [
          9,
          18,
          24,
          19
        ]
      }
    ]
      userRepository = new UserRepository(userData);

    });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  })

  it('should hold all the users data', () => {
    expect(userRepository.userData).to.equal(userData);
  });

  it('should return a users data when given a user/s id', () => {
    expect(userRepository.findUserData(1)).to.deep.equal({
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10,
        friends: [16,4,8]
      });
  });

  it('should return an average step goal amonst all users', () => {
    expect(userRepository.getAllUserAvgStepGoals()).to.equal(30);
  })
});
