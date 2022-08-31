import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';
import { singleUserData }  from '../src/data/sleepData';
import { sleepData } from '../src/data/sleepData';


describe('Sleep', () => {
    let userData, userSleepData, sleepData;


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
     userSleepData = new Sleep(sleepData);
    })



    it('should be a function',  () => {
        expect(Sleep).to.be.a('function')
    });

    it('should instantiate Sleep',() => {
        expect(userSleepData).to.be.an.instanceOf(Sleep);
    })

    it.skip('should be able to identify a user by their ID', () => {
      expect(userSleepData.userID).to.equal(1);
    })

    it.skip('should return the average number of hours slept per day ', () => {
        expect(userSleepData.calculateAvgHrsSlept()).to.equal(7.6);
    })

    it('should return the average sleep quality per day over all time ', () => {
        ;
    })

    it('should return  how many hours they slept for a specific day (identified by a date)  ', () => {
        ;
    })

    it('should return  their sleep quality for a specific day (identified by a date)   ', () => {
        ;
    })

    it('should how many hours slept each day over the course of a given week (7 days)  ', () => {
        ;
    })

    it('should sleep quality each day over the course of a given week (7 days)  ', () => {
        ;
    })

    it('should return the average sleep quality ', () => {
        ;
    })





});
