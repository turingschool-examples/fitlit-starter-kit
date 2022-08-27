import { expect } from 'chai';
import { sampleUsers } from '../src/sample-data';
import User from '../src/User';

describe('User', () => {
let user1
let user2

beforeEach(() => {
  user1 = new User(sampleUsers[0]);
  user2 = new User(sampleUsers[1]);

})
  it('should be an instance user', () => {
    expect(user1).to.be.an.instanceOf(User);
    expect(user2).to.be.an.instanceOf(User);
  })

  it('should have a users id', () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
  })

  it('should have the users name', () => {
    expect(user1.name).to.equal('Luisa Hane');
    expect(user2.name).to.equal('Jarvis Considine');
  })

  it('should have a users address', () => {
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273")
  })

  it('should have a users email', () => {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
  })

  it('should have a users stride length', () => {
    expect(user1.strideLength).to.equal(4.3);
    expect(user2.strideLength).to.equal(4.5);
  })

  it('should have a users daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(5000);
  })

  it('should have a users friends list', () => {
    expect(user1.friends).to.deep.equal([16,4,8]);
    expect(user2.friends).to.deep.equal([9,18,24,19]);
  })

  it('should be able to get users first name', () => {
    expect(user1.getUserFirstName()).to.equal('Luisa');
    expect(user2.getUserFirstName()).to.equal('Jarvis');
  })

})