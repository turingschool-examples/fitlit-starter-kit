import userData from './data/users.js'

class UserRepository {
    constructor(data) {
        this.users = data;
    }
    getUserById(num) {
        const correctUser = this.users.find(user => user.id === num)
        return correctUser;
    };

    getAverageSteps() {
        const dailyStepGoalTotal = this.users.reduce((steps, currentUser) => {
            steps += currentUser.dailyStepGoal
            return steps
        }, 0);
        return dailyStepGoalTotal / this.users.length;
    };
}

export default UserRepository;