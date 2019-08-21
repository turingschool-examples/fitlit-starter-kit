class UserRepository {
  constructor(data) {
    this.users = data;
  }

  getUser = (id) => {
    return this.users.find(obj => {
      return obj.id === id
    });
  }

  returnAvgStepGoal() {
    // console.log(this.users)
    return this.users.map(obj => obj.dailyStepGoal).reduce((acc, num) => {
      return acc + num
    }, 0) / this.users.length
  }
  
}


// module.exports = UserRepository;
if (typeof module !== "undefined") {
  module.exports = UserRepository;
}
