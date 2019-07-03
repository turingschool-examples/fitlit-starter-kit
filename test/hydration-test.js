const chai = require("chai")
const expect = chai.expect;
const Hydration = require("../src/hydration");
const hydrationData = require("../data/hydration");
const hydrationTestData = hydrationData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weekHydrationTestData = hydrationTestData.filter(user => user.userID === 1).slice(-7);
console.log(weekHydrationTestData);

describe('Hydration', function() {

    beforeEach(function() {
        hydration = new Hydration(hydrationTestData, 1);
      });
        
      it('should be a function', function() {
        expect(Hydration).to.be.a('function');
      });

      it('should be an instance of hydration', function() {
        expect(hydration).to.be.an.instanceof(Hydration);
      }); 

      it('should return total daily average water consumption', function() {
        expect(hydration.returnDailyAverage()).to.equal(62);
      });

      it('should return consumption for a specific day', function() {
        expect(hydration.returnIntakeByDay('2019/06/16')).to.equal(69);
      });

      it('should return daily intake for a week', function() {
        expect(hydration.returnWeekIntake()).to.deep.equal(weekHydrationTestData)
      });

});
