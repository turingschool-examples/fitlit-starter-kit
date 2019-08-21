const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const sampleHydration = require('./sampleHydratation');
const User = require('../src/User');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  it('should be an instance of the Hydration class', () =>{
    const repo = new HydrationRepository(sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro).to.be.an.instanceOf(Hydration)
  });
  it('should be able to get overall average of fluid oz consumed for a specific user', () => {
    const repo = new HydrationRepository (sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro.userTotalAvgOz()).to.equal(56);
  });
  it('should be able to return oz consumed on a specific date', () => {
    const repo = new HydrationRepository(sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro.userHydrationByDate('2019/06/20')).to.equal(51)
  });
  it('should display the total oz consumed per day for a given week', () => {
    const repo = new HydrationRepository(sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro.getHydroArray('2019/06/24')).to.eql([
      { userID: 3, date: '2019/06/24', numOunces: 40 },
      { userID: 3, date: '2019/06/23', numOunces: 35 },
      { userID: 3, date: '2019/06/22', numOunces: 78 },
      { userID: 3, date: '2019/06/21', numOunces: 41 },
      { userID: 3, date: '2019/06/20', numOunces: 51 },
      { userID: 3, date: '2019/06/19', numOunces: 85 },
      { userID: 3, date: '2019/06/18', numOunces: 40 }])
  })
  it('should calculate average oz drank for a specific week', () => {
    const repo = new HydrationRepository(sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    userHydro.getHydroArray('2019/06/24')
    expect(userHydro.getWeeklyHydroAvg()).to.equal(53)
  })
})