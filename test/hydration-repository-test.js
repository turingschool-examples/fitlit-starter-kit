const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', function() {

  it.only('should be a function', function() {
    const hydrationRepository = new HydrationRepository();
    expect(HydrationRepository).to.be.a('function');
  })


});
