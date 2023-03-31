class User {
  constructor(users) {
    this.users = users;
  };
  
  getUserData(userId) {
    return this.users.find(user => user.id === userId)
  }

  getAverageStepGoal() {
    const avgStepGoal = this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal
      return acc
    }, 0)
    return Math.round(avgStepGoal/this.users.length)
  }

  getUserFirstName(userID) {
    const currentUser = this.users.find(user => user.id === userID);
    
    return currentUser.name.split(" ")[0]
  }
};

export default User;