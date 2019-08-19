const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const userData = require('../test/user-data-subset');
const userInfo = userData;

describe('User', () => {
  it('should be a function', () => {
    expect(User).to.be.a('function'); 
  });

  it('should be able to take in an object', () => {
    expect(userInfo[1].id).to.equal(2)
    expect(userInfo[1].strideLength).to.equal(4.5)
  });

  it('should be able to return the users name', () => {
    let oneUser =  {
      "id": 5,
      "name": "Erick Schaden",
      "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
      "email": "Vanessa_Gerhold@gmail.com",
      "strideLength": 3.1,
      "dailyStepGoal": 8000,
      "friends": [
        13,
        44,
        49,
        33,
        10
      ]
    }
    let user = new User(oneUser);

    expect(user.findName()).to.equal('Erick Schaden');
  });
});