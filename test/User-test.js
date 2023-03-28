import { expect } from 'chai';
import User from '../src/user.js';


describe('User', () => {
    let testUser;
    let userList;
    beforeEach('data creation', function () {
        userList = [
            {
                "id": 46,
                "name": "Santa Zboncak",
                "address": "9246 Collins Skyway, Roselynville IN 13036",
                "email": "Mohammed.Gislason64@yahoo.com",
                "strideLength": 4.2,
                "dailyStepGoal": 11000,
                "friends": [
                  44,
                  34,
                  23,
                  9,
                  3
                ]
              },
              {
                "id": 47,
                "name": "Ramona Ankunding",
                "address": "130 Weber Lane, New Alexandroshire FL 01477",
                "email": "Jessica.Bins32@yahoo.com",
                "strideLength": 3.6,
                "dailyStepGoal": 11000,
                "friends": [
                  23,
                  32,
                  39
                ]
              },
            {
                "id": 48,
                "name": "Kenny Zboncak",
                "address": "2077 West Loaf, Lilianefort SD 09435",
                "email": "Aliza.Schulist2@hotmail.com",
                "strideLength": 2.5,
                "dailyStepGoal": 7000,
                "friends": [
                    33,
                    23,
                    46,
                    8
                ]
            },
            {
                "id": 49,
                "name": "Vida Lueilwitz",
                "address": "85485 Lesley Islands, Predovichaven WY 84422",
                "email": "Zella.Jacobi@hotmail.com",
                "strideLength": 3.3,
                "dailyStepGoal": 8000,
                "friends": [
                    3,
                    14,
                    45
                ]
            },
            {
                "id": 50,
                "name": "Karianne Berge",
                "address": "40555 White Knoll, New Christophechester MA 18097",
                "email": "Amy19@yahoo.com",
                "strideLength": 4.5,
                "dailyStepGoal": 10000,
                "friends": [
                    46,
                    48,
                    12
                ]
            }
        ]


        testUser = new User(48, userList);
    });

    it('should be a function', function () {
        expect(User).to.be.a('function');
    });

    it('should be an instance of user', function () {
        expect(testUser).to.be.an.instanceof(User);
    });

    it('should be state if a user id is valid', function () {
        const invalidUser = new User (14, userList)
        expect(invalidUser).to.be.equal('user not found');
    });

    it('should store a users id', function () {
        expect(testUserID.id).to.equal(48);
    });

    it('should store a user name', function () {
        expect(testUserID.name).to.equal("Santa Zboncak");
    });

    it('should store a user address', function () {
        expect(testUserID.address).to.equal("9246 Collins Skyway, Roselynville IN 13036");
    });

    it('should store a user email', function () {
        expect(testUserID.email).to.equal("Mohammed.Gislason64@yahoo.com");
    });

    it('should store the stridelength of the user', function () {
        expect(testUserID.strideLength).to.equal(4.2);
    });

    it('should store the daily step goal of the user', function () {
        expect(testUserID.dailyStepGoal).to.equal(11000);
    });

    it('should store a user address', function () {
        expect(testUserID.userFriends).to.deep.equal([44, 34, 23, 9, 3]);
    });

    it('should find the users first name', function () {
        expect(testUserID.findUserFirstName()).to.be.equal('Santa');
    });

    it('should find a user by id', function () {
        expect(testUserID.findUserbyId(48)).to.deep.equal({
            "id": 48,
            "name": "Kenny Zboncak",
            "address": "2077 West Loaf, Lilianefort SD 09435",
            "email": "Aliza.Schulist2@hotmail.com",
            "strideLength": 2.5,
            "dailyStepGoal": 7000,
            "friends": [
                33,
                23,
                46,
                8
            ]
        });
    });

    it('should find the overall step goal average', function () {
        expect(testUserID.findOverAllStepGoalAvg()).to.be.equal(9400);
    });

    it('should generate a random user', function () {
        expect(testUserID.generateRandomUser().id).to.be.below(51);
        expect(testUserID.generateRandomUser().id).to.be.above(45);
    });

    it('should generate a random user with all of their user info', function () {
        expect(testUserID.generateRandomUser().name).to.be.a('string');
        expect(testUserID.generateRandomUser().address).to.be.a('string')
        expect(testUserID.generateRandomUser().email).to.be.a('string')
        expect(testUserID.generateRandomUser().strideLength).to.be.a('number')
        expect(testUserID.generateRandomUser().dailyStepGoal).to.be.a('number')
        expect(testUserID.generateRandomUser().friends).to.be.an('array')
    });

});