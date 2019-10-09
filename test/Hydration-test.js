const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const mockUserData = require('../mock/mockUserData');
const Hydration = require('../src/Hydration');
const hydrationData = require('../src/hydration');

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

});
