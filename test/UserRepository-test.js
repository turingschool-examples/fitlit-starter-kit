import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js'

describe('User Repository', () => {
  let newUserRepository
  beforeEach(() => {
    newUserRepository = new UserRepository(userData)
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('Should be an instance of User Repository', function () {
    expect(newUserRepository).to.be.an.instanceof(UserRepository)
  })

  it('Should have an array of users', function () {
    expect(newUserRepository.users).to.deep.equal(userData)
  })

  it('Should return the user info based on the user id', function () {
    expect(newUserRepository.getUserData(1)).to.deep.equal(userData[0])
  })

  it('Should be able to calculate the average step goal of all users', function () {
    expect(newUserRepository.getAverageStepGoal()).to.equal(6700)
  })
});