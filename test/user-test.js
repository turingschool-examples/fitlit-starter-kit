const chai = require("chai")
const expect = chai.expect;
const User = require("../src/user");
const userTestRepository = require("../data/users-test-data");
const usersTestData = userTestRepository.usersTestData;

describe('User', function() {

    it('should be a function', function() {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
        expect(user).to.be.an.instanceof(User);
    }); 

    it('should have properties for user data', function() {
      expect(user.id).to.equal(usersTestData[0].id);
      expect(user.name).to.equal(usersTestData[0].name);
    });
    
    it('should return the users FIRST name', function() {
      expect(user.returnFirstName).to.equal(usersTestData[0].split(' '));
    });
      
});