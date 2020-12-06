const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/test-data');
const userTestData = testData.testUsers;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('User', () => {
  let allUserData, user1, user2, user3;

  beforeEach(() => {
    allUserData = new UserRepository(userTestData);
    user1 = new User(allUserData.data[0]);
    user2 = new User(allUserData.data[1]);
    user3 = new User(allUserData.data[2]);
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  })

  it('should have an id', () => {
    expect(user1.id).to.equal(1);
  })

  it('should have a name', () => {
    expect(user2.name).to.equal('Tashia Davis');
  })

  it('should have an address', () => {
    expect(user3.address).to.equal('28476 Turing Dr, Denver CO 357687');
  })

  it('should have an email', () => {
    expect(user1.email).to.equal('gonzagasucks@hotmail.com');
  })

  it('should have a stride length', () => {
    expect(user2.strideLength).to.equal(1.2);
  })

  it('should have a daily step goal', () => {
    expect(user3.dailyStepGoal).to.equal(8520);
  })

  it('should have some friends', () => {
    expect(user1.friends).to.deep.equal([2, 3]);
  })

  it('should return a users first name', () => {
    expect(user2.returnFirstName()).to.equal('Tashia');
  })

})
