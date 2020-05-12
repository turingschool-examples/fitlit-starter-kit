const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const randomUser = require('../data/users');

describe('UserRepository', () => {

    let userRepo;

    beforeEach(() => {
        userRepo = new UserRepository()
    })

    it('should be a function', () => {
        expect(UserRepository).to.be.a('function');
    })

    it('should be an instance of UserRepository', () => {
        expect(userRepo).to.be.an.instanceof(UserRepository);
      });

    it('should have data from the user', () => {
        expect(userRepo.data).to.equal(randomUser);
    })

    it('should be able to get data by the user id', () => {
        let getData = userRepo.getDataById()
        expect(getData).to.equal()
    })

    it('should be able to get average step goal for user', () => {
        let getSteps = userRepo.fetchAverageStepGoal()
        expect(getSteps).to.equal(randomUser)

    })
});