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
    expect(user1).to.be.an('object');
    expect(user2).to.be.an('object');
  })

  it('should hold user id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  })

  it('should hold user name', () => {
    expect(user1.name).to.equal('Luisa Hane');
    expect(user2.name).to.equal('Jarvis Considine');
  })

  it('should hold user address', () => {
    expect(user1.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
    expect(user2.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273');
  })

  it('should hold user email', () => {
    expect(user1.email).to.equal('Diana.Hayes1@hotmail.com');
    expect(user2.email).to.equal('Dimitri.Bechtelar11@gmail.com');
  })

  it('should hold user stride length', () => {
    expect(user1.strideLength).to.equal(4.3);
    expect(user2.strideLength).to.equal(4.5);
  })

  it('should hold user daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(5000);
  })

  it('should hold user friends', () => {
    expect(user1.friends).to.deep.equal([16, 4, 8]);
    expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
  })

  it('should have a method to return the user first name only', () => {
    expect(user1.returnFirstName()).to.equal('Luisa');
    expect(user2.returnFirstName()).to.equal('Jarvis');
  })

});
