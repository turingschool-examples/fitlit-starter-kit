import { expect } from 'chai';
import { 
    generateRandomUser, 
    getAccountFriends,
    getAverageStepGoal,
} from '../src/users';
import account from '../src/data/users-test-data'

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

    it('returns the names of friends for a given user, separated by " - "', function() {
      const user = account.users.find(u => u.id === 1);
      const result = getAccountFriends(user);

      expect(result).to.equal('Adelaide Smith - Olivia Garcia');
    });
  
    it('returns an empty string for a user with no matching friends in the list', function() {
      const userWithNoFriends = {
        "id": 999,
        "name": "John Doe",
        "friends": [9999] 
      };
      const result = getAccountFriends(userWithNoFriends);
      expect(result).to.equal('');
    });
  
  });

// ----- * Steps * ----- ////

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