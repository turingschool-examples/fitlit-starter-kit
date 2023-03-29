import { expect } from 'chai';
import userTestData from '../test/user-test-data';
import User from '../src/data/User';

describe('User', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[2]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user1).to.be.an.instanceof(User);
  }); 

  it('should be able to take in a user id', function() {
    expect(user1.id).to.equal(1)
  });

  it('should be able to take in a user name', function() {
    expect(user1.name).to.equal('Trystan Gorczany')
  });

  it('should be able to take in a user address', function() {
    expect(user1.address).to.equal('9484 Lucas Flat, West Kittymouth WA 67504')
  });

  it('should be able to take in a user email', function() {
    expect(user1.email).to.equal('Taurean_Pollich31@gmail.com')
  });

  it('should be able to take in a user stride length', function() {
    expect(user1.strideLength).to.equal(4)
  });

  it('should be able to take in a user daily step goal', function() {
    expect(user1.dailyStepGoal).to.equal(7000)
  });

  it('should be able to take in a user friends', function() {
    expect(user1.friends).to.deep.equal([5, 43, 46, 11])
  });

  it('should return user data from their id', function() {
    expect(user1.getUserData(1)).to.deep.equal(user1)
    expect(user2.getUserData(2)).to.deep.equal(user2)
  });

  it('should return the average of all user step goals', function() {
    expect(user1.getAverageStepGoal()).to.equal(6333)
  });

  it('should return the users first name', function() {
    expect(user1.getUserFirstName()).to.equal('Trystan')
    expect(user2.getUserFirstName()).to.equal('Tyreek')
  });
});