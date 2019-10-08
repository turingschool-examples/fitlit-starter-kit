const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

describe('UserRepository', () => {

  let userData1;
  let userRepo;
  
  beforeEach( () => {
    userData1 = [
      {
        "id": 1,
        "name": "George Springer",
        "address": "1 Astros Lane, Houston, TX 77777",
        "email": "leadoffHitter@yahoo.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          2,
          3
        ]
      },
      {
        "id": 2,
        "name": "Alex Bregman",
        "address": "2 Astros Lane, Houston, TX 77777",
        "email": "ALMVP@yahoo.com",
        "strideLength": 3.6,
        "dailyStepGoal": 11000,
        "friends": [
          1,
          3
        ]
      },
      {
        "id": 3,
        "name": "Justin Verlander",
        "address": "3 Astros Lane, Houston, TX 77777",
        "email": "leadoffHitter@yahoo.com",
        "strideLength": 3.9,
        "dailyStepGoal": 9000,
        "friends": [
          2,
          1
        ]
      }
    ];
    userData1 = userData1.map((element) => {
      element = new User(element);
      return element;
    })

    //take every object, and then make it a User instance
    userRepo = new UserRepository(userData1);
  })

  it('should instantiate as a UserRepo', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  describe('Methods', () => {
    it('should return the average step goal among all users', () => {
      expect(userRepo.calculateAvgStepGoal()).to.equal(10000);
    });
  
    it('should have a return method that gives back user information', () => {
      expect(userRepo.returnUserData(2)).to.equal(userData1[1]);
      expect(userRepo.returnUserData(3)).to.equal(userData1[2]);
    });  
  });

  describe('User Object', () => {
    it('should instantiate User Objects', () => {
      expect(userRepo.data[0]).to.be.an.instanceof(User);
    });
  
    it('should have an array of User Objects', () => {
      expect(userRepo.data.length).to.equal(3);
    });
  
    it('should be able to use User methods', () => {
      expect(userRepo.data[1].returnFirstName()).to.equal('Alex');
    });  
  });
})
