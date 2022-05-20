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
        expect(sleep.displayAvgSleepQualityAllTime(1)).to.deep.equal(3.4);
    });
    it('should display hours of sleep per day', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayDailySleepHours(1, "2019/06/15")).to.equal(6.1);
    });
    it('should display sleep quality for a specific day', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displaySleepQualityByDate(1, "2019/06/15")).to.equal(2.2);
    });
    it('should display sleep weekly sleep hours', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayWeekSleepHours(1, "2019/06/21")).to.deep.equal([6.1, 7, 10.8, 5.4, 4.1,  9.6, 5.1]);
    });
    it('should display weekly sleep quality hours', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayWeekSleepQualityHours(1, "2019/06/21")).to.deep.equal([ 2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6 ]);
    });
    it('should display sleep quality average for all users', function () {
        const sleep = new SleepRepository(sleepData)
        expect(sleep.displayAverageSleepQualityAllUser()).to.equal(3.1);
    });
})

