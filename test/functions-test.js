import { expect } from 'chai';
import { generateRandomUser } from '../src/functions';

describe('scripts', () => {
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
    
    it('should test for one person', function () {
        let person = generateRandomUser(people)
        expect(person).to.be.an('object');
    });
   
    it('should be an object', function () {
        let person = generateRandomUser(people)
        expect(person).to.be.an('object');
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
