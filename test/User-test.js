const chai = require("chai");
const expect = chai.expect;

var User = require('../src/User');

describe('User', () => {
  	let user;
  	// let userRepo;

	beforeEach(() => {
		// userRepo = new userRepo()
		user = new User(0); // what variable prefix should we be using here? 
	})

	it.only('should be a function', () => {
		expect(User).to.be.a('function');
	})

	it.only('should be an instance of User', () => {
		expect(user).to.be.a.instanceOf(User);
	})

	it.only('should be able to have a name', () => {
		expect(user.name).to.equal("Luisa Hane"); 
	})

	it.only('should be able to have a strideLength', () => {
		expect(user.strideLength).to.equal(4.3);
	})

	it.only('should be able to have an ID', () => {
		expect(user.id).to.equal(1)
	})

	it.only('should be able to have an address', () => {
		expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
	})

	it.only('should be able to have an email address', () => {
		expect(user.email).to.equal("Diana.Hayes1@hotmail.com")
	})

	it.only('should be able to have a dailyStepGoal', () => {
		expect(user.dailyStepGoal).to.equal(10000)
	})

	it.only('should be able to have friends', () => {
		expect(user.friends).to.eql([16, 4, 8])
	})

	it.only('should return the user\'s first name', () => {
		expect(user.findFirstName()).to.equal("Luisa");
	})

})
