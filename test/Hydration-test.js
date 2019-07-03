const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepo');
const sampleData = require('../data/sample-hydration');
const sampleHydrationData = sampleData.sampleHydrationData;

describe('Hydration', () => {

  let hydration;
  beforeEach(() => {
    hydrationRepo = new HydrationRepo(sampleHydrationData);
    hydration = new Hydration(hydrationRepo.returnUserData(2));
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should return the given user\'s average hydration ounces for all time', () => {
    const average = hydration.returnUserHydrationAverage();
    expect(average).to.equal(25);
  });

})