class UserRepository {
  constructor(usersData, healthData) {
    this.users = usersData;
    this.data = healthData;
  };

  getUserData(userID) {
    const getUser = this.users.find(user => user.id === userID);

    return getUser;
  };

  getAverageStepGoal() {
    const goalAverage = this.users.reduce((goalsTotal, user) => {
        return goalsTotal += user.dailyStepGoal;
      }, 0);

    return Math.round(goalAverage / this.users.length);
  };

  getAllUsersAverages(type, date) {
    const typeData = this.data.filter(data => data.date === date);
    const typeTotal = typeData.reduce((sum, data) => {
      sum += data[type];
      return sum;
    }, 0);

    return Math.round(typeTotal / typeData.length);
  }; 
};

export default UserRepository;