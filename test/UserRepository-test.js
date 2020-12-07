const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/test-data');
const userTestData = testData.testUsers;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', () => {
  let users, userRepository;

  beforeEach(() => {
    users = userTestData.map(userData => {
      const user = new User(userData);
      return user;
    });
    userRepository = new UserRepository(users);
  })

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  })

  it('should hold all User objects', () => {
    expect(userRepository.data[0]).to.deep.equal(users[0]);
  })

  it('should return a users data given their user ID', () => {
    expect(userRepository.returnUserData(1)).to.deep.equal({
      id: 1,
      name: "Cole Fiscus",
      address: "7362 Gonzaga Blvd, Spokane WA 19982",
      email: "gonzagasucks@hotmail.com",
      strideLength: 5.8,
      dailyStepGoal: 400,
      friends: [
        2,
        3
      ]
    });
  })

  it('should calculate the average step goal amongst all users', () => {
    expect(userRepository.calculateAverageStepGoal()).to.equal(7973);
  })

})
