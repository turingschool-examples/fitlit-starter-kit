import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User'

describe('User Repository', () => {
  let userRepo;
  let users;

  beforeEach( () => {
    users = [
      new User({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]}),
      new User({id: 2, name: 'Jarvis Considine', address: '30086 Kathryn Port, Ciceroland NE 07273', email: 'Dimitri.Bechtelar11@gmail.com', strideLength: 4.5, dailyStepGoal: 5000, friends: [9, 18, 24, 19]}),
      new User({id: 3, name: 'Herminia Witting', address: '85823 Bosco Fork, East Oscarstad MI 85126-5660', email: 'Elwin.Tromp@yahoo.com', strideLength: 4.4, dailyStepGoal: 5000, friends: [19, 11, 42, 33]}),
    ]; 
    userRepo = new UserRepository(users);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it('should store an array of users', () => {
    expect(userRepo.users).to.deep.equal(users);
    expect(userRepo.users.length).to.equal(3);
  });

  it('should store instances of User in the users array', () => {
    expect(userRepo.users[0]).to.be.an.instanceOf(User);
    expect(userRepo.users[1]).to.be.an.instanceOf(User);
    expect(userRepo.users[2]).to.be.an.instanceOf(User);
  });

  it('should return a user by their id', () => {
    expect(userRepo.returnUserData(1)).to.deep.equal(users[0]);
    expect(userRepo.returnUserData(2)).to.deep.equal(users[1]);
    expect(userRepo.returnUserData(3)).to.deep.equal(users[2]);
  });

  it('should not return a user if their id is not found', () => {
    expect(userRepo.returnUserData(0)).to.equal(undefined);
    expect(userRepo.returnUserData(4)).to.equal(undefined);
  });

  it('should return the average step goal for all users', () => {
    expect(userRepo.returnAverageStepGoal()).to.equal(6667);
  });
});