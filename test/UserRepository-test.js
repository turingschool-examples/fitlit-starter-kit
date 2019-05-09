const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should have a averageStepGoal to return the average of step goal', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.averageStepGoal()).to.equal(7750);
  });

  it('should have a mostCommonState to return the most common state', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.mostCommonState()).to.equal('AK');
  });

  it('should return user data given a user ID', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.returnUserData(2)).to.deep.equal({
      "id": 2,
      "name": "Shayne Swift",
      "address": "747 Dickinson Gardens, South Helga AK 88484-2240",
      "email": "Lawson74@yahoo.com",
      "strideLength": 4.5,
      "dailyStepGoal": 11000
    });  
  });

  it('returnNamesFromIds should return all users names from their IDs', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.returnNamesFromIds([1,2,4])).to.eql(["Nyasia Weber", "Shayne Swift", "Elaina Rau"]);
  });

});
