const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydration1, hydration10, hydration17;

  beforeEach(() => {

    hydration1 = new Hydration({"userID": 2, "date": "2019/04/15", "numOunces": 28});
    hydration10 = new Hydration({"userID": 15, "date": "2019/02/25", "numOunces": 10});
    hydration17 = new Hydration({"userID": 20, "date": "2019/12/02", "numOunces": 100});

  })

  it('should have a userID property', () => {
    expect(hydration1.userID).to.equal(2);
    expect(hydration10.userID).to.equal(15);
    expect(hydration17.userID).to.equal(20);
  })
  it('should include a date as a property', () => {
    expect(hydration1.date).to.equal("2019/04/15");
    expect(hydration10.date).to.equal("2019/02/25");
    expect(hydration17.date).to.equal("2019/12/02");
  })
  it('should have a property that states the number of ounces of water consumed', () => {
    expect(hydration1.numOunces).to.equal(28);
    expect(hydration10.numOunces).to.equal(10);
    expect(hydration17.numOunces).to.equal(100);
  })
})
