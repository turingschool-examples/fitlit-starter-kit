import { expect } from 'chai';
import User from '../src/User';
import userData from '../src/data/users';

describe('User', () => {

  let user1, user2;

    beforeEach(() => {
      user1 = new User(userData[0]);
      user2 = new User(userData[1]);
    });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should take in an object as a parameter', () => {
    expect(user1.userData).to.be.an('object');
    expect(user2.userData).to.be.an('object');
  })

  it('should hold user id', () => {
    expect(user1.userData.id).to.equal(1);
    expect(user2.userData.id).to.equal(2);
  })

  it('should hold user name', () => {
    expect(user1.userData.name).to.equal('Luisa Hane');
    expect(user2.userData.name).to.equal('Jarvis Considine');
  })

  it('should hold user address', () => {
    expect(user1.userData.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
    expect(user2.userData.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
  })

  it('should hold user email', () => {
    expect(user1.userData.email).to.equal('Diana.Hayes1@hotmail.com');
    expect(user2.userData.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  })

  it('should hold user stride length', () => {
    expect(user1.userData.strideLength).to.equal(4.3);
    expect(user2.userData.strideLength).to.equal(4.5);
  })

  it('should hold user daily step goal', () => {
    expect(user1.userData.dailyStepGoal).to.equal(10000);
    expect(user2.userData.dailyStepGoal).to.equal(5000);
  })

  it('should hold user friends', () => {
    expect(user1.userData.friends).to.deep.equal([16, 4, 8]);
    expect(user2.userData.friends).to.deep.equal([9, 18, 24, 19]);
  })

  it('should have a method to return the user first name only', () => {
    expect(user1.returnFirstName()).to.equal('Luisa');
    expect(user2.returnFirstName()).to.equal('Jarvis');
  })

});
