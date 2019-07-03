const chai = require('chai');
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');
const sampleData = require('../data/sample-hydration');
const sampleHydrationData = sampleData.sampleHydrationData;

describe('HydrationRepo', () => {

  let hydrationRepo;
  beforeEach(() => {
    hydrationRepo = new HydrationRepo(sampleHydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  });

  it('should be an instance of HydrationRepo', () => {
    expect(hydrationRepo).to.be.an.instanceOf(HydrationRepo);
  });

  it('should return the user\'s hydration data for given id', () => {
    const length = hydrationRepo.returnUserData(2).length;
    expect(length).to.equal(9);
  });
})