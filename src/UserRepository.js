class UserRepository {
    constructor(oneUserData, allUserData, hydrationData, sleepData) {
        this.selectedUser = oneUserData
        this.userData = allUserData
        this.hydrationData = hydrationData
        this.sleepData = sleepData
    }
    findUserId() {
        return this.selectedUser.id
    }
    averageSteps() {
        let total = 0
        this.userData.forEach(user =>
            total += user.dailyStepGoal
        )
        let averageSteps = total / this.userData.length
        return averageSteps
    }
}

export default UserRepository;