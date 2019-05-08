const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')

describe('UserRepository', function() {

	it('Should be a function', function() {
		expect(UserRepository).to.be.a('function');
	});

	it('Should be an instance of the userRepository class', function() {
		const userRepository = new UserRepository('../data/proxy-hydration');
		expect(userRepository).to.be.an.instanceOf(UserRepository);
	});

	it('Should reassign a new path variable using the dataFilepath', function() {
		const userRepository = new UserRepository('../data/proxy-hydration');
		expect(userRepository.path[0].hydrationData.length).to.eql(3);
	})

	it('Should return user data object based on userId and data file', function() {
		const userRepository1 = new UserRepository('../data/proxy-hydration');
		expect(userRepository1.returnUserData(1).hydrationData[0].numOunces).to.eql(64);
		const userRepository2 = new UserRepository('../data/proxy-activity');
		expect(userRepository2.returnUserData(2).activityData[1].flightsOfStairs).to.eql(28);
	})

	it('Should calculate and return the average step goal for all users', function() {
		const userRepository = new UserRepository('../data/proxy-users');
		expect(userRepository.calculateAvgStepGoal()).to.equal(7600);
	})

	it('Should calculate and return the mode of the user\'s home states', function() {
		const userRepository = new UserRepository('../data/proxy-users');
		expect(userRepository.calculateModeState()).to.equal('CO');
	})
})