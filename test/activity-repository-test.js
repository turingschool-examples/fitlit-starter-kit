const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityUser');


beforeEach(() => {
  sleepUser = new ActivityRepository()
})

describe('ActivityRepository', function() {

  it.only('should be a function', function() {
    expect(ActivityRepository).to.be.a('function')
  })




}); //<<----end of describe block
