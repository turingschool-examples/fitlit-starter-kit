class UserRepository {
    constructor(users = []) {
        this.users = users;
    }
    avgStepGoal() {
        const stepGoal = this.users.reduce((sum, user) => {
            return sum += user.dailyStepGoal
        },0)
        return Math.round(stepGoal / this.users.length);
    }
}

export default UserRepository;