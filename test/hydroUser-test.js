const chai = require('chai');
const expect = chai.expect;
const HydroRepo = require('../src/hydroRepo');
const hydrationSampleData = require('../data/hydration-sample');
const HydroUser = require('../src/hydroUser');

describe('hydroUser', () => {

  let hydroUser;
  let hydroRepo;
  let userHydroData;

  beforeEach(() => {
    hydroRepo = new HydroRepo(hydrationSampleData);
    userHydroData = hydroRepo.getUserHydroData(1);
    hydroUser = new HydroUser(userHydroData);
  });
  
  it('should be a function', () => {
    expect(HydroUser).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(hydroUser).to.be.an.instanceOf(HydroUser);
  });

  it('should have a single user\'s hydration data', () => {
    expect(hydroUser.hydrationData).to.equal(userHydroData);
  });


});
