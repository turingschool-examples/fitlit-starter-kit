import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
    let sleep;
    let sleepData;
    let user1;
    let user2;

    beforeEach(() => {
        sleepData = [
            {
            userID: 1,
            date: "2019/06/15",
            hoursSlept: 6.1,
            sleepQuality: 2.2
            }, 
            {
            userID: 1,
            date: "2019/06/16",
            hoursSlept: 7,
            sleepQuality: 4.7
            },
            {
            userID: 1,
            date: "2019/06/17",
            hoursSlept: 10.8,
            sleepQuality: 4.7
            },
            {
            userID: 1,
            date: "2019/06/18",
            hoursSlept: 5.4,
            sleepQuality: 3
            },
            {
            userID: 1,
            date: "2019/06/19",
            hoursSlept: 4.1,
            sleepQuality: 3.6
            },
            {
            userID: 1,
            date: "2019/06/20",
            hoursSlept: 9.6,
            sleepQuality: 2.9
            },
            {
            userID: 1,
            date: "2019/06/21",
            hoursSlept: 5.1,
            sleepQuality: 2.6
            },
            {
            userID: 1,
            date: "2019/06/22",
            hoursSlept: 8.1,
            sleepQuality: 3.5
            },
            {
            userID: 1,
            date: "2019/06/23",
            hoursSlept: 8.9,
            sleepQuality: 2.2
            },
            {
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 4.4,
            sleepQuality: 1.6
            },
            {
            userID: 2,
            date: "2019/06/16",
            hoursSlept: 4.9,
            sleepQuality: 3.9
            },
            {
            userID: 2,
            date: "2019/06/17",
            hoursSlept: 8,
            sleepQuality: 3.4
            },
            {
            userID: 2,
            date: "2019/06/18",
            hoursSlept: 10.1,
            sleepQuality: 1.8
            },
            {
            userID: 2,
            date: "2019/06/19",
            hoursSlept: 6.9,
            sleepQuality: 1.2
            },
            {
            userID: 2,
            date: "2019/06/20",
            hoursSlept: 4.6,
            sleepQuality: 2.8
            },
            {
            userID: 2,
            date: "2019/06/21",
            hoursSlept: 6.1,
            sleepQuality: 3.5
            },
            {
            userID: 2,
            date: "2019/06/22",
            hoursSlept: 4.7,
            sleepQuality: 4
            },
            {
            userID: 2,
            date: "2019/06/23",
            hoursSlept: 10.1,
            sleepQuality: 1.3
            },
            {
            userID: 2,
            date: "2019/06/24",
            hoursSlept: 7.9,
            sleepQuality: 1.6
            },
            {
            userID: 2,
            date: "2019/06/25",
            hoursSlept: 5.9,
            sleepQuality: 1.6
            }
          ];

          sleep = new Sleep(sleepData)

          user1 = new User({
                id: 1,
                name: "Luisa Hane",
                address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
                email: "Diana.Hayes1@hotmail.com",
                strideLength: 4.3,
                dailyStepGoal: 10000,
                friends: [
                16,
                4,
                8
                ]
              })

          user2 = new User({
                id: 2,
                name: "Jarvis Considine",
                address: "30086 Kathryn Port, Ciceroland NE 07273",
                email: "Dimitri.Bechtelar11@gmail.com",
                strideLength: 4.5,
                dailyStepGoal: 5000,
                friends: [
                9,
                18,
                24,
                19
                ]
            })
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function')
    });

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceof(Sleep)
    });

    it('should get sleep data for user by ID', () => {
        expect(sleep.findSleepDataById(user1.id)).to.deep.equal([       
    { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
    { userID: 1, date: '2019/06/16', hoursSlept: 7, sleepQuality: 4.7 },
    { userID: 1, date: '2019/06/17', hoursSlept: 10.8,sleepQuality: 4.7 },
    { userID: 1, date: '2019/06/18', hoursSlept: 5.4, sleepQuality: 3 },
    { userID: 1, date: '2019/06/19', hoursSlept: 4.1, sleepQuality: 3.6 },
    { userID: 1, date: '2019/06/20', hoursSlept: 9.6, sleepQuality: 2.9 },
    { userID: 1, date: '2019/06/21', hoursSlept: 5.1, sleepQuality: 2.6 },
    { userID: 1, date: '2019/06/22', hoursSlept: 8.1, sleepQuality: 3.5 },
    { userID: 1, date: '2019/06/23', hoursSlept: 8.9, sleepQuality: 2.2 }
    ]);
  });

    it('should find user average number of hours slept per day', () => {
        expect(sleep.findAverageDailySleep(user1.id)).to.equal(7.2)
    })

    it('should find user average sleep quality per day over all time', () => {
        expect(sleep.findAverageSleepQuality(user1.id)).to.equal(3.3)
    })

    it('should find user hours slept by a date', () => {
        expect(sleep.findHoursSleptByDate('2019/06/15')).to.equal(6.1) 
    })

    it('should find sleep quality by date', () => {
      expect(sleep.findSleepQualityByDate('2019/06/15')).to.equal(2.2)
    });

    it.skip('should find weekly hours slept', () => {
      // let hours1 = [
      //   { date: '2019/06/15', hoursSlept: 6.1 },
      //   { date: '2019/06/16', hoursSlept: 7 },
      //   { date: '2019/06/17', hoursSlept: 10.8 },
      //   { date: '2019/06/18', hoursSlept: 5.4 },
      //   { date: '2019/06/19', hoursSlept: 4.1 },
      //   { date: '2019/06/20', hoursSlept: 9.6 },
      //   { date: '2019/06/21', hoursSlept: 5.1 },
      //   { date: '2019/06/22', hoursSlept: 8.1 },
      //   { date: '2019/06/23', hoursSlept: 8.9 }
      // ]
      
      expect(sleep.findWeeklyHoursSlept()).to.equal()
    });

    it.skip('should find weekly sleep quality', () => {
      expect(sleep.findWeeklySleepQuality()).to.equal()
    });

    it('should find all users average sleep quality', () => {
      expect(sleep.findAvgSleepQualityForAllUsers()).to.equal(2.8)
    });
})