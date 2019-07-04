const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository.js');
const MockUsers = require('../mock-data/mock-users.js')


var newUserRepo

describe('UserRepository', function() {

    beforeEach(function() {

        newUserRepo = new UserRepository(MockUsers, 1)
  });

    it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of UserRepository', function() {
    expect(newUserRepo).to.be.an.instanceof(UserRepository);
    }); 

    it('should store a a collection of users' , function() {
    expect(newUserRepo.dataset).to.equal(MockUsers);
    });

    it('should store the id correlated with the user trying to be accessed', function() {
      expect(newUserRepo.id).to.equal(1);
    });

    describe('findUser', () =>
        it('should be able to find the user based on the id it stored', function() {
            expect(newUserRepo.findUser()).to.eql(MockUsers[0])
        }));

    describe('findAverageStepGoal', () =>
        it('should be able to find the average steps among all users', function() {
      expect(newUserRepo.findAverageStepGoal()).to.equal(6666)
        }));
    });

