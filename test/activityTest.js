const chai = require('chai')
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const fakeData = require('../fakeData/fakeUsers');
const fakeActivity = require('../fakeData/fakeActivity');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activityRepository');

describe('Activity', function() {


      it('should be able to calculate the miles a user has walked', function () {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
        // const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");
        const userActivity = new ActivityRepository(fakeActivity)

        
        expect(repo1.calculateMiles(1)).to.equal(.34)

      });

      it('should be able to return the minutes active for a user given a specific date', function() {
          const object = {
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
          }
          const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
          const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");
        
        expect(repo1.getDailyMinutesActive()).to.equal(140)
        expect(repo2.getDailyMinutesActive()).to.equal(140)
      });

      it('should be able to get a users weekly average of minutes they were active', function() {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/15");
        const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");

        expect(repo1.getWeeklyMinutesActive(1)).to.equal(171)
      });

      it('should show if a user has met their step goal on a given date', function() {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/16");
        const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");

        expect(repo1.achieveStepGoal(1)).to.equal('step goal not met!')
        expect(repo2.achieveStepGoal(25)).to.equal('step goal met!')
      });

      it('should tell a user if they have exceeded their step goal', function() {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/16");
        const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");

        expect(repo1.exceedStepGoal(1)).to.eql([{
                userID: 1,
                date: '2019/06/17',
                numSteps: 14329,
                minutesActive: 168,
                flightsOfStairs: 18
            },
            {
                userID: 1,
                date: '2019/06/20',
                numSteps: 14478,
                minutesActive: 140,
                flightsOfStairs: 12
            },
            {
                userID: 1,
                date: '2019/06/22',
                numSteps: 10289,
                minutesActive: 119,
                flightsOfStairs: 6
            },
            {
                userID: 1,
                date: '2019/06/23',
                numSteps: 13928,
                minutesActive: 218,
                flightsOfStairs: 21
            }
        ])
        expect(repo2.exceedStepGoal(25)).to.eql([{
            userID: 25,
            date: '2019/06/15',
            numSteps: 5144,
            minutesActive: 282,
            flightsOfStairs: 16
        }])
      });

      it('should return a users all time stair climbing record', function() {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/16");
        const repo2 = new Activity(fakeData, fakeActivity, 5144, "2019/06/15");

        expect(repo1.findStairClimbingRecord(1)).to.eql({
            userID: 1,
            date: '2019/06/16',
            numSteps: 6637,
            minutesActive: 175,
            flightsOfStairs: 36
        })
        expect(repo2.findStairClimbingRecord(25)).to.eql({
            "userID": 25,
            "date": "2019/06/15",
            "numSteps": 5144,
            "minutesActive": 282,
            "flightsOfStairs": 16
        })
    });
        it('should return the average of all users stair climbing stats', function () {
        const repo1 = new Activity(fakeData, fakeActivity, 3577, "2019/06/16");
            
            expect(repo1.getAllUsersStairClimbingAverage()).to.eql(22)
            //   15 users
        });
    });