const expect = require('chai').expect;
const Activity = require('../src/Activity');

describe('Activity', () => {
  let activity;

  beforeEach(() => {
    activity = new Activity();
  });
  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });
})

