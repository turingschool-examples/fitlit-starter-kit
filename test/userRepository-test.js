import { assert, expect } from 'chai';

const UserRepository = require('../src/userRepository.js');

describe('UserRepository', => {
	it('should be a function', => {
		const userRepository = new UserRepository();
		expect(UserRepository).to.be.a('function');
	});
});
