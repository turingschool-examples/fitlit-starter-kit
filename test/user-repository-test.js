const chai = require("chai")
const expect = chai.expect;
const UserRepository = require("../src/user-repository");
const userTestRepository = require("../data/users-test-data");
const usersTestData = userTestRepository.usersTestData;

describe('UserRepository', function() {

    it('should be a function', function() {
      expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of UserRepository', function() {
      expect(userRepository).to.be.an.instanceof(UserRepository);
    }); 
    
    it('should hold on to all users', function() {
      expect(userRepository.data).to.deep.equal(usersTestData);
    });

    it('should return a specific users data', function() {
      expect(userRepository.returnUser(1)).to.deep.equal(usersTestData[0])
    });

    it('should return the average step goal for all users', function() {
      expect(userRepository.returnAvgStepGoal()).to.equal(6200)
    });
});