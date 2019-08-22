const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/hydration-test-data');
const userData = require('../data/users-test-data');


const Hydration = require('../src/Hydration');
const User = require('../src/User');


describe('Hydration', () => {
  let hydration;
  let user;

  beforeEach(() => {
    user = new User(userData[0])
    hydration = new Hydration(hydrationData, user.id)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of the class Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should hold hydration data', () => {
    expect(hydration.hydrationData).to.eql(hydrationData);
  });

  it('should contain userID', () => {
    expect(hydration.userID).to.equal(user.id);
  });

  it('should return the average fluid ounces for a user for all time', () => {
    expect(hydration.returnAverageFluidOunces()).to.equal(62);
  });

  it('should return the amount of fluid ounces consumed on a specific date for a specific person', () => {
    expect(hydration.returnDailyFluidOunces('2019/06/15')).to.equal(37);
  });

  it('should return the amount of ounces consumed for one person over a week', () => {
    expect(hydration.returnWeeklyNumOunces(1)).to.eql([69, 96, 61, 91, 50, 50, 43]);
  });



})