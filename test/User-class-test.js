const chai = require('chai');
var assert = require('chai').assert;
const expect = chai.expect;

const User = require('../src/User-class');
const userData = require('../data/users');

describe('User', () => {

	let user;

	beforeEach(() => {
		user = new User(userData[0]);
	})

	it('should be a function', () => {
    expect(User).to.be.a('function');
  })

	it('should be an instance of User', () => {
			expect(user).to.be.an.instanceof(User);
	})

	it('should hold the accurate user id', () => {
		expect(user.id).to.equal(1);
	})

	it('should hold the accurate user name', () => {
		expect(user.name).to.equal('Luisa Hane');
	})

	it('should hold the accurate user address', () => {
		expect(user.address).to.equal('15195 Nakia Tunnel, Erdmanport VA 19901-1697');
	})

	it('should hold the accurate user email', () => {
		expect(user.email).to.equal('Diana.Hayes1@hotmail.com');
	})

	it('should hold the accurate user stride length', () => {
		expect(user.strideLength).to.equal(4.3);
	})

	it('should hold the accurate daily step goal', () => {
		expect(user.dailyStepGoal).to.equal(10000);
	})

	it('should hold the accurate list of user friends', () => {
		expect(user.friends).to.deep.equal([16, 4, 8]);
	})

	it('should require an argument to create a new User', () => {
		expect(() => { new User() }).to.not.throw(Error);
	})

	it('if no argument given for new User, id property is undefined', () => {
		let badUser = new User();

		expect(badUser.id).to.equal(undefined);
	})

	it('if no argument given for new User, name property is undefined', () => {
		let badUser = new User();

		expect(badUser.name).to.equal(undefined);
	})

	it('if no argument given for new User, address property is undefined', () => {
		let badUser = new User();

		expect(badUser.address).to.equal(undefined);
	})

	it('if no argument given for new User, email property is undefined', () => {
		let badUser = new User();

		expect(badUser.email).to.equal(undefined);
	})

	it('if no argument given for new User, strideLength property is undefined', () => {
		let badUser = new User();

		expect(badUser.strideLength).to.equal(undefined);
	})

	it('if no argument given for new User, dailyStepGoal property is undefined', () => {
		let badUser = new User();

		expect(badUser.dailyStepGoal).to.equal(undefined);
	})

	it('if no argument given for new User, friends property is undefined', () => {
		let badUser = new User();

		expect(badUser.friends).to.equal(undefined);
	})

	it('should return users first name when findName is invoked', () => {
		const foundName = user.findName();

		expect(foundName).to.equal('Luisa');
	})
})