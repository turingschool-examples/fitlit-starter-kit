const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const Hydration = require('../src/Hydration');
const userData = require('../data-subsets/users-subset')
const hydrationData = require('../data-subsets/hydration-subset');

describe('Hydration', () => {

    it('should be a function', () => {
      expect(Hydration).to.be.a('function');
    });

    it('should be an instance of hydration', () => {
        const hydration = new Hydration(userData);
        expect(hydration).to.be.an.instanceof(Hydration);
    });

    it('should be able to get the average fluid ounces consumed per day for all time', () => {
        const hydration = new Hydration(userData);
        console.log(hydration.filterHydrationData)
        expect(hydration.calcAvgWaterAllTime(65.3)).to.be.equal()
    });

    // it('should be able to get fluid ounces consumed for specific day', () => {
    //     const hydration = new Hydration(userData);
    //     expect(hydration.()).to.be.equal()
    // });

    // it('should be able to get fluid ounces consumed each day over a course of a week', () => {
    //     const hydration = new Hydration(userData);
    //     expect(hydration.()).to.be.equal()
    // });
});    
