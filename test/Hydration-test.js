const chai = require('chai');
const expect = chai.expect;

const data = require('./data/hydration.js');
const hydrationData = data.hydrationData;

const Hydration = require('../src/Hydration.js');

describe('Hydration', function() {
  let hydration;
  beforeEach(function() {
    hydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have an array of data', function() {

    expect(hydration.data).to.be.an.instanceof(Array);
  });

  it('should take in an array of data when instantiated', function() {
    expect(hydration.data).to.deep.equal(hydrationData);
  });

  it('should be able to get all of a user\'s hydration data', function() {
    let userData = hydrationData.slice(7, 14);
    expect(hydration.getUserData(11)).to.deep.equal(userData);
  });

  it('should be able to return a user\'s average floz per day', function() {
    expect(hydration.getLifetimeAverage(11)).to.equal(54);
  });

  it('should be able to return consumption for a given day and user', function() {
    expect(hydration.getDay(11, "2020/02/06")).to.equal(83);
  });

  it('should be able to return a week of consumption', function() {
    let weekData = hydrationData.slice(7, 14);
    expect(hydration.getWeek(11, "2020/02/08")).to.deep.equal(weekData);
  });

  it('should be able to return an incomplete week', function() {
    let weekData = hydrationData.slice(7, 13);
    expect(hydration.getWeek(11, "2020/02/07")).to.deep.equal(weekData);
  });

});
