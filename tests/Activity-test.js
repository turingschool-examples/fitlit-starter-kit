const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository')

describe('UserRepository', function() {

	it('Should be a function', function() {
		expect(UserRepository).to.be.a('function');
	});

	it('Should be an instance of the User class', function() {
		const userRepository = new UserRepository();
		expect(userRepository).to.be.an.instanceOf(UserRepository);
	});
});