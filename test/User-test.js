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

  it('should be able to take in user data object as an argument', () =>{
    expect(user.id).to.equal(1);
    expect(user.friends).to.deep.equal([2, 3, 4]);
  });

  it('each user should have a name', () => {
    expect(user.name).to.equal('Brian Forbes');
  });

  it('each user should have an address', () => {
    expect(user.address).to.equal('123 Blah St, Denver CO, 66666');
  });

  it(`should have a way to return the user's name`, () => {
    expect(provideUserName()).to.equal('Brian Forbes');
  });
});
