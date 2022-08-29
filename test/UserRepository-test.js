import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import { userData } from '../src/data/users';

describe('User Repository', () => {
  let userRepository;

    beforeEach(() => {
      userRepository = new UserRepository(userData);
    });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  })

  it('should hold all the users data', () => {
    expect(userRepository.findUserData().to.deep.equal())
  })

  it('should return a users data when given a user/s id', () => {
    expect(userRepository.findUserData().to.deep.equal())
  })

  it('should return an average step goal amonst all users', () => {
    expect(userRepository.calculateAverageStepGoals()).to.equal();
  })
});
