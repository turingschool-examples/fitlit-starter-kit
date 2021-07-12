import { expect } from 'chai';
import User from '../src/User';

describe.only('User', () => {
  let user;

  beforeEach(() => {
    user = new User({
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
  })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User);
  });

  it('user should have an id', () => {
    expect(user.id).to.be.a('number')
    expect(user.id).to.equal(1);
  });

  it('user should have an name', () => {
    expect(user.name).to.be.a('string');
    expect(user.name).to.equal('Luisa Hane');
  });

  it('user should have an address', () => {
    expect(user.address).to.be.a('string');
    expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  });

  it('user should have an email', () => {
    expect(user.email).to.be.a('string');
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
  });

});
