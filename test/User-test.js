import { expect } from 'chai';
import userTestData from '../src/data/user-test-data';
import User from '../src/js/User';

describe('User', () => {
  let user1;
  let user2;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
  });

  it('should have an id from data', () => {
    expect(user1.id).to.eql(1);
    expect(user2.id).to.eql(2);
  });

  it('should have a name from data', () => {
    expect(user1.name).to.eql('Luisa Hane');
    expect(user2.name).to.eql('Jarvis Considine');
  });

  it('should have an address from data', () => {
    expect(user1.address).to.eql('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
    expect(user2.address).to.eql('30086 Kathryn Port, Ciceroland NE 07273');
  });

  it('should have an email from data', () => {
    expect(user1.email).to.eql('Diana.Hayes1@hotmail.com');
    expect(user2.email).to.eql('Dimitri.Bechtelar11@gmail.com');
  });

  it('should have a strideLength from data', () => {
    expect(user1.strideLength).to.eql(4.3);
    expect(user2.strideLength).to.eql(4.5);
  });

  it('should have a dailyStepGoal from data', () => {
    expect(user1.dailyStepGoal).to.eql(10000);
    expect(user2.dailyStepGoal).to.eql(5000);
  });

  it('should have friends from data', () => {
    expect(user1.friends).to.eql([16, 4, 8]);
    expect(user2.friends).to.eql([9, 18, 24, 19]);
  });

  it('should return the user\'s first name from data', () => {
    expect(user1.getName()).to.eql('Luisa');
    expect(user2.getName()).to.eql('Jarvis');
  });
});
