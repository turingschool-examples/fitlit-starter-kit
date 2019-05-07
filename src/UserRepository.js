class UserRepository {
  constructor (dataFilePath) {
    this.dataFilePath = dataFilePath,
    this.userData = require(dataFilePath);
  }
  returnUserData(userID) {
    var found = this.userData.find(function(element) {
      return element.id === userID;
    }); 
    return (found);
  }
  averageStepGoal() {

  }
  mostCommonState(){

  }
}

module.exports = UserRepository;