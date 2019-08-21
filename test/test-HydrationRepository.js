const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const sampleHydration = require('./sampleHydratation');

const User = require('../src/User');
const Hydration = require('../src/Hydration');
const HydrationRepository = require('../src/HydrationRepository');

describe('HydrationRepository', () => {
  it('should be an instance of Hydration Repository', () => {
    const repo = new HydrationRepository(sampleHydration);
    expect(repo).to.be.an.instanceOf(HydrationRepository)
  });
  it('should return user data', () => {
    const repo = new HydrationRepository(sampleHydration);
    
    expect(repo.getUserData(3)).to.eql([ { userID: 3, date: '2019/06/15', numOunces: 47 },
  { userID: 3, date: '2019/06/16', numOunces: 99 },
  { userID: 3, date: '2019/06/17', numOunces: 28 },
  { userID: 3, date: '2019/06/18', numOunces: 40 },
  { userID: 3, date: '2019/06/19', numOunces: 85 },
  { userID: 3, date: '2019/06/20', numOunces: 51 },
  { userID: 3, date: '2019/06/21', numOunces: 41 },
  { userID: 3, date: '2019/06/22', numOunces: 78 },
  { userID: 3, date: '2019/06/23', numOunces: 35 },
  { userID: 3, date: '2019/06/24', numOunces: 40 },
  { userID: 3, date: '2019/06/25', numOunces: 47 },
  { userID: 3, date: '2019/06/26', numOunces: 48 },
  { userID: 3, date: '2019/06/27', numOunces: 89 } ])
  });
  it('should be able to calculate weekly avg for all users (oz drank)', () => {
    const repo = new HydrationRepository(sampleHydration);
    expect(repo.getWeeklyAvgAllUsers()).to.equal(61)
  });
})