const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const userTestData = testData.testUsers;
const User = require('../src/User');

describe('User', () => {
  let users;

  beforeEach(() => {
    users = userTestData.map(userObject => {
      const user = new User(userObject);
      return user;
    });
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should be an instance of User', () => {
    expect(users[0]).to.be.an.instanceof(User);
  })

  it('should have an id', () => {
    expect(users[0].id).to.equal(1);
  })

  it('should have a name', () => {
    expect(users[1].name).to.equal('Tashia Davis');
  })

  it('should have an address', () => {
    expect(users[2].address).to.equal('28476 Turing Dr, Denver CO 357687');
  })

  it('should have an email', () => {
    expect(users[0].email).to.equal('gonzagasucks@hotmail.com');
  })

  it('should have a stride length', () => {
    expect(users[1].strideLength).to.equal(1.2);
  })

  it('should have a daily step goal', () => {
    expect(users[2].dailyStepGoal).to.equal(8520);
  })

  it('should have some friends', () => {
    expect(users[0].friends).to.deep.equal([2, 3]);
  })

  it('should return a users first name', () => {
    expect(users[1].returnFirstName()).to.equal('Tashia');
  })

})
