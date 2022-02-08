import { expect } from 'chai';
import User from '../src/user';

describe('User', () => {

  const newUser = new User({
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
  })
  
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should hold the id of the user passed in as an object', function () {
    expect(newUser.id).to.equal(1);
  });  

  it('should hold the first and last name of the user', function () {
    expect(newUser.name).to.equal("Luisa Hane");
  });

  it('should hold the address of the user', function () {
    expect(newUser.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it('should hold the email of the user', function () {
    expect(newUser.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it('should hold the stride length of the user', function () {
    expect(newUser.strideLength).to.equal(4.3);
  });

  it('should hold the daily step goal of the user', function () {
    expect(newUser.dailyStepGoal).to.equal(10000);
  });

  it('should hold the friends of the user in an array', function () {
    expect(newUser.friends).to.deep.equal([
      16,
      4,
      8
    ]);
  });

  it('should have a method that returns only the first name of the user', function () {
    expect(newUser.firstName()).to.equal("Luisa");
  });  
});
