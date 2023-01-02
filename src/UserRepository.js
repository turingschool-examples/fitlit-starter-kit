class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  getUserData(id) {
    return this.userData.find((user) => user.id === id);
  }

  getFriendData(friendIDs) {
    return this.userData
    .reduce((acc, curr) => {
      if(friendIDs.includes(curr.id)) {
        if(acc) {
        return acc + ', ' + curr.getFirstName()
        } else {
        return acc + curr.getFirstName()
      }
      }
      return acc
    }, '')
  }

  calculateAverageStepGoal() {
    return this.userData.reduce((stepAvg, user) => {
      const result = stepAvg + user.dailyStepGoal / this.userData.length;
      return +result.toFixed(2);
    }, 0);
  }
}

export default UserRepository;
