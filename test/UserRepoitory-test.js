const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User-class');
const userData = require('../data/users');

describe('UserRepository', function() {

	let user1;
	let user2;
	let user3;
	let userRepository;

	beforeEach(() => {
		user1 = new User(userData[0]);
		user2 = new User(userData[1]);
		user3 = new User(userData[2]);

		userRepository = new UserRepository([user1, user2, user3])
	})

	it('should be a function', function() {
			expect(UserRepository).to.be.a('function');
	})

	it('should be an instance of UserRepository', function() {
			expect(userRepository).to.be.an.instanceof(UserRepository);
		});

	it('should have data from the user', function() {
			expect(userData).to.equal(userData);
	})

	it('should be able to get data by the user id', function() {
			let getData = userRepository.getDataById(2)
			expect(getData).to.equal(user3)
	})

	it('should be able to get average step goal for user', function() {

			let getSteps = userData.getAverageStepGoal()
			expect(getSteps).to.equal(userData)

	})
});