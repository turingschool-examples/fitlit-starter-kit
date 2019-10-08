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
    console.log(hydro.data)
    expect(hydro.data.length).to.eql(100)
  });
});