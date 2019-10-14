const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UsersRepo = require('../src/UsersRepo');
const userData = require('../subset_data/users-subset');

describe('User Test', function() {
  let usersRepo;

  beforeEach(function() {
    usersRepo = new UsersRepo(userData);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user1 = new User(usersRepo.getUserById(1));
    expect(user1).to.be.an.instanceof(User);
  });

  it('should return an User', function() {
    const user1 = new User(usersRepo.getUserById(1));
    expect(user1).to.deep.include({ id: 1,
      name: 'Luisa Hane',
      address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      email: 'Diana.Hayes1@hotmail.com',
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [ 16, 4, 8 ] });
  });

  it('should return user first name', function() {
    const user1 = new User(usersRepo.getUserById(1));
    expect(user1.getUserFirstName()).to.equal('Luisa');
  });


})
