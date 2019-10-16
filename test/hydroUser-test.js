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
    expect(hydroUser.getDailyOzPerWeek('2019/06/23')).to.deep.equal([{ userID: 1, date: '2019/06/16', numOunces: 69 },
    { userID: 1, date: '2019/06/17', numOunces: 96 },
    { userID: 1, date: '2019/06/18', numOunces: 61 },
    { userID: 1, date: '2019/06/19', numOunces: 91 },
    { userID: 1, date: '2019/06/20', numOunces: 50 },
    { userID: 1, date: '2019/06/21', numOunces: 50 },
    { userID: 1, date: '2019/06/22', numOunces: 43 },
    { userID: 1, date: '2019/06/23', numOunces: 39 }]);
  });

  it('should find the total step count for any given week', () => {
    expect(hydroUser.calcTotalDrankByWeek("2019/06/23")).to.equal(499);
  });

});
