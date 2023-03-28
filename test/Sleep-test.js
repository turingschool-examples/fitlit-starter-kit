import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {
    let testUser;
    let sleepList;
    beforeEach('data creation', function () {
        sleepList = {sleep:[            
                { "userID": 1, "date": "2023/03/24", "hoursSlept": 9.6, "sleepQuality": 4.3 },
                { "userID": 1, "date": "2023/03/19", "hoursSlept": 4.2, "sleepQuality": 1.2 },
                { "userID": 1, "date": "2023/03/18", "hoursSlept": 4.1, "sleepQuality": 3.9 },
                { "userID": 1, "date": "2023/03/17", "hoursSlept": 9.2, "sleepQuality": 1.6 },
                { "userID": 1, "date": "2023/03/16", "hoursSlept": 4.8, "sleepQuality": 2.5 },
                { "userID": 1, "date": "2023/03/23", "hoursSlept": 8.4, "sleepQuality": 3.5 },
                { "userID": 1, "date": "2023/03/22", "hoursSlept": 9.7, "sleepQuality": 4.7 },
                { "userID": 1, "date": "2023/03/21", "hoursSlept": 4.7, "sleepQuality": 3 },
                { "userID": 10, "date": "2023/03/23", "hoursSlept": 7.2, "sleepQuality": 2.2 },
                { "userID": 12, "date": "2023/03/26", "hoursSlept": 7.2, "sleepQuality": 2.2 },                
                { "userID": 1, "date": "2023/03/20", "hoursSlept": 8, "sleepQuality": 3.1 },           
                { "userID": 24, "date": "2023/03/24", "hoursSlept": 7.2, "sleepQuality": 2.2 },
                { "userID": 14, "date": "2023/02/24", "hoursSlept": 7.2, "sleepQuality": 2.2 }]
        };
    });
    it('should be a function', function () {
        expect(Sleep).to.be.a('function');
    });

    it('should be an instance of sleep', function () {
        expect(testUser).to.be.an.instanceof(Sleep);
    });
});