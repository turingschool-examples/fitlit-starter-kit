
if(typeof module !== 'undefined') {
 userData = require('../data/sample-users');
}

class UserRepository {
	constructor(dataFilePath, userId) {
    this.userData = userData;
    this.currentUser = (this.findUserData(userId));
    this.userData = (this.findFilepath(dataFilePath));
  }

  findFilepath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return userData;
    }
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
    let states = this.userData.map(element => element.address.split(' ')[element.address.split(' ').length-2]);
    let state = states.reduce(function(acc,curr) {
      if (!acc[curr]) {                 
            acc[curr] = 1;            
        } else {                      
            acc[curr] = acc[curr] + 1; 
          } 
      return acc;
   
}, {})
 return Object.entries(state).sort().shift()[0] 
                                                
}


};




if(typeof module !== 'undefined') {
	module.exports = UserRepository;
}