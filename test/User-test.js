import { expect } from 'chai';
import User from '../src/User';

describe('User Data', () => {
  let user1;

  beforeEach(() => {
    let userData =  {
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

    user1 = new User(userData);
  })

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be a User Class', function () {
    expect(user1).to.be.an.instanceOf(User);
  });

  it('should have a name', function () {
    expect(user1.name).to.equal('Luisa Hane')
  })

  it('should have an address', function () {
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
  })

  it('should have a email', function () {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com")
  })

  it('should have a stride length', function () {
    expect(user1.strideLength).to.equal(4.3)
  })

  it('should have a daily step goal', function () {
    expect(user1.dailyStepGoal).to.equal(10000)
  })

  it('should be able to have friends', function () {
    expect(user1.friends).to.deep.equal([16, 4, 8])
  })

  it('should be able to return the user/s first name', function () {
    let firstName = user1.getFirstName();

    expect(firstName).to.equal("Luisa");
  })
})