import { expect } from 'chai';
import userTestData from '../test/user-test-data';
import User from '../src/data/User';

describe('User', function() {
  let users;

  beforeEach(() => {
    users = new User(userTestData);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(users).to.be.an.instanceof(User);
  });
  
  it('should take in a users id', function() {
    expect(users.users[0].id).to.equal(1);
  });

  it('should take in a users name', function() {
    expect(users.users[0].name).to.equal("Trystan Gorczany");
  });

  it('should take in a users address', function() {
    expect(users.users[0].address).to.equal("9484 Lucas Flat, West Kittymouth WA 67504");
  });

  it('should take in a users email', function() {
    expect(users.users[0].email).to.equal("Taurean_Pollich31@gmail.com");
  });

  it('should take in a users stride length', function() {
    expect(users.users[0].strideLength).to.equal(4);
  });

  it('should take in a users daily step goal', function() {
    expect(users.users[0].dailyStepGoal).to.equal(7000);
  });

  it('should take in a users friends', function() {
    expect(users.users[0].friends).to.deep.equal([5, 43, 46, 11]);
  });

  it('should return user data from their id', function() {
    expect(users.getUserData(1)).to.deep.equal(userTestData[0])
    expect(users.getUserData(2)).to.deep.equal(userTestData[1])
  });

  it('should return the average of all user step goals', function() {
    expect(users.getAverageStepGoal()).to.equal(6333)
  });

  it('should return the users first name', function() {
    expect(users.getUserFirstName(1)).to.equal('Trystan')
    expect(users.getUserFirstName(2)).to.equal('Tyreek')
  });
});