import { expect } from 'chai';
import SleepRepository from '../src/SleepRepository';
import  sleepData  from '../src/data/sampleData-sleep';
import Sleep from '../src/Sleep';

describe('Sleep Repository', () => {
    it('should be a function', function () {
      expect(SleepRepository).to.be.a('function');
    });
    it('should have users', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.users[0]).is.instanceOf(Sleep);
    });
    it('should display average sleep quality of all time', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.averageSleepQualityPerDay(1)).to.deep.equal(3.4);
    });
    it.skip('should display hours of sleep per day', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayDailyAvgOunces(1, "2019/06/15")).to.equal(37);
    });
    it.skip('should display sleep quality for a specific day', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayDailyAvgOunces(1, "2019/06/15")).to.equal(37);
    });
})

