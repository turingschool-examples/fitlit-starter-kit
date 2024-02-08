
import { expect } from 'chai';
import userData from './usersSampleData';
import hydrationSample from './hydrationSample';
import { getUserInfo, 
        getRandomUser, 
        calculateAverageSteps, 
        averageOunces, 
        dailyOunces,
        weeklyOunces,
        } 
from '../test/userInfo';

describe('find user info', () => {
    let userInfo;
    let trystanId;
    beforeEach(() => {
        userInfo = userData
        trystanId = 1
    });

    describe('getUserInfo', () => {
        it('should return user info based on ID', function () {
            let userID = trystanId

            expect(userInfo.users[0].id === userID).to.equal(true)
            expect(userInfo.users[1].id === userID).to.equal(false)

            expect(getUserInfo(userID)).to.deep.equal({
                "id": 1,
                "name": "Trystan Gorczany",
                "address": "9484 Lucas Flat, West Kittymouth WA 67504",
                "email": "Taurean_Pollich31@gmail.com",
                "strideLength": 4,
                "dailyStepGoal": 7000,
                "friends": [5, 43, 46, 11]
            });
        });
    });

    describe('getRandomUser', () => {
        it('should randomly generate a userID', function () {
            const randomUser1 = getRandomUser(userInfo.users)
            const randomUser2 = getRandomUser(userInfo.users)

            expect(randomUser1).to.be.a('number')
            expect(randomUser2).to.be.a('number')
            expect(randomUser1).to.not.equal(randomUser2)
        });
    });

    describe('calculateAverageSteps', () => {
        it('should calculate average steps among all users', function () {

            expect(calculateAverageSteps(userInfo, 'dailyStepGoal')).to.equal(6600)
        });
    });

    describe('averageOunces', () => {
        it('should calculate average oz among single users', function () {
            
            expect(averageOunces(hydrationSample, 1)).to.equal(60)
        });
    });

    describe('dailyOunces', () => {
        it('should return a single users daily water intake', () => {
            let e = dailyOunces(hydrationSample, 1)
            expect(e).to.equal(97)

        });
    });

    describe('weeklyOunces', () => {
        it.skip('should calculate single users weekly ounces', () => {
            

            expect(weeklyOunces(hydrationSample, 1)).to.equal(60)
        });
    });
});
