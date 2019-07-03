const chai = require("chai")
const expect = chai.expect;
const Hydration = require("../src/hydration");
const hydrationData = require("../data/hydration");
const hydrationTestData = hydrationData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19')
console.log(hydrationTestData);

describe('Hydration', function() {

    beforeEach(function() {
        hydration = new Hydration(hydrationTestData);
      });
        
      it('should be a function', function() {
        expect(Hydration).to.be.a('function');
      });

      it('should be an instance of hydration', function() {
        expect(hydration).to.be.an.instanceof(Hydration);
      }); 
});
