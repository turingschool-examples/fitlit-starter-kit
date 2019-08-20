class UserRepository {
    constructor(data) {
        this.data = data;
        this.user;
        this.allUserStepsAverage;
    }

    getUserData(id) {
        let userObject = this.data.find(user => user.id === id)
        this.user = userObject
        return this.user
    }

    getAllUserStepGoalAverage() {
        this.allUserStepsAverage = this.data.reduce((stepGoals, user) => {
            stepGoals += user.dailyStepGoal
            return stepGoals
        }, 0) 
        return this.allUserStepsAverage / this.data.length;
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
}