const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/practice-hydration');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {

  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });
    
  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

   it('should return Id from current user', function() {
    expect(hydration.consumerInfo(3)).to.eql([hydrationData[0], hydrationData[1],hydrationData[2],hydrationData[3],hydrationData[4],hydrationData[5],hydrationData[6],hydrationData[7],hydrationData[8]]); 
  });

  it('should return the average fluid ounces per day', function() {
    expect(hydration.averageFluid(3)).to.equal(56);
  });

  it('should return total ounces of hydration for a user for a particular date', function() {
    expect(hydration.totalOuncesDaily("2019/06/15", 3)).to.eql(47);
  });

  it ('should return a list of daily ounces over a week for a user', function() {
    expect(hydration.dailyOuncesPerWeek(3)).to.eql([28,40,85,51,78,35,41])
  });
});