const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
  let user;

  beforeEach(() => {
    user = new User({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8]
    })
  })

  it('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it('should return new instance of User', () => {
    expect(user).to.be.an.instanceOf(User);
  })

  it('should have an id', () => {
    expect(user.id).to.equal(1);
  })

  it('should have a name', () => {
    expect(user.name).to.equal('Luisa Hane');
  })

  it('should have an address', () => {
    expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
  })

  it('should have an email', () => {
    expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
  })

  it('should have a strideLength', () => {
    expect(user.strideLength).to.equal(4.3);
  })

  it('should have a dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(10000);
  })

  it('should have friends', () => {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  })

  it('should be able to get first name', () => {
    expect(user.getName()).to.equal('Luisa');
  })

  it('should be able to get first name with an argument passed', () => {
    expect(user.getName('xyz')).to.equal('Luisa');
  })

  it('should still return name regardless of name length', () => {
    let user2 = new User({
      "id": 1,
      "name": "Luisa",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8]
    })
    expect(user2.getName()).to.equal('Luisa');
  })
})