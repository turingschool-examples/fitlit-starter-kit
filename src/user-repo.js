
const userData = require('../data/sample-users.js');
const User = require('../src/user.js')

class UserRepository {
	constructor(dataFilePath) {
		this.dataFilePath = dataFilePath;
    this.userData = require(dataFilePath);
  }

	findUserData(userId) {
    let currentUser = this.userData.find(function(element){
    return element.id === userId 
    })
    return currentUser; 
    }

  averageStepGoal(){
    let goals = this.userData.map(element => element.dailyStepGoal);
    let goal = Math.ceil(goals.reduce((acc,curr)=> acc + curr,0)/goals.length);
    return goal;
  }



};




module.exports = UserRepository;