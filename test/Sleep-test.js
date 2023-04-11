import { expect } from 'chai';
import Sleep from '../src/Sleep';
import {sleepList} from './Sleep-test-data'

describe('Sleep', () => {
    let testUser;
    beforeEach('data creation', () => {
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

    it('should find the most recent days data', function () {
        expect(testUser.findMostRecentDay()).to.be.equal('2023/03/24');
    });

    it('should find the overall average of hours slept', function () {
        expect(testUser.findAllTimeAvgOfDetail('hoursSlept')).to.be.equal(7);
    });

    it('should find the overall average of sleep quality', function () {
        expect(testUser.findAllTimeAvgOfDetail('sleepQuality')).to.be.equal(3.1);
    });

    it('should find the number of sleep hours by date', function () {
        expect(testUser.findDetailByDay('2023/03/23', 'hoursSlept')).to.be.equal(8.4);
    });

    it('should find the number of sleep quality by date', function () {
        expect(testUser.findDetailByDay('2023/03/16', 'sleepQuality')).to.be.equal(2.5);
    });

    it('should be able to tell if a date is valid', function () {
        expect(testUser.findDetailByDay('2023/02/16', 'sleepQuality')).to.be.equal('no such date');
        expect(testUser.findDetailByDay('2022/05/16', 'hoursSlept')).to.be.equal('no such date');
    });

    it('should be able to find the previous 7 days sleep quality', function () {
        expect(testUser.findDetailLastSevenDays('sleepQuality')).to.deep.equal([3.9, 1.2, 3.1, 3, 4.7, 3.5, 4.3]);
    });

    it('should be able to find the previous 7 days hours slept', function () {
        expect(testUser.findDetailLastSevenDays('hoursSlept')).to.deep.equal([ 4.1, 4.2, 8, 4.7, 9.7, 8.4, 9.6 ]);
    });
});