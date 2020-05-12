const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  beforeEach(() => {
    hydration = new Hydration({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    })
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })

  it('should return new instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should have an id', () => {
    expect(hydration.userID).to.equal(1);
  })

  it('should have a date', () => {
    expect(hydration.date).to.equal('2019/06/15');
  })

  it('should have number of ounces drank', () => {
    expect(hydration.numOunces).to.equal(37);
  })


})