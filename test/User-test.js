const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

let user, userRepository, data;

beforeEach(() => {
  data =
    {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    };
  user = new User(data);
  userRepository = new UserRepository(data);
});

describe('User', () => {

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should hold on to the user properties from the data file', () => {
    expect(user.id).to.equal(1);
  });

  it('should return the first name', () => {
    expect(user.getFirstName()).to.equal('Luisa');
  });

});