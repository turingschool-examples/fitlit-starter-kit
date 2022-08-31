class UserRepository {
    constructor(data) {
        this.data = data
        //this.currentUser
        //this.averageStepGoal
    }

    findUsersData(idNum) {
      const chosenUser = this.data.find(user => {
        return user.id === idNum;
      });
      return chosenUser;
    };

    avgStepGoal() {
        const stepGoals = this.data.map(steps => {
            return steps.dailyStepGoal;
        });
        const stepGoalSum = stepGoals.reduce((previousSteps, currentSteps) => {
          return previousSteps + currentSteps;
        }, 0);
        return stepGoalSum / stepGoals.length;
    };
}

export default UserRepository;
