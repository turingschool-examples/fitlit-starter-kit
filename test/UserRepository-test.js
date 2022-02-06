import { expect } from 'chai';
import UserRepository from '../src/js/UserRepository';
import userTestData from '../src/data/user-test-data';
import User from '../src/js/User';

describe('User Repository', () => {
  let userRepository;
  let user1;
  let user2;

  beforeEach(() => {
    userRepository = new UserRepository(userTestData)
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepsitory', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should hold the users', () => {
    expect(userRepository.users).to.be.an('array');
  });

  it('should hold an instance of User', () => {
    expect(user1).to.eql(userRepository.users[0]);
  });

  it('should be able to return the user by id', () => {
    expect(userRepository.getUser(user1.id)).to.eql(user1);
  });

  it('should be able to return all of the user\'s average step count', () => {
    expect(userRepository.averageStepGoal()).to.eql(7500);
  });
});
