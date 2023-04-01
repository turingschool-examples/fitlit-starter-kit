import { expect } from 'chai';
import Activity from '../src/Activity';
import user from '../src/user'

describe('Activity', () => {
    let testUser;
    let testUserInfo;
    let activityLogs;
    beforeEach('data creation', () => {
        activityLogs = {
            activityData: [
                { "userID": 1, "date": "2023/03/24", "numSteps": 7362, "minutesActive": 250, "flightsOfStairs": 26 },
                { "userID": 2, "date": "2023/03/24", "numSteps": 5205, "minutesActive": 200, "flightsOfStairs": 16 },
                { "userID": 1, "date": "2023/03/23", "numSteps": 6502, "minutesActive": 275, "flightsOfStairs": 23 },
                { "userID": 2, "date": "2023/03/23", "numSteps": 4867, "minutesActive": 155, "flightsOfStairs": 10 },
                { "userID": 1, "date": "2023/03/22", "numSteps": 5505, "minutesActive": 361, "flightsOfStairs": 15 },
                { "userID": 1, "date": "2023/03/21", "numSteps": 4575, "minutesActive": 211, "flightsOfStairs": 17 },
                { "userID": 1, "date": "2023/03/20", "numSteps": 9675, "minutesActive": 501, "flightsOfStairs": 22 },
                { "userID": 1, "date": "2023/03/19", "numSteps": 3493, "minutesActive": 201, "flightsOfStairs": 15 },
                { "userID": 3, "date": "2023/03/18", "numSteps": 5327, "minutesActive": 185, "flightsOfStairs": 14 },
                { "userID": 1, "date": "2023/03/18", "numSteps": 3505, "minutesActive": 265, "flightsOfStairs": 22 }
            ]
        };

        testUserInfo = new user({
            "id": 1,
            "name": "Trystan Gorczany",
            "address": "9484 Lucas Flat, West Kittymouth WA 67504",
            "email": "Taurean_Pollich31@gmail.com",
            "strideLength": 4,
            "dailyStepGoal": 7000,
            "friends": [
                5,
                43,
                46,
                11
            ]
        });

        testUser = new Activity(testUserInfo, activityLogs)
    });

    it('should be a function', function () {
        expect(Activity).to.be.a('function');
    });

    it('should be an instance of new Activity class', function () {
        expect(testUser).to.be.an.instanceof(Activity);
    });

    it.skip('should store a users id', function () {
        expect(testUser.userId).to.equal(1);
    });

    it.skip('should store a users stride length', function () {
        expect(testUser.strideLength).to.equal(4);
    });

    it.skip('should store a users daily step goal', function () {
        expect(testUser.dailyStepGoal).to.equal(7000);
    });

    it.skip('should store a users activity logs', function () {
        expect(testUser.activityLogs).to.deep.equal([
            { "userID": 1, "date": "2023/03/24", "numSteps": 7362, "minutesActive": 250, "flightsOfStairs": 26 },
            { "userID": 1, "date": "2023/03/23", "numSteps": 6502, "minutesActive": 275, "flightsOfStairs": 23 },
            { "userID": 1, "date": "2023/03/22", "numSteps": 5505, "minutesActive": 361, "flightsOfStairs": 15 },
            { "userID": 1, "date": "2023/03/21", "numSteps": 4575, "minutesActive": 211, "flightsOfStairs": 17 },
            { "userID": 1, "date": "2023/03/20", "numSteps": 9675, "minutesActive": 501, "flightsOfStairs": 22 },
            { "userID": 1, "date": "2023/03/19", "numSteps": 3493, "minutesActive": 201, "flightsOfStairs": 15 },
            { "userID": 1, "date": "2023/03/18", "numSteps": 3505, "minutesActive": 265, "flightsOfStairs": 22 }
        ]);
    });



    it.skip('should find the miles per day when given a date', function () {
        expect(testUser.calculateMiles('2023/03/22')).to.be.equal(4.2);
        expect(testUser.calculateMiles('2023/03/18')).to.be.equal(2.7);
    })

    it.skip('should find the active minuts by day', function () {
        expect(testUser.calculateActiveMinutes('2023/03/21')).to.be.equal(211);
    });

    it.skip('should find if they reached the step goal for a specific day', function () {
        expect(testUser.checkStepGoalReached('2023/03/18')).to.be.equal('Not quite! 3495 steps to go!');
        expect(testUser.checkStepGoalReached('2023/03/24')).to.be.equal(`Good Job! 7362 meets your goal!`);
    });
});