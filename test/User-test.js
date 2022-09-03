import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User', () => {
  let user1Data;
  let user2Data;

  beforeEach(() => {
  
    user1Data = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [
      16,
      4,
      8
      ]
    });

    user2Data = new User({
      id: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [
      9,
      18,
      24,
      19
      ]
    });
  });

  it('should be a function', () => {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', () => {
    expect(user1Data).to.be.an.instanceof(User)
    expect(user2Data).to.be.an.instanceof(User)
  });

  it('should have a name', () => {
    expect(user1Data.name).to.equal('Luisa Hane')
    expect(user2Data.name).to.equal('Jarvis Considine')
  });

  it('should have an ID', () => {
    expect(user1Data.id).to.equal(1)
    expect(user2Data.id).to.equal(2)
  });

  it('should have an address', () => {
    expect(user1Data.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697')
    expect(user2Data.address).to.equal('30086 Kathryn Port, Ciceroland NE 07273')
  });

  it('should have an email', () => {
    expect(user1Data.email).to.equal('Diana.Hayes1@hotmail.com')
    expect(user2Data.email).to.equal('Dimitri.Bechtelar11@gmail.com')
  });

  it('should have a stride length', () => {
    expect(user1Data.strideLength).to.equal(4.3)
    expect(user2Data.strideLength).to.equal(4.5)
  });

  it('should have a daily step goal', () => {
    expect(user1Data.dailyStepGoal).to.equal(10000)
    expect(user2Data.dailyStepGoal).to.equal(5000)
  });

  it('should have a list of friends', () => {
    expect(user1Data.friends).to.deep.equal([
      16,
      4,
      8
      ])
    expect(user2Data.friends).to.deep.equal([
      9,
      18,
      24,
      19
      ])
  });

  it('should return only the first name of the user', function() {
    expect(user1Data.returnUserFirstName()).to.equal('Luisa')
    expect(user2Data.returnUserFirstName()).to.equal('Jarvis')
  });
});
