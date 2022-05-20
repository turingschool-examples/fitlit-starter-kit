import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import  hydrationData  from '../src/data/sampleData-hydration';
import Hydration from '../src/Hydration';

describe('Hydration Repository', () => {
    it('should be a function', function () {
      expect(HydrationRepository).to.be.a('function');
    });
    it('should have users', function () {
        const h2oRepository = new HydrationRepository(hydrationData)
        expect(h2oRepository.users[0]).is.instanceOf(Hydration);
    });
    it('should display average water intake of all time', function () {
        const h2oRepository = new HydrationRepository(hydrationData)
        expect(h2oRepository.displayAllTimeAvgOunces(1)).to.equal(62);
    });
    it('should display daily water intake', function () {
        const h2oRepository = new HydrationRepository(hydrationData)
        expect(h2oRepository.displayDailyAvgOunces(1, "2019/06/15")).to.equal(37);
    });
    it('should display weekly water intake', function () {
        const h2oRepository = new HydrationRepository(hydrationData)
        expect(h2oRepository.displayDailyAvgOunces(1, "2019/06/15")).to.equal(37);
    });
})
