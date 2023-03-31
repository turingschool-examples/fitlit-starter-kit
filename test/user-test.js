import { expect } from 'chai';
import userTestData from '../test/user-test-data';
import User from '../src/data/User';

describe('User', function() {
  let users;

  beforeEach(() => {
    users = new User(userTestData)
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(users).to.be.an.instanceof(User);
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