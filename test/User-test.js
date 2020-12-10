const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let data, user;

  beforeEach(() => {
    data = {
      "id": 1,
      "name": "Brian Forbes",
      "address": "123 Blah St, Denver CO, 66666",
      "email": "stuffandthings@gmail.com",
      "strideLength": 2.4,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3,
        4
      ]
    };

    user = new User(data);
  });

  it.skip('should be able to take in user data object as an argument', () =>{
    expect(user).to.deep.equal(data);
  });

  it.skip('should have every property acquired from data argument', () => {
    expect(user.id).to.equal(1);
    expect(user.name).to.equal('Brian Forbes');
    expect(user.address).to.equal('123 Blah St, Denver CO, 66666');
    expect(user.email).to.equal('stuffandthings@gmail.com');
    expect(user.strideLength).to.equal(2.4);
    expect(user.dailyStepGoal).to.equal(10000);
    expect(user.friends).to.deep.equal([2, 3, 4]);
  });

  it.skip(`should have a way to return the user's name`, () => {
    expect(user.provideUserName()).to.equal('Brian Forbes');
  });
});
