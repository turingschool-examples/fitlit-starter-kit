const chai = require("chai");
const expect = chai.expect;

const UserRepo = require('../src/UserRepo');
const allUsers = require('../data/user-test-data');

let userRepo;


describe('User Repo', () => {

  beforeEach(() => {
    userRepo = new UserRepo(allUsers);
  })

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  })

  it('should be an instance of the user repo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  })

  it('should hold all user data', () => {
    expect(userRepo.data).to.equal(allUsers);
    expect(userRepo.data.length).to.deep.equal(12);
  });

  describe('User Repo Methods', () => {

  it('should return the user data by id', () => {
    expect(userRepo.returnUserInfoById(3)).to.deep.equal({
    id: 3,
    name: 'Herminia Witting',
    address: '85823 Bosco Fork, East Oscarstad MI 85126-5660',
    email: 'Elwin.Tromp@yahoo.com',
    strideLength: 4.4,
    dailyStepGoal: 5000,
    friends: [ 19, 11, 42, 33 ]
  });
  })

  it('should be able to calculate the average steps for all users', () => {
    expect(userRepo.averageStepsAllUsers()).to.equal(6833);
  })
})
})
