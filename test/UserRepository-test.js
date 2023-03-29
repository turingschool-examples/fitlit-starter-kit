import { expect } from 'chai';
import UserRepository from '../src/classes/UserRepository';
import userTestData from './user-test-data';

describe('User Repository', () => {
var testRepository;
  beforeEach(() => { 
   testRepository = new UserRepository(userTestData);
    });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(testRepository).to.be.an.instanceOf(UserRepository);
  })

  it('should store users', function() {
    expect(testRepository.users).to.deep.equal(userTestData);
  })

  it('should find a user by id', function() {
   testRepository.getUser(1);
    expect(testRepository.getUser(1)).to.deep.equal(
    {"id": 1,
    "name": "Trystan Gorczany",
    "address": "9484 Lucas Flat, West Kittymouth WA 67504",
    "email": "Taurean_Pollich31@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 7000,
    "friends": [
      5,
      43,
      46,
      11
    ]});
  })
    it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

  it('should be able to calculate the average step goal', function () {
    expect(testRepository.calculateAverageStepGoal()).to.equal(7428);
  });
});