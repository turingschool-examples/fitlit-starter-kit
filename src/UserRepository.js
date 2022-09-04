class UserRepository {
 constructor(users) {
  this.users = users;
 }

  findUserData(id) {
    const findUserData = this.users.find(user => id === user.id)
    return findUserData
  }

  calculateAvgStepGoal() {
    const stepGoal = this.users.reduce((acc, element) => {
      acc += element.dailyStepGoal
      return acc
    }, 0)
    return Math.round(stepGoal / this.users.length)
  }
}

export default UserRepository;
