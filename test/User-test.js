// create new user class
// create constructor within class
// create id, name, address, email, strideLength, dailyStepGoal
// create method to return only the first name
// DONE

const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {
    const user = new User();
    expect(User).to.be.a('function');
  });

  it('should be a instance of user', function() {
    const user = new User();
    expect(user).to.be.an.instanceof(User);
  });

  it('should have properties', function() {
    const user = new User({
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    });
    expect(user.userData.id).to.eql(1);
    expect(user.userData.name).to.eql('Nyasia Weber');
    expect(user.userData.strideLength).to.eql(4.7);
  });


});
