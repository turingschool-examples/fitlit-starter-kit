import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
const userTestData = require('../src/data/users')

describe('User Repository', () => {
  let userRepository;

  beforeEach(function(){
    userRepository = new UserRepository(userTestData);
  });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should display user data based on user id', function () {
    expect(userRepository.showData(1)).to.deep.equal(userTestData[0]);
    expect(userRepository.showData(0)).to.deep.equal(undefined);
  });

  it('should display average step goal amongst all users',function () {
    const user = userTestData[0];
    const user1 = userTestData[1];
    const user2 = userTestData[2];
    const users = [user, user1, user2]
    userRepository = new UserRepository(users)
    expect(userRepository.calculateAvgStepGoal()).to.equal(6666.67);
  });

});
