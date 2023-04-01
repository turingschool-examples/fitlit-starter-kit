import {
  expect
} from 'chai';
import UserRepository from '../src/classes/UserRepository';
import userTestData from './user-test-data';
// import User from '../src/classes'

describe('User Repository', () => {
  var testRepository;
  beforeEach(() => {
    testRepository = new UserRepository(userTestData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(testRepository).to.be.an.instanceOf(UserRepository);
  });

  it('should store users', () => {
    expect(testRepository.users).to.deep.equal(userTestData);
  });

  it('should find a user by id and return users data', () => {
    testRepository.getUser(1);
    expect(testRepository.getUser(1)).to.deep.equal({
      "id": 1,
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
      ]
    });
  });

  it('should be able to calculate the average step goal of all users', () => {
    testRepository
    expect(testRepository.calculateAverageStepGoal()).to.equal(8300);
  });

  it("should be able to return an array of all the user's friend's names", () => {
    expect(testRepository.returnUserFriendsName(1)).to.deep.equal(['Brycen Rutherford',
      'Pedro Nolan',
      'Santa Zboncak',
      'Kailey Langosh'
    ]);
  });
});