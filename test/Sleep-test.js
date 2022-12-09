import Sleep from '../src/Sleep'
import sleepData from '../src/data/Sleep-data'
import { expect } from 'chai';

describe('Sleep', () => {
    let sleep

    beforeEach(function () {
        sleep = new Sleep(sleepData)
    })

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    })

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceOf(Sleep)
    })

    it('should store the sleep data', () => {
        expect(sleep.sleepData).to.deep.equal(sleepData)
    })
    
    it('should have a method that returns the sleep data for 1 user', () => {

        let sleepUser1 = sleep.avgHoursSleptPerDay(1);

        expect(sleepUser1).to.equal(6)
    })

    it('should have a method that returns the average sleep quality for 1 user', () => {
        let userSleepQual = sleep.avgSleepQuality(1);

        expect(userSleepQual).to.equal(3)
    })

    it('should have a method that returns the hours slept for 1 user on a given date', () => {

        let user1 = sleep.getHoursSleptOnDay(1, '2019/06/15')

        expect(user1).to.equal(6.1)
    })

})