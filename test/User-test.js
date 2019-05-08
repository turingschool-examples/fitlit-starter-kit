const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User.js');



describe('User', function () {

  let userData;

  beforeEach(function() {
    userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    }
  });
  it('should create an instance of user', function () {
    const user = new User(userData);
    expect(user).to.be.an.instanceOf(User);
  });
  it('should take in user data', function () {
    const user = new User(userData);
    expect(user.userData.id).to.equal(1);
  });
  it('should return the users first name', function() {
    const user = new User(userData);
    expect(user.getFirstName()).to.equal('Nyasia');
  });
});