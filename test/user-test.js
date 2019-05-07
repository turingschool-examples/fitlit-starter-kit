const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const testUser = require('../src/testUser');

const testPerson = {
  "id": 1,
  "name": "Nyasia Weber",
  "address": "270 August Meadows, Maribelside SD 36129",
  "email": "Jordane_Schultz@yahoo.com",
  "strideLength": 4.7,
  "dailyStepGoal": 8000
}

describe('User', function() {
  let user;
  beforeEach(() => {
    user = new User(testUser.testUserData[0]);
    
  })

  it('should be a function', () => {
    expect(User).to.be.a('function')
  })

  it('should be a new instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  })

  it('should be a new instance of User', () => {
    expect(user.userData).to.deep.equal(testPerson);
  })

  it('should return the users first name', () => {
    expect(user.getFirstName()).to.equal("Nyasia");
  })

})