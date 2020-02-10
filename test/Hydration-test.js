const chai = require("chai");
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('../data/hydration');
const User = require('../src/User');
const userData = require('../data/user-test-data');

let hydration;
let user;

describe('Hydration default properties', () => {

  beforeEach(() => {
    user = new User(userData[0]);
    hydration = new Hydration(hydrationData, user.ID);
  })

  it('it should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

  it('it should be an instance of hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  })

  it('it should have a unique ID', () => {
    expect(hydrationData[0].userID).to.equal(1);
  })

  it('it should have a date', () => {
    expect(hydrationData[0].date).to.equal("2019/06/15");
  })

  it('it should have a number of ounces consumed', () => {
    expect(hydrationData[0].numOunces).to.equal(37);
  })

  it('it should show fluid consumed by date', () => {
    expect(hydration.fluidConsumedByDate("2019/06/15")).to.equal(37);
  })

  it('it should have a date', () => {
    expect(hydration.fluidConsumedALlTime(1)).to.equal(5831);
  })

  it('it should have a date', () => {
    expect(hydration.fluidConsumededWeekly()).to.deep.equal([ 97, 65, 25, 22, 90, 81, 87 ]);
  })
})