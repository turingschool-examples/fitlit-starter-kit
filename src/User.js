// import UserRepository from './UserRepository'
class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.totalStepsThisWeek = 0;
    this.friends = userData.friends;
  }

  returnFirstName() {
    let splitName = currentUser.name.split(" ");
    console.log(splitName)
    return splitName[0];
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}
