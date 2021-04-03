

class UserRepository {
  constructor(userData) {
    this.userData = userData;
    this.users = this.createUsers();
    this.currentUser = this.selectCurrentUser();
  }

  selectCurrentUser() {
    const randomIndex = Math.floor(Math.random() * this.users.length);
    return this.users[randomIndex];
  }

  createUsers() {
    const createdUsers = [];
    this.userData.forEach((userDataObject, i) => {
      var user = new User(userDataObject);
      createdUsers.push(user);
    });
    return createdUsers;
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
