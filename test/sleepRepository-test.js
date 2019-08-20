const chai = require('chai');
const expect = chai.expect

const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../data/fakeSleep');

describe('Sleep Repository', () => {
    beforeEach(() => {
        sleepRepository = new SleepRepository(fakeSleep);
    });

    it('should have access to all sleep data', () => {
        expect(sleepRepository.sleepData).to.eql(fakeSleep)
    });

    it('should get all users average sleep quality', () => {
        expect(sleepRepository.getAllUsersAverageSleepQuality()).to.eql(2.86)
    });

    it('should return all information for a user given their ID', () => {
        expect(sleepRepository.getUserInfo(1)).to.eql([{
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
        ])
    });
});