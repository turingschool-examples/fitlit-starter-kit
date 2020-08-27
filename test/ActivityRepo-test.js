const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  let activityRepo;
  beforeEach(() => {
    activityRepo = new ActivityRepo(hydrationData);
  });

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should instantiate a class of Hydration', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  });
  
});