const chai = require('chai');
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const fakeUsers = require('../data/fakeUsers');
describe('User', () => {
    let user;
beforeEach(() => {
    userRepository = new UserRepository(fakeUsers)
    let userInfo = userRepository.getUserData(1)
    user = new User(userInfo);
});
    it('should be a function', () => {
        expect(User).to.be.a('function')
    });

    it('should have a users information', () => {
        expect(user.userInfo).to.eql({
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

    it('should get the users first name', () => {
        expect(user.getUserFirstName()).to.equal('Luisa');
    })
});