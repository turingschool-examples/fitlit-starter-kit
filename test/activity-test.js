const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', function() {

  it('should be a function', function() {
    const activity = new Activity();

    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    const activity = new Activity();

    expect(activity).to.be.an.instanceof(Activity);
  });

});
