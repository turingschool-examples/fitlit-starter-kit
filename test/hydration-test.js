const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');
const sampleHydrationData = require('../test/hydration-sample-data.js');

describe('Hydration', function() {
    it('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    it('should return a user all time hydration amount', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.allTimeHydration(1)).to.equal(54.36)
    })
    it('should return a user water consumpution on a given day', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.dailyHydration(1, "2019/06/16")).to.equal(69)
    })
    it('should return hydration for a week', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.weeklyHydration(1, '2019/07/09')).to.deep.equal([" 2019/07/03  :  26 "," 2019/07/04  :  30 ", " 2019/07/05  :  46 "," 2019/07/06  :  26 " , " 2019/07/07  :  34 "," 2019/07/08  :  24 " , " 2019/07/09  :  89 "]);
    })
    it('should return the days where the users water intake increased', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.getIncreasingWater(1)).to.deep.equal(['2019/06/17', '2019/06/29', '2019/07/05'])
    })
    

    })