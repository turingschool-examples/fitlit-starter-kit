
const chai = require("chai")
const expect = chai.expect;
const ActivityRepository = require("../src/activity-repository");
const activityData = require("../data/activity");
const activityTestData = activityData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weeklyActivityTestData = activityTestData.filter(user => user.userID === 1).slice(-7);
const testActivityUserData = activityTestData.filter(user => user.userID === 1);

describe('ActivityRepository', function() {

  beforeEach(function() {
    activityRepository = new ActivityRepository(activityTestData);
  });

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should hold on to dataset for activity data', function() {
    expect(activityRepository.data).to.deep.equal(activityTestData)
  });

  it('should return overall average flights of stairs for a given date', function() {
    expect(activityRepository.returnAvgStairs('2019/06/23')).to.equal(_________)
  });

  it('should return overall average steps taken for a given date', function() {
    expect(activityRepository.returnAvgSteps('2019/06/23')).to.equal(_________)
  });

  it('should return overall average active minutes for a given date', function() {
    expect(activityRepository.returnAvgMins('2019/06/23').to.equal(_________))
});


  it('should return user with top steps for a given date', function() {
    expect(activityRepository.returnTopSteps('2019/06/23').to.equal(_______))
  });
});