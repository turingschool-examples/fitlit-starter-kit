const chai = require('chai');
const expect = chai.expect;

const Hydration = require("../src/hydration");
const hydrationData = require("../data/sampleHydration");

describe('Hydration', function() {

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })
    
  it('should be an instance of Hydration', function() {
    let hydro = new Hydration(hydrationData);
    expect(hydro).to.be.an.instanceof(Hydration);
  })

  it('should return the average ounces consumed by a user', function() {
    let hydro = new Hydration(hydrationData);
    expect(hydro.averageTotalFluidOzPerUser(7)).to.equal(6.42);
  })

  it('should return the ozs of specified date by a user', function() {
    let hydro = new Hydration(hydrationData);
    expect(hydro.fluidOzsPerDay(4, "2019/06/19")).to.equal(21);
  })

  it('should return the ozs of specified week by a user', function() {
    let hydro = new Hydration(hydrationData);
    expect(hydro.userFluidsPerWeek(7, "2019/06/22")).to.deep.eql([ 49, 50, 58, 41, 80, 95, 74 ]);
  })

});