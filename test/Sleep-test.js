const chai = require('chai');
const expect = chai.expect;

//const User = require('../src/User');
const Sleep = require('../src/Sleep');
const sleepSub = require('../data/sleepSub')


describe('Sleep', function () {
  it("should be a function", function() {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", function() {
    const sleep = new Sleep();
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return average hours slept for a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getAvgHoursSlept(2)).to.equal('7.3');
  });

  it('should return average hours slept for a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getAvgHoursSlept(3)).to.equal('7.0');
  });
});