import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users';
import User from '../src/User'

describe('User Repository', () => {
  let userRepo 
  let sampleData 

  beforeEach(() => {
    sampleData = userData.slice(0,3).map((user) => {
      return new User(user)
    })
    userRepo = new UserRepository(sampleData)
  })
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });
  it('Should be instance of userRepository', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepository)
  })
  it('Should have a user data property', function (){
    expect(userRepo.userData[0]).to.be.an.instanceOf(User)
  })
  it('Should return user data given an id',function(){
    expect(userRepo.getUserData(1)).to.deep.equal(sampleData[0])
  })
  it('Should return avarage step goal amoungst all users', function(){
    expect(userRepo.calculateAverageStepGoal()).to.equal(6666.67)
  })
  it('Should return friends firsts names', function(){
    expect(userRepo.getFriendData([1, 2])).to.deep.equal(['Luisa', 'Jarvis'])
  })
  


});