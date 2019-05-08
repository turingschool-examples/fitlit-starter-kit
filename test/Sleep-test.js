const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

describe('Sleep', function() {

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    const sleep = new Sleep(1,"day");
    expect(sleep).to.be.an.instanceof(Sleep);
  });


  it('Should have averageHrsSlept method to return users average of hours slept', function() {
    const sleep = new Sleep(2,"day");
    expect(sleep.averageHrsSlept()).to.equal(7.4);
  });

  it('Should have averageSleepQuality method to return users average of quality hours', function() {
    const sleep = new Sleep(3,"day");
    expect(sleep.averageSleepQuality()).to.equal(3.4);
  });

  it('Should have hoursSleptInDay to return hours sept in one day', function() {
    const sleep = new Sleep(3,"07/05/2019");
    expect(sleep.hoursSleptInDay()).to.equal(5.4);
  });

});