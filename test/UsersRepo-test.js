const chai = require('chai');
const expect = chai.expect;

const UsersRepo = require('../src/UsersRepo');
const userData = require('../subset_data/users-subset')


beforeEach(function() {
  usersRepo = new UsersRepo(userData);
});


describe('UserRepo Test', function() {

  it('should be a function', function() {
    expect(UsersRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', function() {
    expect(usersRepo).to.be.an.instanceof(UsersRepo);
  });

  it('should return info form an ID', function() {
    expect(usersRepo.getUserById(1)).to.deep.include({ id: 1,
      name: 'Luisa Hane',
      address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      email: 'Diana.Hayes1@hotmail.com',
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [ 16, 4, 8 ] });
  });

  it('should return avg step goal', function() {
    expect(usersRepo.avgStepGoal()).to.equal(6200);
  });


})
