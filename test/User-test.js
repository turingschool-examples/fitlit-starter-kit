const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', () => {
  
  let userObj;
  let user1;

  beforeEach( () => {
    userObj = {
      "id": 1,
      "name": "George Springer",
      "address": "1 Astros Lane, Houston, TX 77777",
      "email": "leadoffHitter@yahoo.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3
      ]
    }
    user1 = new User(userObj);
  }); 

  it('should return the users first name', () => {
    expect(user1.returnFirstName()).to.equal('George');
  });

  it('should have user object properties', () => {
    expect(user1.friends.length).to.equal(2);
    expect(user1.address).to.equal('1 Astros Lane, Houston, TX 77777');
  })
})
