import Sleep from '../src/Sleep'
import sleepData from '../src/data/Sleep-data'
import { expect } from 'chai';

describe('Sleep', () => {
    let sleep

    beforeEach(function () {
        sleep = new Sleep(sleepData)
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    });

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceOf(Sleep)
    });

    it('should store the sleep data', () => {
        expect(sleep.sleepData).to.deep.equal(sleepData)
    });
    
    it('should have a method that returns the sleep data for 1 user', () => {

        let sleepUser1 = sleep.avgHoursSleptPerDay(1);

        expect(sleepUser1).to.equal(6)
    });

    it('should have a method that returns the average sleep quality for 1 user', () => {
        let userSleepQual = sleep.avgSleepQuality(1);

        expect(userSleepQual).to.equal(5)
    });

    it('should have a method that returns the hours slept for 1 user on a given date', () => {

        let user1 = sleep.getHoursSleptOnDay(1, '2019/06/15')

        expect(user1).to.equal(6.1)
    });

    it('should have a method that returns the sleep quality for 1 user on a given date', () => {

        let user1 = sleep.getSleepQualityOnDay(1, '2019/06/15')

        expect(user1).to.equal(2.2)
    });

    it('should have a method that return the hours slept over 7 days', () => {
        let user1 = sleep.getHoursSleptOverWeek(1, '2019/06/15')
        console.log(user1)
        expect(user1).to.deep.equal([6.1, 5.1, 6.1, 10.1, 8.1, 4.5, 4.5])
    });

    it('should have a method that return the sleep quality over 7 days', () => {
        let user1 = sleep.getSleepQualityOverWeek(1, '2019/06/15')

        expect(user1).to.deep.equal([ 2.2, 1.2, 4.2, 7.2, 8.5, 6.5,6.5])
    });

    it('should average sleep quality between all users', () => {

        let usersSleepQualityAvg = sleep.getSleepQualityAllUsers()

        expect(usersSleepQualityAvg).to.equal(5.3);
    })

})