const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const HydrationRepo = require('../src/HydrationRepo');

describe('Hydration', () => {
  let hydrationData, oneData;

  beforeEach(() => {
    hydrationData = [
      {
        "userID": 34,
        "date": "2019/09/17",
        "numOunces": 69
      }
    ];
    oneData = new Hydration(hydrationData[0]);

  });

  it.skip('should have an appropriate constructor', () => {
    expect(oneData.id).to.equal(34);
    expect(oneData.date).to.equal('2019/09/17');
    expect(oneData.numOunces).to.equal(69);
  });

  it.skip('should return ounces consumed on given day', () => {
    const ounces = oneData.returnOuncesToday();

    expect(ounces).to.equal(69);
  });
});
