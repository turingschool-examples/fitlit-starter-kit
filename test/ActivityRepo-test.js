const chai = require("chai");
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const allActivityData = require('../data/activity-test-data');

let activityData;

describe('Activity Repo', () => {

  beforeEach(() => {
    activityData = new ActivityRepo(allActivityData);
  })

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  })

  it('should be an instance of the user repo', () => {
    expect(activityData).to.be.an.instanceof(ActivityRepo);
  })
})
