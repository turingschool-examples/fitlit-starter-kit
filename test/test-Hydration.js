const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const sampleHydration = require('./sampleHydratation');
const User = require('../src/User');
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  it('should be an instance of the Hydration class', () =>{
    const userHydro = new Hydration();
    expect(userHydro).to.be.an.instanceOf(Hydration)
  });
  it('should be able to get overall average of fluid oz consumed for a specific user', () => {
    const repo = new HydrationRepository (sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro.userTotalAvgOz()).to.equal(56);
  });
  it('should be able to return average oz consumed by date', () => {
    const repo = new HydrationRepository(sampleHydration)
    const userHydro = new Hydration(repo.getUserData(3));
    expect(userHydro.userAvgByDate('2019/06/20')).to.equal(51)
  });
  it('should display the total oz consumed per day for a given week')
})