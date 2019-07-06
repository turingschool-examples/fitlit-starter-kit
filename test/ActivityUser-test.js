const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository.js');
const UserRepository = require('../src/UserRepository.js');
const User = require('../src/User.js');
const mockActivityData = require('../mock-data/mock-activity.js');
const mockUsers = require('../mock-data/mock-users.js');
const ActivityUser = require('../src/ActivityUser.js')

let newActivityUserRepo;
let newActivityUser;
let newUserRepo;
let newUser;

describe('ActivityRepository', function() {
	beforeEach(function() {
		newActivityUserRepo = new ActivityRepository(mockActivityData, 1, mockUsers);
		newUserRepo = new 
			UserRepository(mockUsers, 1);
		newUser = new User(newUserRepo.findUser());
		newActivityUser = new ActivityUser(newActivityUserRepo.findActivityUser(), newUser);
	});

	it('should be a function', function() {
		expect(ActivityUser).to.be.a('function')
	});

	it('should be an instance of ActivityUser', function() {
		expect(newActivityUser).to.be.an.instanceOf(ActivityUser)
	});

	describe('milesWalked', function() {
		it('should show how many miles a user has walked on a specific day', function() {
			expect(newActivityUser.milesWalked("2019/06/16")).to.equal(5.4)
		});
	});

	describe('minutesActive', function() {
		it('should show how many minutes a user was active on a specific day', function() {
			expect(newActivityUser.minutesActive("2019/06/16")).to.equal(175)
		});
	});

	describe('stepGoalMet', function() {
		it('should show if a user met their step goal for a specific day', function() {
			expect(newActivityUser.stepGoalMet("2019/06/16")).to.equal(false)
		});
	});

	describe('stairClimbRecord', function() {
		it('should show the user\'s all time stair climbing record', function() {
			expect(newActivityUser.stairClimbRecord()).to.equal(36)
		});	
	});

	describe('lifeTimeTotalMiles', function() {
		it('should show how many miles a user has walked overall', function() {
			expect(newActivityUser.lifeTimeTotalMiles()).to.equal(56.1)
		});
	});

});