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
  let user1, user2, activityData, activityRepository;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
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

  it('should return a users activity data given their user ID', () => {
    function returnActivityTestData(id) {
      return activityTestDataArray.filter(activity => activity.userID === id);
    }
    expect(activityRepository.returnActivityData(1)).to.deep.equal(returnActivityTestData(1));
    expect(activityRepository.returnActivityData(2)).to.deep.equal(returnActivityTestData(2));
  })

  it('should return a users activity data by date given their user ID', () => {
    function returnActivityTestData(id, date) {
      const allUserActivity = activityTestDataArray.filter(activity => activity.userID === id);
      return allUserActivity.find(activity => activity.date === date);
    }

    expect(activityRepository.filterByIdAndDate(user1, "2019/06/15")).to.deep.equal(returnActivityTestData(1, "2019/06/15"));
    expect(activityRepository.filterByIdAndDate(user2, "2019/06/16")).to.deep.equal(returnActivityTestData(2, "2019/06/16"));
  })

  it('should return miles walked on date', () => {
    expect(activityRepository.returnMilesWalked(user1, "2019/06/15")).to.equal(3.9);
    expect(activityRepository.returnMilesWalked(user2, "2019/06/16")).to.equal(1.1);
  })

  it('should return minutes active on date', () => {
    expect(activityRepository.returnMinutesActive(user1, "2019/06/15")).to.equal(140);
    expect(activityRepository.returnMinutesActive(user2, "2019/06/16")).to.equal(112);
  })

  it('should return steps taken on date', () => {
    expect(activityRepository.returnStepsTaken(user1, "2019/06/15")).to.equal(3577);
    expect(activityRepository.returnStepsTaken(user2, "2019/06/16")).to.equal(4887);
  })

  it('should return flights of stairs on date', () => {
    expect(activityRepository.returnStairs(user1, "2019/06/15")).to.equal(16);
    expect(activityRepository.returnStairs(user2, "2019/06/16")).to.equal(19);
  })

  it('should get a users activity data for a given week', () => {
    expect(activityRepository.getActivityDataByWeek(1, "2019/06/21")).to.deep.equal([
      {"userID": 1, "date": "2019/06/15", "numSteps": 3577, "minutesActive": 140, "flightsOfStairs": 16},
      {"userID": 1, "date": "2019/06/16", "numSteps": 4294, "minutesActive": 138, "flightsOfStairs": 10},
      {"userID": 1, "date": "2019/06/17", "numSteps": 7402, "minutesActive": 116, "flightsOfStairs": 33},
      {"userID": 1, "date": "2019/06/18", "numSteps": 3486, "minutesActive": 114, "flightsOfStairs": 32},
      {"userID": 1, "date": "2019/06/19", "numSteps": 11374, "minutesActive": 213, "flightsOfStairs": 13},
      {"userID": 1, "date": "2019/06/20", "numSteps": 14810, "minutesActive": 287, "flightsOfStairs": 18},
      {"userID": 1, "date": "2019/06/21", "numSteps": 2634, "minutesActive": 107, "flightsOfStairs": 5}
    ]);

    expect(activityRepository.getActivityDataByWeek(2, "2019/06/22")).to.deep.equal([
      {"userID": 2, "date": "2019/06/16", "numSteps": 4887, "minutesActive": 112, "flightsOfStairs": 19},
      {"userID": 2, "date": "2019/06/17", "numSteps": 7864, "minutesActive": 151, "flightsOfStairs": 28},
      {"userID": 2, "date": "2019/06/18", "numSteps": 6885, "minutesActive": 98, "flightsOfStairs": 40},
      {"userID": 2, "date": "2019/06/19", "numSteps": 15135, "minutesActive": 220, "flightsOfStairs": 21},
      {"userID": 2, "date": "2019/06/20", "numSteps": 10001, "minutesActive": 101, "flightsOfStairs": 10},
      {"userID": 2, "date": "2019/06/21", "numSteps": 7975, "minutesActive": 99, "flightsOfStairs": 3},
      {"userID": 2, "date": "2019/06/22", "numSteps": 18546, "minutesActive": 287, "flightsOfStairs": 40}
    ]);
  })

  it('should return average daily active minutes over a week', () => {
    expect(activityRepository.calculateWeeklyAverageMinutesActive(1, "2019/06/21")).to.equal(159);
    expect(activityRepository.calculateWeeklyAverageMinutesActive(2, "2019/06/22")).to.equal(153);
  })

  it('should say if a user met their step goal on date', () => {
    expect(activityRepository.determineStepGoalAchieved(user1, "2019/06/15")).to.equal(true);
    expect(activityRepository.determineStepGoalAchieved(user2, "2019/06/16")).to.equal(false);
  })

  it('should return all days where step goal was exceeded', () => {
    expect(activityRepository.findDaysExceededStepGoal(user1)).to.deep.equal(["2019/06/15", "2019/06/16", "2019/06/17", "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/22"]);
    expect(activityRepository.findDaysExceededStepGoal(user2)).to.deep.equal(["2019/06/19", "2019/06/22"]);
  })

  it('should return user record for flights of stairs climbed', () => {
    expect(activityRepository.findFlightsOfStairsRecord(1)).to.equal(33);
    expect(activityRepository.findFlightsOfStairsRecord(2)).to.equal(40);
  })

  it('should return all user avg steps for a given date', () => {
    expect(activityRepository.getAllUserAvgSteps("2019/06/15")).to.deep.equal(4082);
    expect(activityRepository.getAllUserAvgSteps("2019/06/16")).to.deep.equal(4591);
  })

  it('should return all user avg mins for a given date', () => {
    expect(activityRepository.getAllUserTotalMins("2019/06/15")).to.deep.equal(152);
    expect(activityRepository.getAllUserTotalMins("2019/06/16")).to.deep.equal(125);
  })

  it('should return all user avg stairs for a given date', () => {
    expect(activityRepository.getAllUserTotalStairs("2019/06/15")).to.deep.equal(17);
    expect(activityRepository.getAllUserTotalStairs("2019/06/16")).to.deep.equal(15);
  })

})
