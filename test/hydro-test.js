const chai = require('chai');
const expect = chai.expect;

const Hydro = require('../src/hydro.js');
const data = require('../data/hydration.js')

describe('Hydro', function() {
  it('should be a function', function() {

  });

  it('should have all dates', function() {
    let hydro = new Hydro(data, 4)
    hydro.findAllDate(hydro.userID);
    console.log(hydro.dates)
    expect(hydro.dates.length).to.eql(50)
  });
});