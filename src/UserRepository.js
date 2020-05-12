class UserRepository {
    constructor(data) {
        this.data = data;
    }

getDataById(id) {
    return this.data.find(user => user.id === id);
}

fetchAverageStepGoal() {
    let average = this.data.reduce((acc, user) => {
        acc += user.dailyStepGoal
        return acc;
    }, 0)
    return (average / this.data.length)
  }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
  }