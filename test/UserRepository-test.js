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
    
});
