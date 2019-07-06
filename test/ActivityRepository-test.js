const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository.js');
const UserRepository = require('../src/UserRepository.js');
const User = require('../src/User.js');
const mockActivityData = require('../mock-data/mock-activity.js');
const mockUsers = require('../mock-data/mock-users.js');

let newActivityUserRepo;
let newUserRepo;
let newUser;

describe('ActivityRepository', function() {
	beforeEach(function() {
		newActivityUserRepo = new ActivityRepository(mockActivityData, 1, mockUsers);
		newUserRepo = new 
			UserRepository(mockUsers, 1);
		newUser = new User(newUserRepo.findUser());
	});

	it('should be a function', function() {
		expect(ActivityRepository).to.be.a('function')
	});

	it('should be an instance of ActivityRepository', function() {
		expect(newActivityUserRepo).to.be.an.instanceOf(ActivityRepository)
	});

	describe('minutesActiveWeekAverage', function() {
		it('should return the average minutes active for a user over a given week', function() {
			expect(newActivityUserRepo.minutesActiveWeekAverage("2019/06/15", "2019/06/21")).to.equal(171)
		});
	});

	describe('exceedStepGoal', function () {
		it('should return the days the user exceeded their step goal', function() {
			expect(newActivityUserRepo.exceedStepGoal()).to.eql(["2019/06/17", "2019/06/20", "2019/06/22"])
		});
	});

	describe('stairsClimbedAverage', function(){
		it('should return the average stairs climbed for a specific date for all users', function() {
			expect(newActivityUserRepo.stairsClimbedAverage("2019/06/18")).to.equal(32)
		});
	});

	describe('stepsTakenAverage', function() {
		it('should return the average steps taken for a specific date for all users', function() {
			expect(newActivityUserRepo.stepsTakenAverage("2019/06/18")).to.equal(4541)
		});
	});

	describe('minutesActiveAverage', function() {
		it('should return the average minutes active for a specific date for all users', function() {
			expect(newActivityUserRepo.minutesActiveAverage("2019/06/18")).to.equal(173)
		});
	});

});