const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');

let user;

describe('User', () => {

    beforeEach( () => {
        user = new User(mockUserData[0]);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('should have a user id', () => {
        expect(user.id).to.equal(10);
    });

    it('should have a name', () => {
        expect(user.name).to.equal('Roslyn Bernhard');
    });

    it('should have an address', () => {
        expect(user.address).to.equal('22859 Sean Meadow, Lake Dorthyfort MA 89560');
    });

    it('should have a user email', () => {
        expect(user.email).to.equal('Hillary83@gmail.com');
    });

    it('should have a strideLength', () => {
        expect(user.strideLength).to.equal(4.1);
    });

    it('should have a dailyStepGoal', () => {
        expect(user.dailyStepGoal).to.equal(3000);
    });

    it('should have friends', () => {
        expect(user.friends).to.eql([40, 33]);
    });

    it('should return the user\'s first name', () => {
        expect(user.returnFirstName()).to.equal('Roslyn');
    });
});
