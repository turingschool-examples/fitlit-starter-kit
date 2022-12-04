import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users';

describe('User Repository', () => {
  let userRepo 
  let sampleData 

  beforeEach(() => {
    sampleData = userData.slice(0,3)
    userRepo = new UserRepository(sampleData)
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('Should be instance of userRepository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository)
  })
  it('Should have a user data property', function (){
    expect(userRepo.userData).to.be.an('array')
  })
  


});