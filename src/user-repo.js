
const userData = require('../data/sample-users');
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

  findAverageStepGoal(){
    let goals = this.userData.map(element => element.dailyStepGoal);
    let goal = Math.ceil(goals.reduce((acc,curr)=> acc + curr,0)/goals.length);
    return goal;
  }

  findMostCommonState() {
    let states = userData.map(element => element.address.split(' ')[element.address.split(' ').length-2]);
    //gets array state abbreviations
    let state = states.reduce(function(acc,curr) {
      if (!acc[curr]) {                  //if object[abb] doesn't exist
            acc[curr] = 1;             //set object[abb] value to 1
        } else {                      //if does exist
            acc[curr] = acc[curr] + 1; //increment existing value by 1
          } 
      return acc;
   
}, {})
 return Object.entries(state).sort().shift()[0] //get an array of the key:value pairs
                                                //sort the array and unshift the largest
}


};




if(typeof module !== 'undefined') {
	module.exports = UserRepository;
}