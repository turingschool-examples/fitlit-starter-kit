class UserRepo {
  constructor(users) {
    this.users = users;
  }
  searchUsersByID(idNum) {
    return this.users.find(user => {
      return user.id === idNum
    })
  }
  calculateAverageStepGoals() {
    const totalOfStepGoals = this.users.reduce((average, user) => {
      average += user.dailyStepGoal
      return average
    }, 0)
    const averageStepGoal = Math.round(totalOfStepGoals / this.users.length)
    return averageStepGoal
  }
};

//i want to take the stepGoals of each user and average them out.
//add all counts up, then divide by the number of users, rounding down in the event of a decimal
//need to iterate through addding and reassigning the aveStepGoal var
//then divide that by this.users.length.





if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
