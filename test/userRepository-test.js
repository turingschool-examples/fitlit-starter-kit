const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository');
const fakeUsers = require('../data/fakeUsers');
describe('User Repository', () => {
    let userRepository;
beforeEach(() => {
    userRepository = new UserRepository(fakeUsers)
});
    it('should be a function', () => {
        expect(UserRepository).to.be.a('function');
    });

    it('should have access to all user information', () => {
        expect(userRepository.data).to.eql(fakeUsers)
    });

    it('should return a users information based on their ID', () => {
        expect(userRepository.getUserData(1)).to.eql({
            "id": 1,
            "name": "Luisa Hane",
            "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            "email": "Diana.Hayes1@hotmail.com",
            "strideLength": 4.3,
            "dailyStepGoal": 10000,
            "friends": [
                16,
                4,
                8
            ]
        });
    });

    it('should get all users step goals average', () => {

        expect(userRepository.getAllUserStepGoalAverage()).to.equal(6500)
    });
});