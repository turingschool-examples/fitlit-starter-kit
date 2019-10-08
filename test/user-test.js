const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository.js');
const data = require('../data/users.js');
const User = require('../src/user.js')

describe('User', function() {
	it('should have a parameter to take in userData object', function() {
		const userRepository = new UserRepository(data)
		userRepository.findUser(10)
		const user = new User(userRepository.currentUser)
		expect(user.id).to.equal(10)
	})
	it('should return a users first name only', function(){
		const userRepository = new UserRepository(data)
		userRepository.findUser(10)
		const user = new User(userRepository.currentUser)
		expect(user. returnFirstName()).to.equal('Roslyn')		
	})
})