class UserRepository {
    constructor(data) {
        this.data = data;
    }

getDataById(id) {
    return this.data.find(user => user.id === id);
}

fetchAverageStepGoal() {
    return Math.round(this.data.reduce((total, user) => total += user.dailyStepGoal, 0) / this.data.length)
    // let average = this.data.reduce((acc, user) => {
    //     acc += user.dailyStepGoal
    //     return acc;
    // }, 0)
    // return Math.round(average / this.data.length)
  }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }