import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });
  it('should store user data', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.id).to.equal(userData.id);
    expect(user.name).to.equal(userData.name);
    expect(user.address).to.equal(userData.address);
    expect(user.email).to.equal(userData.email);
    expect(user.strideLength).to.equal(userData.strideLength);
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
    expect(user.friends).to.equal(userData.friends);
  });
  it('should be able to show User first name', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.displayFirstName()).to.equal('Luisa');
  });

});
