const chai = require('chai');
const expect = chai.expect;
const HydroRepo = require('../src/hydroRepo');
const hydrationSampleData = require('../data/hydration-sample');

describe('hydroRepo', () => {

  let hydroRepo;
  let id = 1;
  let userHydrationData = hydrationSampleData.filter(data => data.userID === id); 

  beforeEach(() => {
    hydroRepo = new HydroRepo(hydrationSampleData);
  });

  it('should be a function', () => {
    expect(HydroRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(hydroRepo).to.be.an.instanceOf(HydroRepo);
  });

  it('should have hydration data', () => {
    expect(hydroRepo.hydrationData).to.equal(hydrationSampleData);
  });

  it('should be able get hydro data from specific user', () => {
    expect(hydroRepo.getUserHydroData(1)).to.deep.equal(userHydrationData);
  });
});
