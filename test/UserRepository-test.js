import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User'
import hydrationData from '../src/data/sample-hydrationData'
import sleepData from '../src/data/sample-sleepData'
import activityData from '../src/data/sample-activityData';

describe('User Repository', () => {
  let users;
  let userRepoHydration;
  let userRepoSleep;
  let userRepoActivity;

  beforeEach( () => {
    users = [
      new User({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]}),
      new User({id: 2, name: 'Jarvis Considine', address: '30086 Kathryn Port, Ciceroland NE 07273', email: 'Dimitri.Bechtelar11@gmail.com', strideLength: 4.5, dailyStepGoal: 5000, friends: [9, 18, 24, 19]}),
      new User({id: 3, name: 'Herminia Witting', address: '85823 Bosco Fork, East Oscarstad MI 85126-5660', email: 'Elwin.Tromp@yahoo.com', strideLength: 4.4, dailyStepGoal: 5000, friends: [19, 11, 42, 33]}),
    ]; 

    userRepoHydration = new UserRepository(users, hydrationData);
    userRepoSleep = new UserRepository(users, sleepData);
    userRepoActivity = new UserRepository(users, activityData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', () => {
    expect(userRepoHydration).to.be.an.instanceOf(UserRepository);
    expect(userRepoSleep).to.be.an.instanceOf(UserRepository);
    expect(userRepoActivity).to.be.an.instanceOf(UserRepository);
  });

  it('should store an array of users', () => {
    expect(userRepoHydration.users).to.deep.equal(users);
    expect(userRepoHydration.users.length).to.equal(3);

    expect(userRepoSleep.users).to.deep.equal(users);
    expect(userRepoSleep.users.length).to.equal(3);

    expect(userRepoActivity.users).to.deep.equal(users);
    expect(userRepoActivity.users.length).to.equal(3);
  });
  
  it('should store instances of User in the users array', () => {
    expect(userRepoHydration.users[0]).to.be.an.instanceOf(User);
    expect(userRepoHydration.users[1]).to.be.an.instanceOf(User);
    expect(userRepoHydration.users[2]).to.be.an.instanceOf(User);
    
    expect(userRepoSleep.users[0]).to.be.an.instanceOf(User);
    expect(userRepoSleep.users[1]).to.be.an.instanceOf(User);
    expect(userRepoSleep.users[2]).to.be.an.instanceOf(User);
    
    expect(userRepoActivity.users[0]).to.be.an.instanceOf(User);
    expect(userRepoActivity.users[1]).to.be.an.instanceOf(User);
    expect(userRepoActivity.users[2]).to.be.an.instanceOf(User);
  });
  
  it('should take in health data',  () => {
    expect(userRepoHydration.data).to.deep.equal(hydrationData)
    expect(userRepoSleep.data).to.deep.equal(sleepData)
    expect(userRepoActivity.data).to.deep.equal(activityData)
  });

  it('should return a user by their id', () => {
    expect(userRepoHydration.getUserData(1)).to.deep.equal(users[0]);
    expect(userRepoSleep.getUserData(2)).to.deep.equal(users[1]);
    expect(userRepoActivity.getUserData(3)).to.deep.equal(users[2]);
  });

  it('should not return a user if their id is not found', () => {
    expect(userRepoHydration.getUserData(4)).to.equal(undefined);
    expect(userRepoSleep.getUserData(5)).to.equal(undefined);
    expect(userRepoActivity.getUserData(6)).to.equal(undefined);
  });

  it('should return the average step goal for all users', () => {
    expect(userRepoHydration.getAverageStepGoal()).to.equal(6667);
    expect(userRepoSleep.getAverageStepGoal()).to.equal(6667);
    expect(userRepoActivity.getAverageStepGoal()).to.equal(6667);
  });

  it('should return the average ounces drank for all users for a given date', () => {
    expect(userRepoHydration.getAllUsersAverages('numOunces', '2019/06/15')).to.equal(57);
    expect(userRepoHydration.getAllUsersAverages('numOunces', '2019/06/16')).to.equal(87);
  });

  it('should return the average hours slept for all users for a given date', () => {
    expect(userRepoSleep.getAllUsersAverages('hoursSlept', '2019/06/15')).to.equal(8);
    expect(userRepoSleep.getAllUsersAverages('hoursSlept', '2019/06/16')).to.equal(4);
    expect(userRepoSleep.getAllUsersAverages('hoursSlept', '2019/06/18')).to.equal(10)
  });

  it('should return the average sleep quality for all users for a given date', () => {
    expect(userRepoSleep.getAllUsersAverages('sleepQuality', '2019/06/15')).to.equal(4);
    expect(userRepoSleep.getAllUsersAverages('sleepQuality', '2019/06/17')).to.equal(3);
    expect(userRepoSleep.getAllUsersAverages('sleepQuality', '2019/06/19')).to.equal(1)
  });

  it('should return the average number of steps for all users for a given date', () => {
    expect(userRepoActivity.getAllUsersAverages('numSteps', '2019/06/17')).to.equal(9114);
    expect(userRepoActivity.getAllUsersAverages('numSteps', '2019/06/19')).to.equal(10675);
    expect(userRepoActivity.getAllUsersAverages('numSteps', '2019/06/21')).to.equal(9073);
  });

  it('should return the average minutes active for all users for a given date', () => {
    expect(userRepoActivity.getAllUsersAverages('minutesActive', '2019/06/16')).to.equal(188);
    expect(userRepoActivity.getAllUsersAverages('minutesActive', '2019/06/18')).to.equal(185);
    expect(userRepoActivity.getAllUsersAverages('minutesActive', '2019/06/20')).to.equal(146);
  });
  it('should return the average flights of stairs for all users for a given date', () => {
    expect(userRepoActivity.getAllUsersAverages('flightsOfStairs', '2019/06/15')).to.equal(23);
    expect(userRepoActivity.getAllUsersAverages('flightsOfStairs', '2019/06/17')).to.equal(13);
    expect(userRepoActivity.getAllUsersAverages('flightsOfStairs', '2019/06/20')).to.equal(19);
  });
});