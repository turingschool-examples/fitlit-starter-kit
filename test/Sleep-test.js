import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
    let testUser;
    let sleepList;
    beforeEach('data creation', () => {
        sleepList = {
            sleepData: [
                { "userID": 1, "date": "2023/03/19", "hoursSlept": 4.2, "sleepQuality": 1.2 },
                { "userID": 1, "date": "2023/03/24", "hoursSlept": 9.6, "sleepQuality": 4.3 },
                { "userID": 1, "date": "2023/03/18", "hoursSlept": 4.1, "sleepQuality": 3.9 },
                { "userID": 1, "date": "2023/03/17", "hoursSlept": 9.2, "sleepQuality": 1.6 },
                { "userID": 1, "date": "2023/03/23", "hoursSlept": 8.4, "sleepQuality": 3.5 },
                { "userID": 1, "date": "2023/03/22", "hoursSlept": 9.7, "sleepQuality": 4.7 },
                { "userID": 1, "date": "2023/03/21", "hoursSlept": 4.7, "sleepQuality": 3 },
                { "userID": 10, "date": "2023/03/23", "hoursSlept": 7.2, "sleepQuality": 2.2 },
                { "userID": 12, "date": "2023/03/26", "hoursSlept": 7.2, "sleepQuality": 2.2 },
                { "userID": 1, "date": "2023/03/20", "hoursSlept": 8, "sleepQuality": 3.1 },
                { "userID": 24, "date": "2023/03/24", "hoursSlept": 7.2, "sleepQuality": 2.2 },
                { "userID": 1, "date": "2023/03/16", "hoursSlept": 4.8, "sleepQuality": 2.5 },
                { "userID": 14, "date": "2023/02/24", "hoursSlept": 7.2, "sleepQuality": 2.2 }]
        };

        testUser = new Sleep(1, sleepList)
    });

    it('should be a function', function () {
        expect(Sleep).to.be.a('function');
    });

    it('should be an instance of sleep', function () {
        expect(testUser).to.be.an.instanceof(Sleep);
    });

    it('should store a users id', function () {
        expect(testUser.userId).to.equal(1);
    });

    it('should store a users sleep logs', function () {
        expect(testUser.userSleepLogs).to.deep.equal([
            { "userID": 1, "date": "2023/03/24", "hoursSlept": 9.6, "sleepQuality": 4.3 },
            { "userID": 1, "date": "2023/03/19", "hoursSlept": 4.2, "sleepQuality": 1.2 },
            { "userID": 1, "date": "2023/03/18", "hoursSlept": 4.1, "sleepQuality": 3.9 },
            { "userID": 1, "date": "2023/03/17", "hoursSlept": 9.2, "sleepQuality": 1.6 },
            { "userID": 1, "date": "2023/03/23", "hoursSlept": 8.4, "sleepQuality": 3.5 },
            { "userID": 1, "date": "2023/03/22", "hoursSlept": 9.7, "sleepQuality": 4.7 },
            { "userID": 1, "date": "2023/03/21", "hoursSlept": 4.7, "sleepQuality": 3 },
            { "userID": 1, "date": "2023/03/20", "hoursSlept": 8, "sleepQuality": 3.1 },
            { "userID": 1, "date": "2023/03/16", "hoursSlept": 4.8, "sleepQuality": 2.5 }]
        );
        });

        it('should find the most recent days data', function () {
            expect(testUser.findMostRecentDay()).to.be.equal("2023/03/24");
        })

        it('should find the overall average of hours slept', function () {
            expect(testUser.findAllTimeAvgOfDetail("hoursSlept")).to.be.equal(7);
        });

        it('should find the overall average of sleep quality', function () {
            expect(testUser.findAllTimeAvgOfDetail("sleepQuality")).to.be.equal(3.1);
        });

        it('should find the number of sleep hours by date', function () {

            expect(testUser.findDetailByDay('2023/03/23', "hoursSlept")).to.be.equal(8.4);
        });

        it('should find the number of sleep quality by date', function () {
            expect(testUser.findDetailByDay('2023/03/16', "sleepQuality")).to.be.equal(2.5);
        });

        it('should be able to tell if a date is valid', function () {
            expect(testUser.findDetailByDay('2023/02/16', "sleepQuality")).to.be.equal('no such date');

            expect(testUser.findDetailByDay('2022/05/16', "hoursSlept")).to.be.equal('no such date');
        });

        it('should be able to find the previous 7 days sleep quality given an end date', function () {
            expect(testUser.findDetailByWeek('2023/03/16', "sleepQuality")).to.deep.equal([ 2.5, 1.6, 3.9, 1.2, 3.1, 3, 4.7 ] );

            expect(testUser.findDetailByWeek('2023/03/24', "sleepQuality")).to.deep.equal([ 4.3, 0, 0, 0, 0, 0, 0 ]);
        });

        it('should be able to find the previous 7 days hours slept given an end date', function () {
            expect(testUser.findDetailByWeek('2023/03/16', "hoursSlept")).to.deep.equal([4.8, 9.2, 4.1, 4.2, 8, 4.7, 9.7] );
            
            expect(testUser.findDetailByWeek('2023/03/24', "hoursSlept")).to.deep.equal([9.6, 0, 0, 0, 0, 0, 0]);
        });

        it('should be able to find if a given take is not valid when finding the previous 7 days detail', function () {
            expect(testUser.findDetailByWeek('2023/03/14', "hoursSlept")).to.deep.equal('no such date');
            
            expect(testUser.findDetailByWeek('2022/03/19', "sleepQuality")).to.deep.equal('no such date');

        });


});