import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User'
// import Sleep from '../src/Sleep'
// import Hydration from '../src/Hydration'
// import Activity from '../src/Activity'


describe('User Repository', () => {
  let userRepo;
  let users;
  // let hydration;
  // let sleep;
  // let activity;
  // may not need to import all of these classes

  beforeEach( () => {
    // sample data from the userData file to use for testing
    users = [
      new User(1, 'Luisa Hane', '15195 Nakia Tunnel, Erdmanport VA 19901-1697', 'Diana.Hayes1@hotmail.com', 4.3, 10000, [16, 4, 8]),
      new User(2, 'Jarvis Considine', '30086 Kathryn Port, Ciceroland NE 07273', 'Dimitri.Bechtelar11@gmail.com', 4.5, 5000, [9, 18, 24, 19]),
      new User(3, 'Herminia Witting', '85823 Bosco Fork, East Oscarstad MI 85126-5660', 'Elwin.Tromp@yahoo.com', 4.4, 5000, [19, 11, 42, 33]),
    ] 
    userRepo = new UserRepository(users) // pass users data into UserRepository class as argument
  });

  it.skip('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it.skip('should be an instance of User Repository', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it.skip('should store an array of users', () =>{
    // will need a property to store User class object being passed in as an arguement
    expect(userRepo.users).to.deep.equal(users)
    expect(userRepo.users.length).to.equal(3)
  });

  it.skip('should store instances of User in the users array', () => {
    // unsure if I should combined this test with the test on line 35
    // separated them due to test block size but it may make more sense that they are being tested together in one it block
    expect(userRepo.users[0]).to.be.an.instanceOf(User)
    expect(userRepo.users[1]).to.be.an.instanceOf(User)
    expect(userRepo.users[2]).to.be.an.instanceOf(User)
  });

  it.skip('should return a user by their id', () => {
    // need method to update the current user
    // method will need a param of userID
    expect(userRepo.returnUserData(1)).to.deep.equal({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]})
    expect(userRepo.returnUserData(2)).to.deep.equal({id: 2, name: 'Jarvis Considine', address: '30086 Kathryn Port, Ciceroland NE 07273', email: 'Dimitri.Bechtelar11@gmail.com', strideLength: 4.5, dailyStepGoal: 5000, friends: [9, 18, 24, 19]})
    expect(userRepo.returnUserData(3)).to.deep.equal({id: 3, name: 'Herminia Witting', address: '85823 Bosco Fork, East Oscarstad MI 85126-5660', email: 'Elwin.Tromp@yahoo.com', strideLength: 4.4, dailyStepGoal: 5000, friends: [19, 11, 42, 33]})
  })

  it.skip('should not return a user if their id is not found', () => {
    // sad path for getUserData() method, when a userID is not found
    expect(userRepo.returnUserData(0)).to.equal('undefined')
    expect(userRepo.returnUserData(4)).to.equal('undefined')
  });

  it.skip('should return the average step goal for all users', () => {
    // need to iterate through the array of users
    // add the users.dailyStepGoal together
    // divide the total by the number of users in the array
    // use a method to get the nearest integer value of the result
    expect(userRepo.returnAverageStepGoal()).to.equal(6667)
  });

});