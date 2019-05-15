if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var sampleActivityData = require('../data/sample-activity');
var Activity = require('../src/activity')
var ActivityRepository = require('../src/activity-repo')
}

describe('Activity Repository', function() {
	let activity;
	let activityRepo;
	
	beforeEach(function() {
		activityRepo = new ActivityRepository('../data/sample-activity');
		activity = new Activity();

	});

	it('should be a function', function() {
		expect(ActivityRepository).to.be.a('function');
	});

	it('should be an instance of Activity Repository', function() {
		expect(activityRepo).to.be.an.instanceof(ActivityRepository);
	});

	it ('find average flights of stairs climbed on a given date', function() {
		expect(activityRepo.findAvgStairsClimbed('07/05/2019')).to.equal(16)
	});

  it ('find average steps walked on a given date', function() {
		expect(activityRepo.findAvgSteps('07/05/2019')).to.equal(2416)
  });
  
  it ('find average minutes active on a given date', function() {
		expect(activityRepo.findAvgActivity('07/05/2019')).to.equal(100)
	});

})