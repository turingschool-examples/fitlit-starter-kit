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

    it('should hold the users hydration data', () => {
        expect(hydrationRepository.hydrationData).to.equal(hydrationData);
    })

    it('should return all of users hydration data given its id number', () => {
        expect(hydrationRepository.getHydrationDataForUser(1)).to.deep.equal([
            { userID: 1, date: '2019/06/15', numOunces: 37 },
            { userID: 1, date: '2019/06/16', numOunces: 69 },
            { userID: 1, date: '2019/06/17', numOunces: 96 },
            { userID: 1, date: '2019/06/18', numOunces: 61 },
            { userID: 1, date: '2019/06/19', numOunces: 91 }
          ]);
    })

    it('should have a function that returns the average ounces consumed for all time ', () => {
        expect(hydrationRepository.getAllTimeOuncesAverage(1)).to.equal(70.8);
    })

})







// For a user, how many fluid ounces they consumed for a specific day (identified by a date)


// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day