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

<<<<<<< HEAD
  // it('it should have a date', () => {
  //   expect(hydration.fluidConsumededWeekly("2019/06/15")).to.equal(37);
  // })
=======
  it('it should have a date', () => {
    expect(hydration.fluidConsumedALlTime(1)).to.equal(5831);
  })
<<<<<<< HEAD
>>>>>>> 20fc9273d733fc8ca785e0b1c8d197ae42d345e7
=======

  it('it should have a date', () => {
    expect(hydration.fluidConsumededWeekly()).to.deep.equal([ 97, 65, 25, 22, 90, 81, 87 ]);
  })
>>>>>>> 2492d32dd738f5a615b4216e1a10397f1e28e0d7
})
