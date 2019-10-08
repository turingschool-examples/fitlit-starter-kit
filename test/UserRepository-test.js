const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const mockUserData = require('../mock/mockUserData');

let userRepository;

describe('UserRepository', () => {

    beforeEach(() => {
        userRepository = new UserRepository(mockUserData);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(UserRepository).to.be.a('function');
    });

    it('should have a length of users', () => {
        expect(userRepository.userData.length).to.eql(6);
    });

    it('should be able to find the current user', () => {
        userRepository.returnCurrentUser(10)
        expect(userRepository.currentUser).to.eql(  {
            "id": 10,
            "name": "Roslyn Bernhard",
            "address": "22859 Sean Meadow, Lake Dorthyfort MA 89560",
            "email": "Hillary83@gmail.com",
            "strideLength": 4.1,
            "dailyStepGoal": 3000,
            "friends": [
              40,
              33
            ]
        });
        
    
    });

});
