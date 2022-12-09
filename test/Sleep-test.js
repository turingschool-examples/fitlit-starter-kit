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
        console.log("result: ", sleepUser1)

        expect(sleepUser1).to.equal(6)

    })

})