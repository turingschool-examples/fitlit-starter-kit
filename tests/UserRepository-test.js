const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')

describe('UserRepository', function() {

	it('Should be a function', function() {
		expect(UserRepository).to.be.a('function');
	});

	it('Should be an instance of the userRepository class', function() {
		const userRepository = new UserRepository('../data/proxy-users');
		expect(userRepository).to.be.an.instanceOf(UserRepository);
	});

	it('Should instantiate users with the given file path', function() {
		const userRepository = new UserRepository('../data/proxy-users');
		expect(userRepository.instantiateUsers()[0].strideLength).to.eql(4.7);
	})

	it('Should return user data object based on userId and data file', function() {
		const userRepository = new UserRepository('../data/proxy-users');
		expect(userRepository.returnUserData(5).name).to.eql("Cleo Lindgren");
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