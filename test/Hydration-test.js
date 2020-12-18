const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydrationData, oneData;

  beforeEach(() => {
    hydrationData = {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 69
      };

    oneData = new Hydration(hydrationData);
  });

  it.skip('should have an appropriate constructor', () => {
    expect(oneData.id).to.equal(1);
    expect(oneData.date).to.equal('2019/06/15');
    expect(oneData.numOunces).to.equal(69);
  });

  it.skip('should return ounces consumed on given day', () => {
    const ounces = oneData.returnOuncesToday();

    expect(ounces).to.equal(69);
  });
});
