const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydrationUser.js');
const sampleHydrationData = require('../test/hydration-sample-data.js');

describe('Hydration', function() {
    it.skip('should be a function', function() {
        expect(Hydration).to.be.a('function');
    })
    it.skip('should return a user all time hydration amount', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.allTimeHydration(1)).to.equal(54.36)
    })
    it.only('should return a user water consumpution on a given day', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.dailyHydration(1, "2019/06/16")).to.equal(69)
    })
    it.only('should return hydration for a week', function() {
        const water = new Hydration(sampleHydrationData);
        expect(water.weeklyHydration(1, '2019/07/09')).to.deep.equal([" 2019/07/03  :  26 "," 2019/07/04  :  30 ", " 2019/07/05  :  46 "," 2019/07/06  :  26 " , " 2019/07/07  :  34 "," 2019/07/08  :  24 " , " 2019/07/09  :  89 "]);
    })
    

    })