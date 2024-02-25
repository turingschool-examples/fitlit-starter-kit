import { expect } from 'chai';
import { 
    getAverageDailyFluidOunces,
    getSpecificDay,
    getWeeklyFluidOunces,
} from '../src/hydration';
import { generateRandomUser,} from '../src/users';
import account from '../src/data/users-test-data'
import hydration from '../src/data/hydration-test-data'

describe('getAverageDailyFluidOunces()', () => {
    
    const account = [
        { userID: 1, numOunces: 64 },
        { userID: 1, numOunces: 80 },
        { userID: 2, numOunces: 72 }, 
        { userID: 1, numOunces: 96 },
      ];
    
    it('calculates the correct average for multiple records', () => {
    expect(getAverageDailyFluidOunces(1, account)).to.equal((64 + 80 + 96) / 3);
    });

    it('returns 0 for a user with no records', () => {
        expect(getAverageDailyFluidOunces(3, account)).to.equal(0);
    });

    it('returns the correct value for a single record', () => {
        const singleRecordAccount = [{ userID: 1, numOunces: 64 }];
        expect(getAverageDailyFluidOunces(1, singleRecordAccount)).to.equal(64);
    });

    it('filters records correctly among multiple users', () => {
        expect(getAverageDailyFluidOunces(2, account)).to.equal(72);
    });

});

describe('getSpecificDay()', () => {
    
    const hydroData = [
        { userID: 1, date: '2022-04-01', numOunces: 64 },
        { userID: 1, date: '2022-04-02', numOunces: 80 },
        { userID: 2, date: '2022-04-01', numOunces: 72 },
        { userID: 1, date: '2022-04-03', numOunces: 96 },
    ];
    
    it('returns the correct numOunces for a user on a specific date', () => {
    const ounces = getSpecificDay(1, '2022-04-02', hydroData);
    expect(ounces).to.equal(80);
    });

    it('returns 0 if no entry is found for the user on the specified date', () => {
        const ounces = getSpecificDay(1, '2022-04-04', hydroData); 
        expect(ounces).to.equal(0);
    });
    
    it('returns 0 if the user ID does not exist in the data', () => {
    const ounces = getSpecificDay(3, '2022-04-01', hydroData); 
    expect(ounces).to.equal(0);
    });

    it('handles searching for a date with multiple users\' data correctly', () => {
    const ounces = getSpecificDay(2, '2022-04-01', hydroData);
    expect(ounces).to.equal(72);
    });

    it('returns 0 for invalid userId types', () => {
    const ounces = getSpecificDay(null, '2022-04-02', hydroData);
    expect(ounces).to.equal(0);
    });

    it('returns 0 for invalid date formats', () => {
    const ounces = getSpecificDay(1, 'not-a-date', hydroData);
    expect(ounces).to.equal(0);
    });

    it('returns 0 when hydroData is empty', () => {
    const ounces = getSpecificDay(1, '2022-04-02', []);
    expect(ounces).to.equal(0);
    });

});

describe('getWeeklyFluidOunces()', () => {

    let randomUser = generateRandomUser()

    it('returns the last week data for a user', function() {
        const result = getWeeklyFluidOunces(2);
        expect(result.length).to.equal(7); 
        expect(result[0].numOunces).to.equal(78); 
        expect(result[4].numOunces).to.equal(70);
      });
    
      it('returns the last week data for a different user', function() {
        const result = getWeeklyFluidOunces(9);
        expect(result.length).to.equal(7); 
        expect(result[0].numOunces).to.equal(86); 
        expect(result[6].numOunces).to.equal(74);
      });

      it('returns an empty array for users with no data', function() {
        const result = getWeeklyFluidOunces(999); 
        expect(result).to.be.an('array').that.is.empty;
      });

});

//

