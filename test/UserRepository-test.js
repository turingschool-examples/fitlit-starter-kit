import { expect } from 'chai';
import UserRepository from '../src/UserRepository'
import userData from '../src/data/users';

describe('User Repository', () => {
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');

  });
  it('should have user data', function () {
    let user1 = new UserRepository(userData)
    expect(user1.data).to.be.a('array')

  })
  it('should be able to fetch one persons data', function () {
    let user1 = new UserRepository(userData)
    user1.findUsersData(1)
    expect(user1.currentUser).to.deep.equal([{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    }])
  })
  it('should have an average step goal', function () {
    let user1 = new UserRepository(userData)
    user1.avgStepGoal()
    expect(user1.averageStepGoal).to.equal(6700)
  })
});