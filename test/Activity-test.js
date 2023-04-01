import { expect } from 'chai';
import Activity from '../src/Activity';

describe('Activity', () => {
    let testUser;
    let activityLog;
    beforeEach('data creation', () => {
        activityLog = {
            activityData: [
                { "userID": 1, "date": "2023/03/24", "numSteps": 7362, "minutesActive": 261, "flightsOfStairs": 26 },
                { "userID": 2, "date": "2023/03/24", "numSteps": 3049, "minutesActive": 125, "flightsOfStairs": 43 },
                { "userID": 3, "date": "2023/03/24", "numSteps": 12970, "minutesActive": 282, "flightsOfStairs": 38 },
                { "userID": 4, "date": "2023/03/24", "numSteps": 8934, "minutesActive": 294, "flightsOfStairs": 19 },
                { "userID": 5, "date": "2023/03/24", "numSteps": 8443, "minutesActive": 136, "flightsOfStairs": 43 },
                { "userID": 6, "date": "2023/03/24", "numSteps": 13297, "minutesActive": 116, "flightsOfStairs": 13 },
                { "userID": 7, "date": "2023/03/24", "numSteps": 7765, "minutesActive": 74, "flightsOfStairs": 31 }]
        };
        testUser = new Activity({
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
        }, activityLog)
    });

    it('should be a function', function () {
        expect(Activity).to.be.a('function');
    });

    it('should be an instance of new Activity class', function () {
        expect(testUser).to.be.an.instanceof(Activity);
    });

    it.skip('should store an instance of the user', function () {
        expect(testUser.user).to.be.deep.equal({
            
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
    });

    it('should store a users activity logs', function () {
        ///user logs need to be added
        expect(testUser.userLogs).to.deep.equal();
    });

})