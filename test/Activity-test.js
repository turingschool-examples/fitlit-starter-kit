const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const UserRepository = require('../src/UserRepository');

describe('Activity', function() {
let activity
  beforeEach(function() {
    activity = new Activity(2);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it.skip('stepsToMiles should convert a user’s number of steps to miles', function() {
    var userRepository = new UserRepository();
    // expect(sleep.averageHrsSlept()).to.equal(8.3);
  });

});