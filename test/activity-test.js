const chai = require('chai');
const expect = chai.expect;
const ActivityUser = require('../src/ActivityUser');


beforeEach(() => {
  sleepUser = new ActivityUser()
})

describe('ActivityUser', function() {

  it.only('should be a function', function() {
    expect(ActivityUser).to.be.a('function')
  })




}); //<<----end of describe block
