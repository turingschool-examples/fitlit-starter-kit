const chai = require('chai');
const expect = chai.expect;

const UsersRepo = require('../src/UsersRepo');

describe('User Repository', () => {
  let user1;
  let user2;
  let user3;
  let user4;
  let usersRepo;

  beforeEach(() => {
    user1 = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8]
    }
    
    user2 = {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    }
    
    user3 = {
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [19, 11, 42, 33]
    }

    user4 = {
      "id": 4,
      "name": "Mae Connelly",
      "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
      "email": "Marcos_Pollich@hotmail.com",
      "strideLength": 3.1,
      "dailyStepGoal": 4000,
      "friends": [48, 7, 44, 8]
    }

  })
  
  it('should be a function', () => {
    expect(UsersRepo).to.be.a('function')
  });
  
  it('should be an instance of UsersRepo', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])
    expect(usersRepo).to.be.an.instanceOf(UsersRepo)
  });

  it('should take in an array of users', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])
    expect(usersRepo.allUsers).to.deep.equal([user1, user2, user3, user4])
  });

  it('should instantiate users and put them in the allUsers array', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])

    usersRepo.createUsers()
    expect(usersRepo.allUsers.length).to.equal(4)
  })

  it('should have users with methods', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])

    usersRepo.createUsers()
    expect(usersRepo.allUsers2[0].getName()).to.equal('Luisa')
  })

  // it('should throw an error if no usersData is passed as an argument', () => {
  //   usersRepo = new UsersRepo([user1, user2, user3, user4])

  //   expect(() => { new UsersRepo() }).to.throw(Error);
  // })

  it('should return a user, given an id', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])
    expect(usersRepo.getUser(2)).to.deep.equal(user2)
  });

  it('should return a user, given an id only', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])
    expect(usersRepo.getUser('2')).to.deep.equal('You must pass a number')
  });

  it('should find the average step goal of all users', () => {
    usersRepo = new UsersRepo([user1, user2, user3, user4])
    expect(usersRepo.getAvgStepGoal()).to.deep.equal(6000)
  });
  
})