const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-test-data');

const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  
  beforeEach(() => {
    let activityRepo = new ActivityRepo(activityData)
  })

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  })


})