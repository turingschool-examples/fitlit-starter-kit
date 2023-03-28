import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userTestData from './user-test-data';

describe('User Repository', () => {
  var testRepository;

  beforeEach(() => { 
    testRepository = new UserRepository(userTestData);
  });
  
  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be able to calculate the average step goal', function () {
    expect(testRepository.calculateAverageStepGoal()).to.equal(7428);
  });
});