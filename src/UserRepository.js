class UserRepository {
  constructor (dataFilePath) {
    this.dataFilePath = dataFilePath
  }
  returnUserData(userID) {
    return this.userData.name;
  }
  averageStepGoal() {

  }
  mostCommonState(){

  }
}

module.exports = UserRepository;