import { expect } from 'chai';
import UserRepository from '../src/UserRepository'

describe('User Repository', () => {
  let repo;


beforeEach(() => {
  repo = new UserRepository([{
    id: 1,
    name: "Luisa Hane",
    address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    email: "Diana.Hayes1@hotmail.com",
    strideLength: 4.3,
    dailyStepGoal: 10000,
    friends: [16, 4, 8]
  }])
})
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');

  });
  it('should be an instance of UserRepository', function () {
    expect(repo).to.be.an.instanceof(UserRepository)
  })
  it('should have user data', function () {
    expect(repo.data).to.deep.equal([{
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    }])
  })
   
  it('should have an average step goal', function () {
    expect(repo.avgStepGoal()).to.equal(10000)
  })
});
