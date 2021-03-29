const chai = require('chai');
const expect = chai.expect;
const User = require ('../src/User');
const UserRepository = require ('../src/UserRepository');
const userTestingData = require ('../Test/User-TestingData.js');

describe('User', () => {
  let user, userRepository;
  beforeEach(() => {
    userRepository = new UserRepository()
    user = new User(userTestingData[0].id, userTestingData[0].name, userTestingData[0].address, userTestingData[0].email, userTestingData[0].strideLength, userTestingData[0].dailyStepGoal, userTestingData[0].friends)
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an id', () => {
    expect(userTestingData[0].id).to.equal(1);
  });

  it('should have a name', () => {
    expect(userTestingData[0].name).to.equal('Luisa Hane');
  });

  it('should have an address', () => {
    expect(userTestingData[0].address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });

  it('should have an email address', () => {
    expect(userTestingData[0].email).to.equal('Diana.Hayes1@hotmail.com');
  });

  it('should have a stride length', () => {
    expect(userTestingData[0].strideLength).to.equal(4.3);
  });

  it('should have a daily step goal', () => {
    expect(userTestingData[0].dailyStepGoal).to.equal(10000);
  });

  it('should have friends', () => {
    expect(userTestingData[0].friends).to.deep.equal([16, 4, 8])
  });

});