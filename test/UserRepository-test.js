import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users'

describe('User Repository', () => {

  const userRepo = new UserRepository(userData);

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  })

  it('should have user data', function () {
    expect(userRepo.userData).to.eql(userData)
  })

  it('should be able to find a user by ID', function () {
    userRepo.findID(2)
    expect(userRepo.currentUser).to.equal(userData[1])
  })

});