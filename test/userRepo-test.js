const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/userRepo');
const usersSampleData = require('../data/users-sample');

describe('UserRepo', () => {

  let userRepo;
  let email = "Dimitri.Bechtelar11@gmail.com";

  beforeEach(() => {
    userRepo = new UserRepo(usersSampleData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });

  it('should have usersData', () => {
    expect(userRepo.usersData).to.equal(usersSampleData);
  });

  it('should be able to return a specific users data', () => {
    expect(userRepo.getUserData(email)).to.equal(usersSampleData[1]);
  });

  it('should be able to calculate all users average steps', () => {
    expect(userRepo.calcAvgStepGoal()).to.equal(6200);
  });

  it('should be able to find the user their friends', () => {
    expect(userRepo.getFriendData(9)).to.deep.equal({
      "id": 9,
      "name": "Myron Schmitt",
      "address": "85251 Martina Fields, West Aletha MD 00163-5315",
      "email": "Gerard_Langosh22@hotmail.com",
      "strideLength": 3.8,
      "dailyStepGoal": 6000,
      "friends": [
        16,
        26,
        17
      ]
    });
  });

});
