const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User-class');
const userData = require('../data/users');

describe('UserRepository', () => {

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

	it('should be a function', () => {
			expect(UserRepository).to.be.a('function');
	})

	it('should be an instance of UserRepository', () => {
			expect(userRepository).to.be.an.instanceof(UserRepository);
		});

	it('should have data from the user', () => {
			expect(userData).to.equal(userData);
    })
    
    it('should be undefined if no arguement is given for the user', () => {
            let noUser = new UserRepository()
            expect(noUser.data).to.equal(undefined);
    })

	it('should be able to get data by the user id', () => {
			let getData = userRepository.getDataById(2)
			expect(getData).to.equal(user2)
    })
    
    it('should be undefined if no id is provided for the data', () => {
            let getData = userRepository.getDataById()
            expect(getData).to.equal(undefined)
    })

	it('should be able to get average step goal for user', () => {
            let getSteps = userRepository.fetchAverageStepGoal(2)
			expect(getSteps).to.equal(6667)
    })
});