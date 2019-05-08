
const userData = require('../data/sample-users.js');
const User = require('../src/user.js')

class UserRepository {
	constructor(dataFilePath) {
		this.dataFilePath = dataFilePath;
		this.userData = require(dataFilePath);
	}
  
}






module.exports = UserRepository;