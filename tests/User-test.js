const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const users = require('../data/users');

describe('User', function() {

	it('Should be a function', function() {
		expect(User).to.be.a('function');
	});

	it('Should be an instance of the User class', function() {
		const user = new User(users[0]);
		expect(user).to.be.an.instanceOf(User);
	});

	// Test for each property individually

	it('Should return a user\'s first name', function() {
		const user = new User(users[0]);
		expect(user.returnFirstName()).to.equal('Nyasia');
	});
});