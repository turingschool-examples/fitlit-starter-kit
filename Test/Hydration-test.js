const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const hydrationTestData = require ('../Test/Hydration-TestingData');

describe('Hydration', () => {
  let hydrate1, hydrate2;
  
  beforeEach( () => {
    hydrate1 = new Hydration(hydrationTestData, 1);
    hydrate2 = new Hydration(hydrationTestData, 2);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of hydrate', () => {
    expect(hydrate1).to.be.an.instanceof(Hydration);
  });

  it('should get all hydration data for a user by ID', () => {
    expect(hydrate1.buildUserHydrationData()).to.deep.equal(hydrate1.user);
    expect(hydrate2.buildUserHydrationData()).to.deep.equal(hydrate2.user)
  });

  it ('should calculate the average oz consumed per day', () => {
    expect(hydrate1.calculateAverageOunces()).to.equal(64);
    expect(hydrate2.calculateAverageOunces()).to.equal(45);
  });

  it('should show consumed oz of water by date', () => {
    expect(hydrate2.calculateDailyOunces("2019/06/20")).to.equal(32);
    expect(hydrate2.calculateDailyOunces("2019/06/18")).to.equal(9);
    expect(hydrate1.calculateDailyOunces("2019/06/16")).to.equal(69);
    expect(hydrate1.calculateDailyOunces("2019/06/18")).to.equal(61);
  });

  it('should calculate the weekly consumed ounce by date', () => {
    expect(hydrate1.calculateWeeklyOz("2019/06/15")).to.deep.equal([
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 }
    ])
    expect(hydrate2.calculateWeeklyOz("2019/06/18")).to.deep.equal([
      { userID: 2, date: '2019/06/18', numOunces: 9 },
      { userID: 2, date: '2019/06/19', numOunces: 91 },
      { userID: 2, date: '2019/06/20', numOunces: 32 },
      { userID: 2, date: '2019/06/21', numOunces: 45 },
      { userID: 2, date: '2019/06/22', numOunces: 12 },
      { userID: 2, date: '2019/06/23', numOunces: 41 },
      { userID: 2, date: '2019/06/24', numOunces: 91 }
    ]);
  });
  
});