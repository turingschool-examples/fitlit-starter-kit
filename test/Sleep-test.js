import { expect } from 'chai';
import { sampleSleep } from '../src/sample-data';
import Sleep from '../src/Sleep'

describe('Sleep', () => {

    let sleep1;
    let sleep2;
    let sleep3;
    let sleep4;
    let sleep5;
    let sleep6;
    let sleep7;
    let sleep8;
    let sleep9;
    let sleepArray

    beforeEach(() => {
        sleep1 = new Sleep({
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 7,
            sleepQuality: 4.7
        });
        sleep2 = new Sleep({
            userID: 1,
            date: "2019/06/15",
            hoursSlept: 6.1,
            sleepQuality: 2.2
        });
        sleep3 = new Sleep({
            userID: 1,
            date: "2019/06/16",
            hoursSlept: 4.1,
            sleepQuality: 3.8
        });
        sleep4 = new Sleep({
            userID: 1,
            date: "2019/06/17",
            hoursSlept: 8,
            sleepQuality: 2.6
        });
        sleep5 = new Sleep({
            userID: 1,
            date: "2019/06/18",
            hoursSlept: 10.4,
            sleepQuality: 3.1
        });
        sleep6 = new Sleep({
            userID: 1,
            date: "2019/06/19",
            hoursSlept: 10.7,
            sleepQuality: 1.2
        });
        sleep7 = new Sleep({
            userID: 1,
            date: "2019/06/20",
            hoursSlept: 9.3,
            sleepQuality: 1.2
        });
        sleep8 = new Sleep({
            userID: 1,
            date: "2019/06/21",
            hoursSlept: 7.8,
            sleepQuality: 4.2
        });
        sleep9 = new Sleep({
            userID: 1,
            date: "2019/06/22",
            hoursSlept: 7,
            sleepQuality: 3
        });
        sleepArray = [sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9]
    })

    it('should be an instance of Hydration', () => {
        expect(sleep1).to.be.an.instanceOf(Sleep);
        expect(sleep2).to.be.an.instanceOf(Sleep);
    })

    it('Should return a user by ID', () => {
        expect(sleep1.getSleepByID(sleepArray, 2
        )).to.deep.equal([{
            userID: 2,
            date: "2019/06/15",
            hoursSlept: 7,
            sleepQuality: 4.7
        }])
    })

    it('Should return an error if no data available', () => {
        expect(sleep1.getSleepByID(sleepArray, 55)).to.equal("Invalid user ID. Please verify user ID and try again.")
    })

    it('Should return a user\'s total average hours slept', () => {
        expect(sleep1.getTotalUserAverageHoursSleep(sleepArray, 1)).to.equal(8);
        expect(sleep2.getTotalUserAverageHoursSleep(sleepArray, 2)).to.equal(7);
    });

    it('Should return the total number of hours a user slept on a specific date', () => {
        expect(sleep1.userHoursSleptOnDate(sleepArray, 2, '2019/06/15')).to.equal(7);
    });

    it('should return most recent hours of sleep', () => {
        expect(sleep1.mostRecentSleep(sleepArray, 2).hoursSlept).to.equal(7);
    })

    it('Should return a user\'s hours slept for a week', () => {
        expect(sleep1.userHoursSleptForWeek(sleepArray, 1)).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8])
    });

    it('Should return a user\'s total quality sleep', () => {
        expect(sleep1.getTotalUserQualitySleep(sleepArray, 1)).to.equal(3);
        expect(sleep2.getTotalUserQualitySleep(sleepArray, 2)).to.equal(5);
    });

    it('Should return the total quality of a user\'s sleep on a specific date', () => {
        expect(sleep1.userQualityOnDate(sleepArray, 2, '2019/06/15')).to.equal(4.7);
    });

    it('Should return a user\'s quality of sleep for a week', () => {
        expect(sleep1.userQualityForWeek(sleepArray, 1)).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2])
    });
})