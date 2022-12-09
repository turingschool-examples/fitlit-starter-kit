import Sleep from '../src/Sleep'
import sleepData from '../src/data/Sleep-data'
import { expect } from 'chai';

describe('Sleep', () => {
    let sleep

    beforeEach(function () {
        sleep = new Sleep(sleepData[0])
    })

    it('should be a function', () => {
        expect(Sleep).to.be.a('function');
    })

    it('should be an instance of Sleep', () => {
        expect(sleep).to.be.an.instanceOf(Sleep)
    })

    it('should hold the date', () => {
        expect(sleep.date).to.equal('2019/06/15')
    })

    it('should hold the hours slept', () => {
        expect(sleep.hoursSlept).to.equal(6.1)
    })

    it('should hold the sleepQuality', () => {
        expect(sleep.sleepQuality).to.equal(2.2)
    })

    it('should hold the users ID', () => {
        expect(sleep.userID).to.equal(1)
    })

})