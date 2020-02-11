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

  it('should return average flight of stairs climbed for all users', () => {
    expect(activityData.allUserStairsClimbedByDate("2019/06/15")).to.equal(24);
  })

  it('should return average number of steps taken for all users', () => {
    expect(activityData.averageStepsTakenByDate("2019/06/15")).to.equal(8098);
  })

  it('should return average minutes active for all users', () => {
    expect(activityData.averageMinutesActiveByDate("2019/06/15")).to.equal(151);
  })

  it('should return all time higest flights of stairs climbed for all users', () => {
    expect(activityData.allTimeFlightsClimbed()).to.deep.equal({
      userID: 17,
      date: '2019/06/15',
      numSteps: 12982,
      minutesActive: 231,
      flightsOfStairs: 46
    });
  })
})
