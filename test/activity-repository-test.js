const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityUser');
const activityTestData = require('../data/test-data/activity-test-data');


beforeEach(() => {
  activityRepository = new ActivityRepository(activityTestData);
});

describe('ActivityRepository', function() {

  it.only('should be a function', function() {
    expect(ActivityRepository).to.be.a('function')
  });








}); //<<----end of describe block
