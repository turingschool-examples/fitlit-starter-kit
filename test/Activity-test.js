import { expect } from 'chai';
import Activity from '../src/Activity';
import UserRepository from '../src/Activity'; // Is this being utilized?

describe('Activity', () => {
    let usersActivity, userOneActivity, usersActivityData, singleUserActivity, userData;

    beforeEach(() => {
        userOneActivity = [ // Changed by Lee
            {
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
            },
            {
                userID: 1,
                date: "2019/06/18",
                numSteps: 4419,
                minutesActive: 165,
                flightsOfStairs: 33
            },
            {
                userID: 1,
                date: "2019/06/19",
                numSteps: 8429,
                minutesActive: 275,
                flightsOfStairs: 2
            },
            {
                userID: 1,
                date: "2019/06/20",
                numSteps: 14478,
                minutesActive: 140,
                flightsOfStairs: 12
            },
            {
                userID: 1,
                date: "2019/06/21",
                numSteps: 6760,
                minutesActive: 135,
                flightsOfStairs: 6
            },
            {
                userID: 1,
                date: "2019/06/22",
                numSteps: 10289,
                minutesActive: 119,
                flightsOfStairs: 6
            },
        ];

        usersActivityData = [ // Changed by Lee
            {
                userID: 1,
                date: "2019/06/15",
                numSteps: 3577,
                minutesActive: 140,
                flightsOfStairs: 16
            },
            {
                userID: 2,
                date: "2019/06/15",
                numSteps: 4294,
                minutesActive: 138,
                flightsOfStairs: 10
            },
            {
                userID: 3,
                date: "2019/06/15",
                numSteps: 7402,
                minutesActive: 116,
                flightsOfStairs: 33
            },
            {
                userID: 1,
                date: "2019/06/16",
                numSteps: 6637,
                minutesActive: 175,
                flightsOfStairs: 36
            },
            {
                userID: 2,
                date: "2019/06/16",
                numSteps: 4112,
                minutesActive: 220,
                flightsOfStairs: 37
            },
            {
                userID: 3,
                date: "2019/06/16",
                numSteps: 12304,
                minutesActive: 152,
                flightsOfStairs: 8
            },
            {
                userID: 1,
                date: "2019/06/17",
                numSteps: 14329,
                minutesActive: 168,
                flightsOfStairs: 18
            },
            {
                userID: 2,
                date: "2019/06/17",
                numSteps: 13750,
                minutesActive: 65,
                flightsOfStairs: 4
            },
            {
                userID: 3,
                date: "2019/06/17",
                numSteps: 4547,
                minutesActive: 97,
                flightsOfStairs: 5
            },
        ];

        usersActivity = new Activity(usersActivityData); // Changed by Lee
        singleUserActivity = new Activity(userOneActivity); // Changed by Lee

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
        // ****** Constructor Tests ******

    it('should be a function',  () => {
        expect(Activity).to.be.a('function')
    });

    it('should instantiate Activity',() => {
        expect(usersActivity).to.be.an.instanceOf(Activity);
    });


    it('should be able to identify a user by their ID', () => {
        expect(usersActivity.findData(1, userData)).to.equal(userData[0]);
        expect(usersActivity.findData(2, userData)).to.equal(userData[1]);

    });

    it('should be able to identify a user specified date', () => {
        expect(singleUserActivity.findDate("2019/06/15")).to.deep.equal("2019/06/15");
      });

    it('should be able to identify a specified user object by date', () => {
        expect(singleUserActivity.findUser("2019/06/15")).to.deep.equal(usersActivityData[0]);
    });

    it('should return a user\s number of steps', () => {
        expect(singleUserActivity.returnDailySteps("2019/06/15")).to.equal(3577)
    });

    it('should return a user\s minutes active', () => {
        expect(singleUserActivity.returnDailyMinutesActive("2019/06/15")).to.equal(140)
    });

    it('should return a user\s flights of stairs climbed', () => {
        expect(singleUserActivity.returnDailyFlightsOfStairs("2019/06/15")).to.equal(16)
    });

    // ******* Methods Tests ********

    it('should return a users miles from steps', () => {
        expect(singleUserActivity.getUserMilesFromSteps(1, userData, "2019/06/15" )).to.equal('2.9')
    });

    it('should return how many minutes were they active for a given day', () => {
        expect(singleUserActivity.returnDailyMinutesActive("2019/06/15")).to.equal(140)
    });

    it('should return the average minutes active for a given week', () => {
        expect(singleUserActivity.getUserAvgMinutesActivePerWeek(1, "2019/06/21")).to.equal('171.1')
    });

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

    it('should return their all-time stair climbing record', () => {
        expect(singleUserActivity.findAllTimeStairsClimbed(1)).to.equal(36)
    });

    it('should return the average stairs climbed for a specified date', () => {
        expect(usersActivity.returnAllUsersAvgFlights("2019/06/15")).to.equal('19.7')
    });

    it('should return the average steps taken for a specific date', () =>  {
        expect(usersActivity.returnAllUsersAvgStepsTaken("2019/06/15")).to.equal(5091)
    });

    it('should return the average minutes active for a specific date', () => {
        expect(usersActivity.returnAllUsersAvgMinsActive("2019/06/15")).to.equal('131.3')
    });
})
