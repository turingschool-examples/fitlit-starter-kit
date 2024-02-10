
import { expect } from 'chai';
import userData from './usersSampleData';
import hydrationSample from './hydrationSample';
import sleepSample from './sleepTestUsers';

import {
    getUserInfo,
    getRandomUser,
    calculateAverageSteps,
    averageOunces,
    dailyOunces,
    weeklyOunces,
    findDailySleep,
     calculateAvgHours,
     calculateAvgQuality,
     findRecentWeek,
     findWeeklyHours,
     findWeeklyQuality
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

            expect(averageOunces(1)).to.equal(59)
        });
    });

    describe('dailyOunces', () => {
        it('should return a single users daily water intake', () => {
            let user = hydrationSample.hydrationData[0].userID
            let e = dailyOunces(user)
            expect(e).to.equal('2023/04/01 : 88oz')

        });
    });

    describe('weeklyOunces', () => {
        it('should calculate single users weekly ounces', () => {
            let user = hydrationSample.hydrationData[0].userID
            let e = weeklyOunces(user)
            expect(e).to.deep.equal(
                [{ date: '2023/03/24', numOunces: 28 },
                { date: '2023/03/25', numOunces: 50 },
                { date: '2023/03/27', numOunces: 63 },
                { date: '2023/03/28', numOunces: 97 },
                { date: '2023/03/29', numOunces: 20 },
                { date: '2023/03/30', numOunces: 76 },
                { date: '2023/03/31', numOunces: 51 }])
        });
        it('should not go over 7 days', () => {
            let user = hydrationSample.hydrationData[0].userID
            let e = weeklyOunces(user)
            expect(e).to.not.equal(
                [{ date: '2023/03/24', numOunces: 28 },
                { date: '2023/03/25', numOunces: 50 },
                { date: '2023/03/27', numOunces: 63 },
                { date: '2023/03/28', numOunces: 97 },
                { date: '2023/03/29', numOunces: 20 },
                { date: '2023/03/30', numOunces: 76 },
                { date: '2023/03/31', numOunces: 88 }])
        });
    });
    describe('findDailySleep', () => {
        it('should return users hours slept and sleep quality for a single day ', () => {
            let e = findDailySleep(sleepSample)
            expect(e).to.equal('2023/03/30 : 6.2hrs | Sleep Quality: 3.3')
        });
    });
    describe('calculateAvgHours', () => {
        it('should return the average hours slepts for all time', () => {
            let e = calculateAvgHours(sleepSample)
            expect(e).to.equal(7)
            expect(e).to.not.equal(6.7)
        });
    });
    describe('calculateAvgQuality', () => {
        it('should return the average hours slept for all time', () => {
            let e = calculateAvgQuality(sleepSample)
            expect(e).to.equal(4)
            expect(e).to.not.equal(3.6)
        });
    });
    describe('findRecentWeek', () => {
        it('should find the most recent week for a user', () => {
            let e = findRecentWeek(sleepSample)
            expect(e).to.equal('2023/03/24')
        });
    });
    describe('findWeeklyHours', () => {
        it('should create an array of objects with date and hours slept', () => {
            let date = findRecentWeek(sleepSample)
            let e = findWeeklyHours(sleepSample, date)
            expect(e).to.deep.equal([
                {date: "2023/03/24", hours: 9.6},
                {date: "2023/03/25", hours: 6.3},
                {date: "2023/03/26", hours: 5.4},
                {date: "2023/03/27", hours: 7.1},
                {date: "2023/03/28", hours: 6},
                {date: "2023/03/29", hours: 5.6},
                {date: "2023/03/30", hours: 6.2},
            ])
        });
    });
    describe('', () => {
        it.skip('', () => {

        });
    });
    describe('', () => {
        it.skip('', () => {

        });
    });
});
