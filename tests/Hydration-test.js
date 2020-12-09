const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const User = require('../src/User');

describe('Hydration', () => {
  let hydration1, hydration2;
  let user1, user2;

  beforeEach(() => {
    hydration1 = new Hydration({
      "userID": 2,
      "date": "2019/04/15",
      "numOunces": 25
    });
    hydration2 = new Hydration({
      "userID": 15,
      "date": "2019/02/25",
      "numOunces": 0
    });
    hydration3 = new Hydration({
      "userID": 20,
      "date": "2019/12/02",
      "numOunces": 100
    });
  })

  it('should have a userID property', () => {
    expect(hydration1.userID).to.equal(2);
    expect(hydration2.userID).to.equal(15);
    expect(hydration3.userID).to.equal(20);
  })
  it('should include a date as a property', () => {
    expect(hydration1.date).to.equal("2019/04/15");
    expect(hydration2.date).to.equal("2019/02/25");
    expect(hydration3.date).to.equal("2019/12/02");
  })
  it('should have a property that states the number of ounces of water consumed', () => {
    expect(hydration1.numOunces).to.equal(25);
    expect(hydration2.numOunces).to.equal(0);
    expect(hydration3.numOunces).to.equal(100);
  })
})
