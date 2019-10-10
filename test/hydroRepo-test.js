const chai = require('chai');
const expect = chai.expect;
const HydroRepo = require('../src/hydroRepo');
const HydrationSampleData = require('../data/hydration-sample');

describe('hydroRepo', () => {

  let hydroRepo;

  beforeEach(() => {
  hydroRepo = new HydroRepo(HydrationSampleData);
  });

  it('should be a function', () => {
    expect(HydroRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(hydroRepo).to.be.an.instanceOf(HydroRepo);
  });

  it('should have hydration data', () => {
    expect(hydroRepo.hydrationData).to.equal(HydrationSampleData);
  });
});
