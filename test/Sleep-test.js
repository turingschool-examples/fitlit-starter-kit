import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
    let sleep1Data;
    let sleep2Data;

    beforeEach(() => {

        sleep1Data = new Sleep(
            {
            userID: 1,
            date: "2019/06/15",
            hoursSlept: 6.1,
            sleepQuality: 2.2
            });

        sleep2Data = new Sleep(
            {
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 7,
            sleepQuality: 4.7
            });
    });

    it('should be a function', () => {
        expect(Sleep).to.be.a('function')
    });

    it('should be an instance of Sleep', () => {
        expect(sleep1Data).to.be.an.instanceof(Sleep)
        expect(sleep2Data).to.be.an.instanceof(Sleep)
    });

    it('should have an ID', () => {
        expect(sleep1Data.userID).to.equal(1)
        expect(sleep2Data.userID).to.equal(2)
    });

    it('should have a date', () => {
        expect(sleep1Data.date).to.equal("2019/06/15")
        expect(sleep2Data.date).to.equal("2019/06/15")
    });

    it('should have hours slept', () => {
        expect(sleep1Data.hoursSlept).to.equal(6.1)
        expect(sleep2Data.hoursSlept).to.equal(7)
    })

    it('should have sleep quality', () => {
        expect(sleep1Data.sleepQuality).to.equal(2.2)
        expect(sleep2Data.sleepQuality).to.equal(4.7)
    })

    it('should find user average number of hours slept per day', () => {
        expect(sleep1Data.findAverageSleepHoursPerDay()).to.equal(10)
        expect(sleep2Data.findAverageSleepHoursPerDay()).to.equal(10)
    })

    it.skip('should find user average sleep quality per day', () => {
        expect(sleep1Data.findAverageSleepQuality()).to.equal()
        expect(sleep2Data.findAverageSleepQuality()).to.equal()
    })

    it.skip('should find user hours slept for specific day', () => {
        expect(sleep1Data.findHoursSleptForDay()).to.equal()
        expect(sleep2Data.findHoursSleptForDay()).to.equal()
    })
})