const chai = require("chai");
const expect = chai.expect;

var User = require('../src/User');

describe('User', () => {

	beforeEach(() => {
		let user = new User(); // what variable prefix should we be using here? 
	})

	it.only('should be a function', () => {
		expect(User).to.be.a('function');
	})

	it.skip('should be an instance of User', () => {
		expect(user).to.be.a.instanceof(User);
	})

	it.skip('should be able to have a name', () => {
		expect(user.name).to.equal("Luisa Hane"); 
	})

	it.skip('should be able to have a strideLength', () => {
		expect(user.strideLength).to.equal(4.3);
	})

	it.skip('should be able to have an ID', () => {
		expect(user.id).to.equal(1)
	})

	it.skip('should be able to have an address', () => {
		expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
	})

	it.skip('should be able to have an email address', () => {
		expect(user.email).to.equal("Diana.Hayes1@hotmail.com")
	})

	it.skip('should be able to have a dailyStepGoal', () => {
		expect(user.dailyStepGoal).to.equal(10000)
	})

	it.skip('should be able to have friends', () => {
		expect(user.friends).to.equal([16, 4, 8])
	})

	it.skip('should return the user\'s first name', () => {
		expect(user.findFirstName()).to.equal("Luisa");
	})

})
