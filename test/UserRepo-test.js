const chai = require('chai')
const expect = chai.expect;
const assert = chai.assert;

// if(typeof module !== 'undefined') {
  var UserRepo = require('../src/UserRepo');
//   // var User = require('../src/User'
//   var data = require('../data/users-test-data')
// }
// const UserRepo = require('../src/UserRepo');
// // const User = require('../src/User')
// const data = require('../data/users-test-data')

describe('UserRepo', function () {
  let userRepo;

  beforeEach(function () {
    userRepo = new UserRepo()
  })

  it('should be a function', function () {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of UserRepo', function () {
    expect(userRepo).to.be.a.instanceOf(UserRepo)
  })

  it('should take in user data', function () {
    // expect(userRepo.usersData).to.equal()
    expect(userRepo.usersData[3].name).to.equal('Elaina Rau')
  })

  it('should be able to return a user object by ID', function () {
    expect(userRepo.returnUserData(3)).to.equal(userRepo.usersData[2])
  })

  it('should return the average step goal for all users', function () {
    expect(userRepo.averageStepGoal()).to.be.a('number')
    expect(userRepo.averageStepGoal()).to.equal(7833)
  })

  it('should return which state has the most users', function () {
    expect(userRepo.stateWithMostUsers()).to.be.a('string')
    expect(userRepo.stateWithMostUsers()).to.equal('AK')
  })
})