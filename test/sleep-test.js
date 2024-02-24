import { expect } from 'chai';
import { 
    generateRandomUser, 
    getUserSleepData,
    getAverageSleepHours,
    getAverageSleepQuality,
    getMostRecentSleepHours,
    getMostRecentSleepQuality,
    getWeeklySleepHours,
    getWeeklySleepQuality

} from '../src/functions';
import account from '../src/data/users-test-data'
import sleep from '../src/data/sleep-test-data'

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

describe('getWeeklySleepHours()', () => {

    it('correctly extracts weekly sleep hours for a user', function() {
        const selectedWeek = [
          [
            {"userID": 9, "date": "2023/03/24", "hoursSlept": 4.8, "sleepQuality": 2.5},
            {"userID": 9, "date": "2023/03/25", "hoursSlept": 9.2, "sleepQuality": 4.8},
            {"userID": 9, "date": "2023/03/26", "hoursSlept": 6.2, "sleepQuality": 2.5},
            {"userID": 9, "date": "2023/03/27", "hoursSlept": 6.8, "sleepQuality": 2.8},
            {"userID": 9, "date": "2023/03/28", "hoursSlept": 7.5, "sleepQuality": 2.3},
            {"userID": 9, "date": "2023/03/29", "hoursSlept": 7.2, "sleepQuality": 3.2},
            {"userID": 9, "date": "2023/03/30", "hoursSlept": 7.8, "sleepQuality": 3.8}
          ]
        ];
        const expectedHours = [4.8, 9.2, 6.2, 6.8, 7.5, 7.2, 7.8];
        const result = getWeeklySleepHours(selectedWeek);
        expect(result).to.deep.equal(expectedHours);
      });

    it('returns an empty array if selectedWeek data is empty', function() {
        const selectedWeek = [[]];
        const result = getWeeklySleepHours(selectedWeek);
        expect(result).to.be.an('array').that.is.empty;
      });

    it('handles incorrect data structure gracefully', function() {
    const incorrectData = {}; 
    expect(() => getWeeklySleepHours(incorrectData)).to.throw();
    });

});

describe('getWeeklySleepQuality()', () => {

    it('correctly extracts weekly sleep quality scores for a user', function() {
      const selectedWeek = [
        [
          {"userID": 9, "date": "2023/03/24", "hoursSlept": 4.8, "sleepQuality": 2.5},
          {"userID": 9, "date": "2023/03/25", "hoursSlept": 9.2, "sleepQuality": 4.8},
          {"userID": 9, "date": "2023/03/26", "hoursSlept": 6.2, "sleepQuality": 2.5},
          {"userID": 9, "date": "2023/03/27", "hoursSlept": 6.8, "sleepQuality": 2.8},
          {"userID": 9, "date": "2023/03/28", "hoursSlept": 7.5, "sleepQuality": 2.3},
          {"userID": 9, "date": "2023/03/29", "hoursSlept": 7.2, "sleepQuality": 3.2},
          {"userID": 9, "date": "2023/03/30", "hoursSlept": 7.8, "sleepQuality": 3.8}
        ]
      ];
      const expectedQualityScores = [2.5, 4.8, 2.5, 2.8, 2.3, 3.2, 3.8];
      const result = getWeeklySleepQuality(selectedWeek);
      expect(result).to.deep.equal(expectedQualityScores);
    });
  
    it('returns an empty array if selectedWeek data is empty', function() {
      const selectedWeek = [[]];
      const result = getWeeklySleepQuality(selectedWeek);
      expect(result).to.be.an('array').that.is.empty;
    });

    it('handles incorrect data structure gracefully', function() {
        const incorrectData = {}; 
        expect(() => getWeeklySleepHours(incorrectData)).to.throw();
        });
  
  });