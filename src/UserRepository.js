

class UserRepository {
  constructor(userData) {
    this.users = [];
    this.userData = userData;
  }

  createUsers() {
    userRepository.userData.forEach((userDataObject, i) => {
      var user = new User(userRepository.userData[i]);
      userRepository.users.push(user);
    });
  }

  returnUserData(id) {
    let currentUserData;
    userRepository.userData.forEach((userDataObject, i) => {
      if (userRepository.userData[i].id === id) {
        currentUserData = userRepository.userData[i];
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
