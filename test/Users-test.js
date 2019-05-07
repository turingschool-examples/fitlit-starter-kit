const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {
    // const user = new User();
    expect(User).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });
  it('should return user first name', function() {
    const user = new User({
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    });
    expect(user.userFirstName()).to.equal('Nyasia');

    
  });
 
})
