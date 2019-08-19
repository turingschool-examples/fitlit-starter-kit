const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const data = require('../mock-data/mock-users');

let userRepo;

describe('UserRepository', () => {

    beforeEach( () => {
        userRepo = new UserRepository(data); 
    });
    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of UserRepository', () => {
        expect(userRepo).to.be.an.instanceof(UserRepository);
    });

    it('should have a parameter to take in the user data', () => {
        expect(userRepo.data).to.eql(data);
    });

    describe('fetchUserData', () => {
        it('should find user based on ID', () => {
            expect(userRepo.fetchUserData(1)).to.eql(data[0]);
            expect(userRepo.fetchUserData(5)).to.eql(data[4]);
        });
    });
    
    describe('findAverageStepGoalOfAllUSers', () => {
        it('should be able to find average step goal amongst all the users', () => {
          expect(userRepo.findAverageStepGoalOfAllUsers()).to.equal(6400); 
        });
    });
        
});

