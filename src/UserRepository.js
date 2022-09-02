class UserRepository {
  constructor(usersData) {
    this.users = usersData;
  };

  returnUserData(userID) {
    const getUser = this.users
      .find(user => user.id === userID);
    return getUser;
  };

  returnAverageStepGoal() {
    const goalAverage = this.users
      .reduce((goalsTotal, user) => {
        return goalsTotal += user.dailyStepGoal
      }, 0);
    return Math.round(goalAverage / this.users.length);
  }; 
};

export default UserRepository;