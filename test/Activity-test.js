import { expect } from 'chai';
import Activity from '../src/Activity';
import UserRepository from '../src/Activity';

describe('Activity', () => {
    let userActivityData, singleUserActivity,userData;

    beforeEach(() => {
        userActivityData = [{
            userID: 1,
            date: "2019/06/15",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
            },
            {
            userID: 1,
            date: "2019/06/16",
            numSteps: 6637,
            minutesActive: 175,
            flightsOfStairs: 36
            },
            {
            userID: 1,
            date: "2019/06/17",
            numSteps: 14329,
            minutesActive: 168,
            flightsOfStairs: 18
            }]

        singleUserActivity = new Activity(userActivityData);
            ///userData is just coppied from userRepo Test
        userData = [
            {
                "id": 1,
                "name": "Luisa Hane",
                "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
                "email": "Diana.Hayes1@hotmail.com",
                "strideLength": 4.3,
                "dailyStepGoal": 10,
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
                "dailyStepGoal": 50,
                "friends": [
                    9,
                    18,
                    24,
                    19
                ]
            }
        ];
      

    })
    it('should be a function',  () => {
        expect(Activity).to.be.a('function')
    });

    it('should instantiate Activity',() => {
        expect(singleUserActivity).to.be.an.instanceOf(Activity);
    });

    it('should be able to identify a user by their ID', () => {
        expect(singleUserActivity.findData(1,userData)).to.equal(userData[0]);
    });

    it('should return a user\s number of steps', () => {
        expect(singleUserActivity.getNumberOfStepsForToday(1)).to.equal(3577)
    });

    it('should return a user\s minutes active', () => {
        expect(userActivityData[0].minutesActive).to.equal(140)
    });

    it('should return a user\s flights of stairs climbed', () => {
        expect(userActivityData[0].flightsOfStairs).to.equal(16)
    });

    it('should return a users miles from steps', () => {
        expect(singleUserActivity.getMilesFromSteps(1,userData)).to.equal('2.9')
    });

    // it('should return the miles a user has walked based on their number of steps') {
    //     expect()
    // };

    // it('should return how many minutes were they active for a given day') {
    //     expect()
    // };

    // it('should return the average minutes active for a given week') {
    //     expect()
    // };

    // it('should return the miles a user has walked based on their number of steps') {
    //     expect()
    // };

    // it('should return true if a user achieved their daily step goal') {
    //     expect()
    // };

    // it('should return false if a user did not achieve their daily step goal') {
    //     expect()
    // };

    // it('should return all the days where they exceeded their step goal') {
    //     expect()
    // };

    // it('should return their all-time stair climbing record') {
    //     expect()
    // };

    // it('should return the average stairs climbed for a specified date') {
    //     expect()
    // };

    // it('should return the average steps taken for a specific date') {
    //     expect()
    // };

    // it('should return the average minutes active for a specific date') {
    //     expect()
    // };
})
