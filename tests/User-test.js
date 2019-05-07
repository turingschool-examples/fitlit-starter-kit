const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

// create test data files for each data set to be used in testing


describe('User', function() {
	const userData = {
    "id": 1,
    "name": "Nyasia Weber",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Jordane_Schultz@yahoo.com",
    "strideLength": 4.7,
    "dailyStepGoal": 8000
  }

	it('Should be a function', function() {
		expect(User).to.be.a('function');
	});

	it('Should be an instance of the User class', function() {
		const user = new User(userData);
		expect(user).to.be.an.instanceOf(User);
	});

	// Test for each property individually

	it('Should return a user\'s first name', function() {
		// create new instance of User(userData)
		const user = new User(userData)
		// user.name.split(' ')[0] should equal 'Nyasia'
		expect(user.name.split(' ')[0]).to.equal('Nyasia')
	})
});