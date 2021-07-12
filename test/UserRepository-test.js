import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository();
  })
  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });
});
