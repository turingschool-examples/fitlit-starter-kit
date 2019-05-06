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


});
