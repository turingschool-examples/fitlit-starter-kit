import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../data/user-test-data';

describe('User Repository', () => {
  let = userRepository;

  beforeEach(() => {
    userRepository = new UserRepository()
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repsoitory', => {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  });
});
