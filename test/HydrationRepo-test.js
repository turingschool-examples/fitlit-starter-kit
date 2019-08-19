const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/hydration-test-data');

const HydrationRepo = require('../src/HydrationRepo');

describe('HydrationRepo', () => {
  
  beforeEach(() => {
    let hydrationRepo = new HydrationRepo(hydrationData)
  })

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  })

})