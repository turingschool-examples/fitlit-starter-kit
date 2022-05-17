import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'

describe('User Repository', () => {

  let userRepository;

  beforeEach( () => {
    userRepository = new UserRepository(userData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  });

  it('should store user data', () => {
    expect(userRepository.users).to.equal(userData);
  });

  it('should have a function that returns a user object by its id number', () => {
    expect(userRepository.getUserById(1)).to.deep.equal(userData[0]);
  });
});