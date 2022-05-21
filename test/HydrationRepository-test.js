import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import hydrationData from '../src/data/hydration'

describe('HydrationRepository', () => {
    let hydrationRepository;

    beforeEach( () => {
        hydrationRepository = new HydrationRepository(hydrationData);
    })

    it('Should be a function', () => {
        expect(HydrationRepository).to.be.a('function');
    })

    it('Should be a new instance of HydrationRepository', () => {
        expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
    })

    it('Should hold the users hydration data', () => {
        expect(hydrationRepository.hydrationData).to.equal(hydrationData);
    })

    it('Should return all of users hydration data given its id number', () => {
        expect(hydrationRepository.getHydrationDataForUser(1)).to.deep.equal([
            { userID: 1, date: '2019/06/15', numOunces: 37 },
            { userID: 1, date: '2019/06/16', numOunces: 69 },
            { userID: 1, date: '2019/06/17', numOunces: 96 },
            { userID: 1, date: '2019/06/18', numOunces: 61 },
            { userID: 1, date: '2019/06/19', numOunces: 91 },
            { userID: 1, date: '2019/06/20', numOunces: 50 },
            { userID: 1, date: '2019/06/21', numOunces: 50 }
          ]);
    })

    it('Should have a function that returns the average ounces consumed for all time ', () => {
        expect(hydrationRepository.getAllTimeOuncesAverage(1)).to.equal(64.85714285714286);
    })
    
    it('Should have a function that takes in user\'s id and a date and returns the user\'s hydration in ounces for that day', () => {
        expect(hydrationRepository.getUserHydrationForDay(1, '2019/06/15')).to.equal(37);
    })

    it('Should show users hydration data per week', () => {
        expect(hydrationRepository.getUserHydrationPerWeek(2, '2019/06/21')).to.deep.equal([
            {date: '2019/06/15', ounces: 75 },
            {date: '2019/06/16', ounces: 91 },
            {date: '2019/06/17', ounces: 96 },
            {date: '2019/06/18', ounces: 70 },
            {date: '2019/06/19', ounces: 76 },
            {date: '2019/06/20', ounces: 71 },
            {date: '2019/06/21', ounces: 27 }
          ]);
    });
});