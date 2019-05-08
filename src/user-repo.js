
const userData = require('../data/sample-users.js');
const User = require('../src/user.js')

class UserRepository {
	constructor(dataFilePath) {
		this.dataFilePath = dataFilePath;
		this.userData = require(dataFilePath);
	}

	findUserData(userId) {
		const user = new User(userData);
		return user.userData.find(id => id.id === userId) ? userData.user : null;
	}
  
}






module.exports = UserRepository;