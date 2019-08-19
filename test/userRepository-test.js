const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/userRepository.js');
const data = require('../data/users.js');

describe('UserRepository', function() {
	it('should be a function', function() {
		const userRepository = new UserRepository();
		expect(UserRepository).to.be.a('function');
	});
	it('should return user, when user Id is input', function() {
		const userRepository = new UserRepository(data)
		expect(userRepository.data.length).to.equal(50)
		expect(userRepository.findUser(5)).to.eql({
		  id: 5,
		  name: 'Erick Schaden',
		  address: '514 Mayert Walk, Jordaneside SC 55023-6523',
		  email: 'Vanessa_Gerhold@gmail.com',
		  strideLength: 3.1,
		  dailyStepGoal: 8000,
		  friends: [ 13, 44, 49, 33, 10 ]
		})
	});
		it('should average all users step goal', function() {
		const userRepository = new UserRepository(data)
		expect(userRepository.findAverageStep()).to.equal(6700)
	})
});
