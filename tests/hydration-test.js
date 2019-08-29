const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydration');
const hydrationData = require('../data/test-data-hydration');

describe('Hydration', function() {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(hydrationData, 1);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return a total average of daily consumption', () => {
    expect(hydration.getDailyAvg()).to.equal(59.7)
  });

  it('should return ounces consumed on a specific day', () => {
    expect(hydration.getDailyOz('2019/06/20', 1)).to.equal(50)
  });

  it('should return 7 days worth of consumption values', () => {
  expect(hydration.getWeekIntake("2019/06/20", 1)).to.deep.equal([
      { userID: 1, date: '2019/06/15', numOunces: 37 },
      { userID: 1, date: '2019/06/16', numOunces: 69 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/21', numOunces: 50 }
    ]);
  });
});