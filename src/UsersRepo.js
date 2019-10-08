class UsersRepo {
  constructor(userData) {
    this.userData = userData;
  }

  getUserById(id) {
    let user = this.userData.filter(user => {
      return user.id === id;
    })
    return user[0]
  }

  avgStepGoal() {
    let avg = this.userData.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum
    }, 0) / this.userData.length

    return avg
  }

}

if (typeof module !== 'undefined') {
module.exports = UsersRepo;
}
