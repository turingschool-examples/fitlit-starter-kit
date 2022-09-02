import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import { sleepData } from '../src/data/sleepData';


describe('Sleep', () => {
    let userSleepData, sleepData, userOneSleep, userOne;


    beforeEach(() => {
     sleepData = [
       {
           userID: 1,
           date: "2019/06/16",
           hoursSlept: 4.1,
           sleepQuality: 3.8
       },
       {
           userID: 2,
           date: "2019/06/16",
           hoursSlept: 7.5,
           sleepQuality: 3.8
       },

       {
           userID: 3,
           date: "2019/06/16",
           hoursSlept: 10.7,
           sleepQuality: 3.4
       },
       {
           userID: 1,
           date: "2019/06/17",
           hoursSlept: 8,
           sleepQuality: 2.6
       },
       {
           userID: 2,
           date: "2019/06/17",
           hoursSlept: 5.7,
           sleepQuality: 3
       },
       {
           userID: 3,
           date: "2019/06/17",
           hoursSlept: 5.3,
           sleepQuality: 4.9
       },
       {
           userID: 1,
           date: "2019/06/19",
           hoursSlept: 10.7,
           sleepQuality: 1.2
       },

       {
           userID: 2,
           date: "2019/06/19",
           hoursSlept: 9.6,
           sleepQuality: 2.5
       },

       {
           userID: 3,
           date: "2019/06/19",
           hoursSlept: 7.2,
           sleepQuality: 3.4
       },
     ];
     userOneSleep = [
       {
           userID: 1,
           date: "2019/06/16",
           hoursSlept: 4.1,
           sleepQuality: 3.8
       },
       {
           userID: 1,
           date: "2019/06/17",
           hoursSlept: 8,
           sleepQuality: 2.6
       },
       {
           userID: 1,
           date: "2019/06/19",
           hoursSlept: 10.7,
           sleepQuality: 1.2
       },
       {
           userID: 1,
           date: "2019/06/21",
           hoursSlept: 6.7,
           sleepQuality: 2.5
       },
       {
           userID: 1,
           date: "2019/06/23",
           hoursSlept: 5.8,
           sleepQuality: 3
       },
       {
           userID: 1,
           date: "2019/06/24",
           hoursSlept: 6.9,
           sleepQuality: 1.8
       },
       {
           userID: 1,
           date: "2019/06/25",
           hoursSlept: 3.4,
           sleepQuality: 2.3
       },
       {
           userID: 1,
           date: "2019/06/26",
           hoursSlept: 7,
           sleepQuality: 1.6
       },
       {
           userID: 1,
           date: "2019/06/27",
           hoursSlept: 6.4,
           sleepQuality: 1.9
       }
     ]
     userSleepData = new Sleep(sleepData);
     userOne = new Sleep(userOneSleep);
    })



    it('should be a function',  () => {
        expect(Sleep).to.be.a('function')
    });

    it('should instantiate Sleep',() => {
        expect(userSleepData).to.be.an.instanceOf(Sleep);
    })

    it('should be able to identify a user by their ID', () => {
        expect(userOne.findUserDataID(1)).to.deep.equal(userOneSleep);
    })

    it('should return the average number of hours slept per day ', () => {
        expect(userSleepData.getAvgHrsSleptPerDay(1)).to.equal('7.6');
    })

    it('should return the average sleep quality per day over all time', () => {
        expect(userOne.getAvgSleepQuality(1)).to.equal('2.3');
    })

    it('should return how many hours they slept for a specific day', () => {
        expect(userOne.getSleepHrsByDay(1)).to.equal(6.4);

    })

    it('should return their sleep quality for a specific day', () => {
        expect(userOne.getSleepQualPerDay(1)).to.equal(1.9);
    })

    it('should return how many hours slept each day over the course of a given week', () => {
        expect(userOne.getSleepHoursPerWeek(1, "2019/06/27")).to.equal(6.6);
    })

    it('should return the average sleep quality over the course of a given week', () => {
        expect(userOne.getSleepQualPerWeek(1, "2019/06/27")).to.equal('2.0');
    })

    it.only('should return the average sleep quality for all users', () => {
        expect(userSleepData.getAvgSleepQual()).to.deep.equal('3.2');
    })

});
