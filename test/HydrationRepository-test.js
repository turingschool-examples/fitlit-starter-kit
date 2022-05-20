import { expect } from 'chai';
import userData from '../src/data/users.js';
import User from '../src/User.js';
import HydrationRepository from '../src/HydrationRepository';
import hydrationData from '../src/data/hydration'

describe('HydrationRepository', () => {
    let hydrationRepository;

    beforeEach( () => {
        hydrationRepository = new HydrationRepository(hydrationData);
    })

    it('should be a function', () => {
        expect(HydrationRepository).to.be.a('function');
    })

    it('should be a new instance of HydrationRepository', () => {
        expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
    })

    it('should take in a users id', () => {
        expect()
    })

})








// For a user (identified by their userID - this is the same for all methods requiring a specific user’s data), the average fluid ounces consumed per day for all time


// For a user, how many fluid ounces they consumed for a specific day (identified by a date)


// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day