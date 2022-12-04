import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {
  let userRepo 
  beforeEach(() => {
    userRepo = new UserRepository()
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('Should be instance of userRepository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository)
    
  })
});