

class UserRepository {
  constructor(userData) {
    this.users = [];
    this.userData = userData;
  }

  createUsers() {
    this.userData.forEach((userDataObject, i) => {
      var user = new User(userDataObject);
      this.users.push(user);
    });
  }

  returnUserData(id) {
    let currentUserData;
    userRepository.userData.forEach((userDataObject, i) => {
      if (userDataObject.id === id) {
        currentUserData = userDataObject;
      }
    });
   return currentUserData;
  }

  returnAverageStepGoal() {
    let totalUserStepGoal = 0;
    userRepository.users.forEach((user, i) => {
      totalUserStepGoal = totalUserStepGoal + user.dailyStepGoal;
    });
    let averageStepGoal = totalUserStepGoal/userRepository.users.length;
    return Math.round(averageStepGoal);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
