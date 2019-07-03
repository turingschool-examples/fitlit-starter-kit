class UserRepository {
  constructor(data) {
    this.data = data;
    
  }

  returnUser(id) {
    return this.data.find(user => user.id === id);
  } 

  returnAvgStepGoal() {
    return this.data.reduce((sum, currentUser) => {
      return sum += currentUser.dailyStepGoal
    }, 0) / this.data.length;
  } 
}

if (typeof module !== 'undefined') {
    module.exports = UserRepository;
}