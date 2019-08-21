const chai = require('chai');
const expect = chai.expect

const Sleep = require('../src/sleep');
const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../data/fakeSleep');
let user1;
let hoursSlept;
let sleepQuality;
describe('Sleep', () => {
    beforeEach(() => {
        sleepRepository = new SleepRepository(fakeSleep)
        let userSleepInfo = sleepRepository.getUserInfo(1)
        user1 = [{
                userID: 1,
                date: '2019/06/15',
                hoursSlept: 6.1,
                sleepQuality: 2.2
            },
            {
                userID: 1,
                date: '2019/06/16',
                hoursSlept: 4.1,
                sleepQuality: 3.8
            },
            {
                userID: 1,
                date: '2019/06/17',
                hoursSlept: 8,
                sleepQuality: 2.6
            },
            {
                userID: 1,
                date: '2019/06/18',
                hoursSlept: 10.4,
                sleepQuality: 3.1
            },
            {
                userID: 1,
                date: '2019/06/19',
                hoursSlept: 10.7,
                sleepQuality: 1.2
            },
            {
                userID: 1,
                date: '2019/06/20',
                hoursSlept: 9.3,
                sleepQuality: 1.2
            },
            {
                userID: 1,
                date: '2019/06/21',
                hoursSlept: 7.8,
                sleepQuality: 4.2
            }
        ]
        sleep = new Sleep(userSleepInfo);
        hoursSlept = sleep.hoursSlept
        sleepQuality = sleep.sleepQuality
    });

    it('should have a users sleep information', () => {
        expect(sleep.userSleepInfo).to.eql(user1)
    });

    it('should get a users average hours of sleep', () => {
        expect(sleep.getAverageSleepInformation('hoursSlept')).to.equal(8.06)
    });

    it('should get a users average quality of sleep', () => {
        expect(sleep.getAverageSleepInformation('sleepQuality')).to.equal(2.61)
    });

    it('should get the hours slept given a specific date', () => {
        expect(sleep.getSleepDataByDate('2019/06/20', 'hoursSlept')).to.equal(9.3)
    });

    it('should get the sleep quality given a specific date', () => {
        expect(sleep.getSleepDataByDate('2019/06/20', 'sleepQuality')).to.equal(1.2)
    });
});