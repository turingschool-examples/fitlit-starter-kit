const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');

describe('Activity Repository', () => {
  
  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function')
  })
})