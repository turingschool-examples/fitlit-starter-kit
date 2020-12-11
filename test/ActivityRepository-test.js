const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const userTestData = testData.testUsers;
const activityTestDataFile = require('../data/activity-test-data');
const activityTestDataArray = activityTestDataFile.testActivity;
const Activity = require('../src/Activity');
const ActivityRepository = require('../src/ActivityRepository');
const User = require('../src/User');

describe('Activity', () => {
  let activityData, activityRepository;

  beforeEach(() => {
    activityData = activityTestDataArray.map(activityObject => {
      const activity = new Activity(activityObject);
      return activity;
    });
    activityRepository = new ActivityRepository(activityData);
  })

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  })

  it('should be an instance of ActivityRepository', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  })

  it('should hold all Activity objects', () => {
    expect(activityRepository.activityInstanceData[0]).to.deep.equal(activityData[0]);
  })

  it('should return miles walked on date', () => {
    expect(activityRepository.returnMilesWalked(1, "2019/06/15")).to.equal(3.9);
    expect(activityRepository.returnMilesWalked(2, "2019/06/16")).to.equal(1.1);
  })

  it('should return minutes active on date', () => {
    expect(activityRepository.returnMinutesActive(1, "2019/06/15")).to.equal(140);
    expect(activityRepository.returnMinutesActive(2, "2019/06/15")).to.equal(112);
  })

  it('should return average daily active minutes over a week', () => {
    expect(activityRepository.calculateWeeklyAverageMinutesActive(1, "2019/06/15")).to.equal(159);
    expect(activityRepository.calculateWeeklyAverageMinutesActive(2, "2019/06/16")).to.equal(153);
  })

  it('should say if a user met their step goal on date', () => {
    expect(activityRepository.determineStepGoalAchieved(1, "2019/06/15")).to.equal(true);
    expect(activityRepository.determineStepGoalAchieved(2, "2019/06/16")).to.equal(false);
  })

  it('should return all days where step goal was exceeded', () => {
    expect(activityRepository.findDaysWithExceededStepGoal(1)).to.equal(["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/22"]);
    expect(activityRepository.findDaysWithExceededStepGoal(2)).to.equal(["2019/06/19", "2019/06/22"]);
  })

  it('should return high for flights of stairs', () => {
    expect(activityRepository.findFlightsOfStairsRecord(1)).to.equal(33);
    expect(activityRepository.findFlightsOfStairsRecord(2)).to.equal(40);
  })

  it('should return all users combined average stairs climbed, steps, and minutes active on date', () => {
    expect(activityRepository.calculateAllUsersActivityAveragesOnDay("2019/06/15")).to.equal([{numSteps: 4082}, {minutesActive: 152}, {flightsOfStairs: 17}]);
    expect(activityRepository.calculateAllUsersActivityAveragesOnDay("2019/06/16")).to.equal([{numSteps: 4591}, {minutesActive: 125}, {flightsOfStairs: 15}]);
  })

})
