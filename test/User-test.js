const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User.js');
const mockUsers = require('../mock-data/mock-users.js')
const UserRepository = require('../src/UserRepository.js')

let mockUser1, mockUser2, mockUser3

describe('User', function() {

    beforeEach(function() {
      mockUser1 = new User(mockUsers[0])
      mockUser2 = new User(mockUsers[1])
      mockUser3 = new User(mockUsers[2])
      });

    it('should be a function', function() {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
        expect(mockUser1).to.be.an.instanceof(User);
    }); 

    it('should store a user/s id', function() {
        expect(mockUser1.id).to.equal(1);
    });

    it('should store a user/s name', function() {
        expect(mockUser2.name).to.equal("Jarvis Considine");
    });

    it('should store a user/s address', function() {
        expect(mockUser3.address).to.equal("85823 Bosco Fork, East Oscarstad MI 85126-5660");
    });

    it('should store a user/s email', function() {
        expect(mockUser3.email).to.equal("Elwin.Tromp@yahoo.com");
    });

    it('should store a user/s stride length', function() {
        expect(mockUser2.strideLength).to.equal(4.5);
    });

    it('should store a user/s daily step goal ', function() {
        expect(mockUser1.dailyStepGoal).to.equal(10000);
    });

    it('should store a user/s friends list by id', function() {
        expect(mockUser2.friends).to.eql([
        9,
        18,
        24,
        19
      ]);
    });

    describe('giveName', () => 
        it('should be able to return the first name only of a user', function() {
     expect(mockUser3.giveName()).to.equal("Herminia")
    }));
});

