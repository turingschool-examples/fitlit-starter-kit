const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/sample-users');

describe('User', function() {
  
  
  it('should be a function', function() {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  }); 

  let user;

  beforeEach(function() {
    const userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    }
    user = new User(userData);
  }

  it ('should store user id', function() {
    expect(user.id).to.equal(userData.id);
  })

  it ('should store user name', function() {
    expect(user.name).to.equal(userData.name);
  })

  it ('should store user address', function() {
    expect(user.address).to.equal(userData.address);
  })

  it ('should store user email', function() {
    expect(user.email).to.equal(userData.email);
  })

  it ('should store user stride length', function() {
    expect(user.strideLength).to.equal(userData.strideLength);
  })

  it ('should store user daily step goal', function() {
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  })

  // it ('should return a user first name', function() {
  //   expect(user.id).to.equal(userData.id);
  // })

});







})