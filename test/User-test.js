import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users.js'

describe('User Data', function() {
  let user
  
  beforeEach(function() {
    user = new User(userData[1])
  });
  
  it('should be a function', function() {
    expect(User).to.be.a('function')
  });
  
  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User)
  });
  
  it('should have a number as an ID', function() {
    expect(user.id).to.equal(2)
  });

  it('should have a string for a name', function() {
    expect(user.name).to.equal('Jarvis Considine')
  });

  it('should take in an address', function() {
    expect(user.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273')
  });

  it('should take in the length of stride by the foot', function() {
    expect(user.strideLength).to.equal(4.5)
  });

  it('should take in the user\'s set goal for the day', function() {
    expect(user.dailyStepGoal).to.equal(5000)
  });

  it('should take in the length of stride by the foot', function() {
    expect(user.friends).to.deep.equal([ 9, 18, 24, 19 ])
  });

  it('should only show the user\'s first name', function() {
    const firstName = user.showFirstName()
    
    expect(firstName).to.equal('Jarvis')
  });
});