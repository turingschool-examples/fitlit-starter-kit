class DataRepository {
    constructor(userData) {
        this.userData = userData
        this.users = []
    }

    calculateAverageStepGoal() {
// take the total / userData.length
    const totalDailyStepGoal = this.userData.reduce((acc, data) => {
        acc += data.dailyStepGoal
    return acc
    }, 0)
    return Math.round(totalDailyStepGoal/this.userData.length)
    }

}

   

if (typeof module !== 'undefined') {
    module.exports = DataRepository;
  }