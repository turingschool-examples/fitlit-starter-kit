const chai = require('chai');
const expect = chai.expect;

const data = require('../test/User-data-subset');
const UserRepository = require('../src/User-repository');


describe('UserRepository', () => {
  it('should load data for all users', function () {
    const userRepository = new UserRepository(data);
    expect(userRepository.users.length).to.equal(5);
  });

  it('should return a user based on user id', () => {
    const userRepository = new UserRepository(data);
    expect
    (userRepository.returnUser(2)).to.deep.equal(data[1])
  })

  it('should return the average of all users step goal', () => {
    const userRepository = new UserRepository(data);
    expect(userRepository.calculateStepGoal()).to.equal(6400)
  })
});

