import { expect } from 'chai';
import UserRepository from '../src/data/UserRepository';
import userTestData from './user-test-data';
import hydrationTestData from './hydration-test-data.js';


describe('User Repository', function() {
  let allUserInfo;

  beforeEach(() => {
    allUserInfo = new UserRepository(userTestData, hydrationTestData)
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(allUserInfo).to.be.an.instanceof(UserRepository);
  }); 
});