import { expect } from 'chai';
import User from '../src/User';
// import UserRepository from '../src/UserRepository';
import users from '../src/data/users';
import userData from '../src/data/users';


describe('User', () => {
    let user1, user2, user3
    beforeEach(() => {
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
        })
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
        })
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
        })
    })

    it('should be a function', function () {
        expect(User).to.be.a('function');
    });

    it('should instantiate a new User', function () {

        expect(User).to.be.a('function');
    })

    it('should have a Userdata parameter', function () {

        expect(user1.userData).to.deep.equal({
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
    })

    it('should have an id', function () {

        expect(user1.userData.id).to.equal(1);
    })

    it('should have an name', function () {

        expect(user1.userData.name).to.equal("Luisa Hane");
    })

    it('should have an address', function () {

        expect(user1.userData.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    })

    it('should have an email', function () {

        expect(user1.userData.email).to.equal("Diana.Hayes1@hotmail.com");
    })

    it.skip('should have a strideLength', function () {

        expect(user.strideLength).to.equal(userData.strideLength);
    })

    it.skip('should have a step goal', function () {

        expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
    })

    it.skip('should have friends', function () {


        expect(user.friends).to.equal(userData.friends);
    })

    it.skip('should return users first name', function () {

        user.getFirstName(userData)


        expect(user.name).to.equal(userData.name)
    })

});


// Should be a function 
// Should represent a single player
// Should have a parameter to take in a userData object
//Each user should have id, name, address, email, stride length, daily step goal, friends   hydration/sleep?
// Should have method to return users first name


// Let user1 = new User({"id": 1,
//     "name": "Luisa Hane",
//     "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//     "email": "Diana.Hayes1@hotmail.com",
//     "strideLength": 4.3,
//     "dailyStepGoal": 10000,
//     "friends": [
//       16,
//       4,
//       8
//     ]})