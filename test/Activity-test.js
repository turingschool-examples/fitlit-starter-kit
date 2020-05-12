const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', () => {

  it('should be a function', () => {
    expect(Activity).to.be.a('function')
  })
})