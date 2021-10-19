class UserRepository {
  constructor(userData){
    this.users = userData;
  }

  showData(id){
    return this.users.find((user) => {return user.id === id})
  }

  calculateAvgStepGoal(){
    const average = this.users.reduce((avgGoal, user) => {
      return avgGoal += user.dailyStepGoal / this.users.length
    }, 0);

    return Number(average.toFixed(2))
  }

}

export default UserRepository;
