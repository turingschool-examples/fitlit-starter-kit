const chai = require('chai');
const assert = require('chai').assert;

const User = require('../src/userClass.js')

describe('User', () => {
  let user1, user2, user3, user4, user5;
  beforeEach( () => {
    user1 = new User({
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

    it('should be a function', () => {
      assert.isFunction(User);
    });

    it('should be an instance of the User class', () => {
      assert.equal(user1 instanceof User, true)
    });

    it('should return a user\'s first name only', () => {
      assert.equal(user1.returnFirstName(), 'Luisa')
    })
 
}); 