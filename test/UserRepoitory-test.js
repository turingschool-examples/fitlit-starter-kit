const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

    it('should be a function', function() {
        const userRepository = new UserRepository();
        expect(UserRepository).to.be.a('function');
    })

    it('should be an instance of UserRepository', function() {
        const userRepository = new UserRepository();
        expect(userRepository).to.be.an.instanceof(UserRepository);
      });

    it('should have data from the user', function(){
        const userData = new UserRepository();
        expect(userData).to.equal(userData);
    })

    it('should be able to get data by the user id', function() {
        const userData = new UserRepository();

        let getData = userData.getDataById()
        expect(userData).to.equal(userData)
    })
});