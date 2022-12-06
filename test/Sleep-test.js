const chai = require("chai");
const expect = chai.expect;
import sleepTestData from './sleep-test-data';
import Sleep from '../src/Sleep';

describe('Sleep', function() {
    it('should be a function', function() {
        expect(Sleep).to.be.a('function');
    });

    it('should create instance out of data from the sleep file', function() {
        const dayOfSleep = new Sleep()

        expect(dayOfSleep).to.be.an.instanceOf(Sleep); 
    });

    it('should have 4 properties: userID, date, hoursSlept, and sleepQuality', function() {
        const dayOfSleep = new Sleep(sleepTestData[0])


        expect(dayOfSleep.userId).to.equal()
        expect(dayOfSleep.date).to.equal()
        expect(dayOfSleep.hoursSlept).to.equal()
        expect(dayOfSleep.sleepQuality).to.equal()
    })
})