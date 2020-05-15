const chai = require('chai');
const expect = chai.expect;

const UsersRepo = require('../src/UsersRepo');
const userSampleData = require('../sample-data/user-sample')

describe('User Repository', () => {
  let user1, user2, user3, user4;
  let userData;
  let usersRepo;

  beforeEach(() => {
    user1 = userSampleData[0]
    user2 = userSampleData[1]
    user3 = userSampleData[2]
    user4 = userSampleData[3]

    userData = [user1, user2, user3, user4]
    usersRepo = new UsersRepo(userData) 
  })
  
  it('should be a function', () => {
    expect(UsersRepo).to.be.a('function')
  });
  
  it('should be an instance of UsersRepo', () => { 
    expect(usersRepo).to.be.an.instanceOf(UsersRepo)
  });

  it('should take in an array of users', () => { 
    expect(usersRepo.allUsers).to.deep.equal([user1, user2, user3, user4])
  });

  it('should instantiate users and put them in the allUsers array', () => {
    expect(usersRepo.allUsers.length).to.equal(4)
  })

  it('should have users with methods', () => {
    expect(usersRepo.allUsers[0].getName()).to.equal('Luisa')
  })

  // it('should throw an error if no usersData is passed as an argument', () => {
  //   expect(() => { new UsersRepo() }).to.throw(Error);
  // })

  it('should return a user, given an id', () => {
    expect(usersRepo.getUser(2)).to.deep.equal(user2)
  });

  it('should return a user, given an id only', () => { 
    expect(usersRepo.getUser('2')).to.deep.equal('You must pass a number')
  });

  it('should find the average step goal of all users', () => {
    expect(usersRepo.getAvgStepGoal()).to.deep.equal(6000)
  });
  
})