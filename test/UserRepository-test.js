const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository.js');


var users, newUserRepo

describe('UserRepository', function() {

    beforeEach(function() {
        users = [
            {
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
            },
            {
              "id": 2,
              "name": "Jarvis Considine",
              "address": "30086 Kathryn Port, Ciceroland NE 07273",
              "email": "Dimitri.Bechtelar11@gmail.com",
              "strideLength": 4.5,
              "dailyStepGoal": 5000,
              "friends": [
                9,
                18,
                24,
                19
              ]
            },
            {
              "id": 3,
              "name": "Herminia Witting",
              "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
              "email": "Elwin.Tromp@yahoo.com",
              "strideLength": 4.4,
              "dailyStepGoal": 5000,
              "friends": [
                19,
                11,
                42,
                33
              ]
            },
            {
              "id": 4,
              "name": "Mae Connelly",
              "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
              "email": "Marcos_Pollich@hotmail.com",
              "strideLength": 3.1,
              "dailyStepGoal": 4000,
              "friends": [
                48,
                7,
                44,
                8
              ]
            },
            {
              "id": 5,
              "name": "Erick Schaden",
              "address": "514 Mayert Walk, Jordaneside SC 55023-6523",
              "email": "Vanessa_Gerhold@gmail.com",
              "strideLength": 3.1,
              "dailyStepGoal": 8000,
              "friends": [
                13,
                44,
                49,
                33,
                10
              ]
            }
        ]
        newUserRepo = new UserRepository(users, 1)
  });

    it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
    });

    it('should be an instance of UserRepository', function() {
    expect(newUserRepo).to.be.an.instanceof(UserRepository);
    }); 

    it('should store a a collection of users' , function() {
    expect(newUserRepo.dataset).to.equal(users);
    });

    it('should store the id correlated with the user trying to be accessed', function() {
      expect(newUserRepo.id).to.equal(1);
    });

    describe('findUser', () =>
        it('should be able to find the user based on the id it stored', function() {
            expect(newUserRepo.findUser()).to.eql({
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
        }));

    describe('findAverageStepGoal', () =>
        it('should be able to find the average steps among all users', function() {
      expect(newUserRepo.findAverageStepGoal()).to.equal(6400)
    }));
});
