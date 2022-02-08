import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import userData from '../src/data/users';

describe('User Repository', () => {

  let userRepository;

    beforeEach(() => {
      userRepository = new UserRepository(userData);
    });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should hold all of the user objects', () => {
    expect(userRepository.allData).to.equal(userData);
  });

  it('should provide the user data, given the ID', () => {
    expect(userRepository.dataByID(1)).to.deep.equal(
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
      }
    )
  });

  it('should calculate the average step goal amonst all users', () => {
    expect(userRepository.averageStepGoal()).to.equal(6700);
  });

});
