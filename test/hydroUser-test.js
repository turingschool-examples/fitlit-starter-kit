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
  
  it('should calculate avg oz consumed daily for all time', () => {
    expect(hydroUser.calcAvgTotalOz()).to.equal(60);
  });

  it('should get fluid oz consumed by specific day', () => {
    expect(hydroUser.getOzByDate("2019/06/22")).to.equal(43);
  });

  it('should get fluid oz consumed per day by week', () => {
    console.log(userHydroData);
    expect(hydroUser.getDailyOzPerWeek()).to.deep.equal([96, 61, 91, 50, 50, 43, 39]);
  });

});
