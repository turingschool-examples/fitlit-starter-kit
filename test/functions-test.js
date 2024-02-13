import { expect } from 'chai';
import { 
    generateRandomUser, 
    getAccountFriends,
    getAverageStepGoal,
    getAverageDailyFluidOunces,
    getSpecificDay,
    getWeeklyFluidOunces,
    getUserSleepData,
    getAverageSleepHours,
    getAverageSleepQuality,
    getMostRecentSleepHours,
    getMostRecentSleepQuality,
    getWeeklySleep
} from '../src/functions';
import sleep from '../src/data/sleep-test-data'
import account from '../src/data/users-test-data'


// ----- * Users * ----- //

describe('generateRandomUser()', () => {
    var people = 
    { users: [
        {
        "id": 14,
        "name": "Elmira Walsh",
        "address": "575 Robel Flats, Hagenesborough NE 51196-7863",
        },
        {
        "id": 2,
        "name": "Tyreek VonRueden",
        "address": "623 Koelpin Skyway, Lake Luigichester MN 77576-1678",
        },
        {
        "id": 3,
        "name": "Colt Rohan",
        "address": "48010 Balistreri Harbor, Cleobury IN 43317",
        }
    ]}
   
    it('should be an object', function () {
        let person = generateRandomUser(account)
        expect(person).to.be.an('object');
    });

    it('should return a user within the users array', () => {
        const usersSet = new Set(account.users);
        const user = generateRandomUser(people);
        expect(usersSet.has(user)).to.be.true;
      });
    

    it('should probabilistically return different users over multiple invocations', () => {
        const sampleSize = 3;
        const results = new Set();
    
        for (let i = 0; i < sampleSize; i++) {
          const user = generateRandomUser(people);
          results.add(user);
        }
    
        expect(results.size).to.be.greaterThan(1);
    });

});

describe('getAccountFriends()', () => {
    
});

// ----- * Steps * ----- //

describe('getAverageStepGoal()', () => {
    
    it('should return the daily step goal for a single user', () => {
        const account = {
        users: [{ dailyStepGoal: 10000 }]
        };
        expect(getAverageStepGoal(account)).to.equal(10000);
    });
    
    it('should calculate the average step goal for multiple users', () => {
        const account = {
          users: [{ dailyStepGoal: 8000 }, { dailyStepGoal: 10000 }]
        };
        expect(getAverageStepGoal(account)).to.equal(9000);
    });

    it('should handle large numbers correctly', () => {
        const account = {
          users: [{ dailyStepGoal: 1000000 }, { dailyStepGoal: 2000000 }]
        };
        expect(getAverageStepGoal(account)).to.equal(1500000);
      });

});

// ----- * Water * ----- //

describe('getAverageDailyFluidOunces()', () => {
    
    const account = [
        { userID: 1, numOunces: 64 },
        { userID: 1, numOunces: 80 },
        { userID: 2, numOunces: 72 }, // Different user
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

});

// ----- * Sleep * ----- //

describe('getUserSleepData()', () => {
    
    let randomUser = generateRandomUser()
    
    it('should return an empty array for a user with no sleep data', function() {
        const nonExistentUser = { id: 999 };
        const result = getUserSleepData(nonExistentUser);
        expect(result).to.be.an('array').that.is.empty;
    });

    it('should return all sleep data entries for a given user', function() {
        const result = getUserSleepData(randomUser);
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf.at.least(10); 
        result.forEach(data => {
            expect(data.userID).to.equal(randomUser.id);
        });
    });

});

describe('getAverageSleepHours()', () => {

    it('should calculate the correct average sleep hours for a given user', function() {
        const user1 = account.users[1]
        const averageSleepHours = getAverageSleepHours(user1);
        expect(averageSleepHours).to.be.a('string');
        const expectedAverage = (7.94).toFixed(2);
        expect(averageSleepHours).to.equal(expectedAverage);
    });
    
    it('should calculate the correct average sleep hours for a different user', function() {
        const user2 = account.users[7]
        const averageSleepHours = getAverageSleepHours(user2);
        const expectedAverage = (8.67).toFixed(2); 
        expect(averageSleepHours).to.equal(expectedAverage);
    });

    it('should handle cases with no sleep data for a given user', function() {
        const randomUser = { id: 999 }; 
        const averageSleepHours = getAverageSleepHours(randomUser);
        expect(averageSleepHours).to.equal('NaN');
        
    });

});

describe('getAverageSleepQuality()', () => {

    it('should calculate the correct average sleep quality for a given user', function() {
        const userP = account.users[1]
        const averageSleepQuality = getAverageSleepQuality(userP);
        expect(averageSleepQuality).to.be.a('string');
        const expectedAverage = (3.61).toFixed(2);
        expect(averageSleepQuality).to.equal(expectedAverage);
    });
    
    it('should calculate the correct average sleep quality for a different user', function() {
        const userY = account.users[5]
        const averageSleepQuality = getAverageSleepQuality(userY);
        expect(averageSleepQuality).to.be.a('string');
        const expectedAverage = (3.29).toFixed(2);
        expect(averageSleepQuality).to.equal(expectedAverage);
    });

    it('should return "NaN" for a user with no sleep data', function() {
        const nonExistentUser = { id: 999 };
        const averageSleepQuality = getAverageSleepQuality(nonExistentUser);
        expect(averageSleepQuality).to.equal('NaN');
    });

});

describe('getMostRecentSleepHours()', () => {

    it('should return the most recent sleep data entry for a user', function() {
        const user444 = account.users[5];
        const mostRecentSleepHours = getMostRecentSleepHours(user444);
        expect(mostRecentSleepHours).to.be.a('number');
        const expectedAverage = (7.3)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });
    
    it('should return the most recent sleep data entry for a different user', function() {
        const user000 = account.users[9];
        const mostRecentSleepHours = getMostRecentSleepHours(user000);
        const expectedAverage = (9.7)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });


    it('should return "NaN" for a user with no sleep data', function() {
        const nonExistentUser = { id: 999 };
        const averageSleepQuality = getAverageSleepQuality(nonExistentUser);
        expect(averageSleepQuality).to.equal('NaN');
    });
    

});

describe('getMostRecentSleepQuality()', () => {

    it('should return the most recent sleep data entry for a user', function() {
        const userAFK = account.users[2];
        const mostRecentSleepHours = getMostRecentSleepQuality(userAFK);
        expect(mostRecentSleepHours).to.be.a('number');
        const expectedAverage = (4.2)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });
    
    it('should return the most recent sleep data entry for a different user', function() {
        const user000 = account.users[6];
        const mostRecentSleepHours = getMostRecentSleepQuality(user000);
        const expectedAverage = (3.4)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });


    it('should return "NaN" for a user with no sleep data', function() {
        const nonExistentUser = { id: 999 };
        const averageSleepQuality = getAverageSleepQuality(nonExistentUser);
        expect(averageSleepQuality).to.equal('NaN');
    });
    

});

describe('getWeeklySleep()', () => {

    it('should return the most recent sleep data entry for a user', function() {
        const userAFK = account.users[2];
        const mostRecentSleepHours = getMostRecentSleepQuality(userAFK);
        expect(mostRecentSleepHours).to.be.a('number');
        const expectedAverage = (4.2)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });
    
    it('should return the most recent sleep data entry for a different user', function() {
        const user000 = account.users[6];
        const mostRecentSleepHours = getMostRecentSleepQuality(user000);
        const expectedAverage = (3.4)
        expect(mostRecentSleepHours).to.equal(expectedAverage);
    });


    it('should return "NaN" for a user with no sleep data', function() {
        const nonExistentUser = { id: 999 };
        const averageSleepQuality = getAverageSleepQuality(nonExistentUser);
        expect(averageSleepQuality).to.equal('NaN');
    });
    

});

