const chai = require("chai");
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('../data/hydration-test-data');

let hydration;

describe('Hydration default properties', () => {

  beforeEach(() => {
    hydration = new Hydration(hydrationData[0]);
  })

  it('it should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('it should be an instance of hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('it should have a unique ID', () => {
    expect(hydration.userID).to.equal(hydrationData[0].userID);
  })

  it('it should have a date', () => {
    expect(hydration.date).to.equal(hydrationData[0].date);
  })

  it('it should have a date', () => {
    expect(hydration.numOnces).to.equal(hydrationData[0].numOnces);
  })
})
