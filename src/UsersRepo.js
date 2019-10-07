class UsersRepo {
  constructor(userData) {
    this.userData = userData;
  }
  getUsersById() {

  }

  avgStepGoal(userData) {
    let avg = userData.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum
    }, 0) / userData.length

    return avg
  }

}

if (typeof module !== 'undefined') {
module.exports = UsersRepo;
}