const chai = require('chai');
const expect = chai.expect;

const Hydro = require('../src/hydro.js');
const HydroRepository = require('../src/hydroRepository.js')
const data = require('../data/hydration.js')

describe('Hydro', function() {
  it('should be a function', function() {

  });

  it('should have all dates', function() {
    let hydropRepository = new HydroRepository(data);
    hydropRepository.findUserId(4)
    let hydro = new Hydro(hydropRepository.currentUser)
    expect(hydro.data.length).to.eql(100)
  });

  it('Should calculate avg ounces for all time', function() {
    let hydropRepository = new HydroRepository(data);
    hydropRepository.findUserId(4);
    let hydro = new Hydro(hydropRepository.currentUser); 
    expect(hydro.findAvgFluidOunces()).to.equal(64)
  });

  it('Should return ounces consumed by date', function() {
    let hydropRepository = new HydroRepository(data);
    hydropRepository.findUserId(4);
    let hydro = new Hydro(hydropRepository.currentUser);
    expect(hydro.findFluidDate('2019/09/22')).to.equal(68)
  });

  it('Should return ounces consumed for a week', function() {
    let hydropRepository = new HydroRepository(data);
    hydropRepository.findUserId(4);
    let hydro = new Hydro(hydropRepository.currentUser);
    expect(hydro.findFluidWeek('2019/07/28')).to.eql([
      65, 46, 91, 100,
      60, 48, 93
    ])
  })
});