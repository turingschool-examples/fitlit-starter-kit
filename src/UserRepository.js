class UserRepository {
    constructor(users) {
        this.users = users
    }
    getUserData(id) {
        const userInfo = this.users.find(user => {
            return id === user.id
        })
        return userInfo
    }
    getAverageStepGoal() {
        const steps = this.users.reduce((acc, element) => {
            acc += element.dailyStepGoal
            return acc
        }, 0)
        return Math.round(steps/this.users.length)
    }
}

export default UserRepository;