const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User.js');


var user1, user2, user3, user4, user5

describe('User', function() {

    beforeEach(function() {
        user1 = new User( {
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
        user2 = new User({
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
          });
        user3 = new User({
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
          });
        user4 = new User({
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
          });
        user5 = new User({
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
          });
        });

    it('should be a function', function() {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function() {
        expect(user1).to.be.an.instanceof(User);
    }); 

    it('should store a user/s id', function() {
        expect(user1.id).to.equal(1);
    });

    it('should store a user/s name', function() {
        expect(user2.name).to.equal("Jarvis Considine");
    });

    it('should store a user/s address', function() {
        expect(user3.address).to.equal("85823 Bosco Fork, East Oscarstad MI 85126-5660");
    });

    it('should store a user/s email', function() {
        expect(user4.email).to.equal("Marcos_Pollich@hotmail.com");
    });

    it('should store a user/s stride length', function() {
        expect(user5.strideLength).to.equal(3.1);
    });

    it('should store a user/s daily step goal ', function() {
        expect(user1.dailyStepGoal).to.equal(10000);
    });

    it('should store a user/s friends list by id', function() {
        expect(user2.friends).to.eql([
        9,
        18,
        24,
        19
      ]);
    });

    describe('giveName', () => 
        it('should be able to return the first name only of a user', function() {
     expect(user3.giveName()).to.equal("Herminia")
    }));
});

