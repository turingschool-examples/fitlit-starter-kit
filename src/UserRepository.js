class UserRepository {
  constructor(userData = []){
    this.users = userData;
  }

  showData(id){
    return this.users.find((user) => {return user.id === id})
  }

  calculateAvgStepGoal(){
  const goals = this.users.map((user) => {return user.dailyStepGoal});
  const average = goals.reduce((a,b) => a+b, 0) / goals.length;
  return Number(average.toFixed(2))
  }

}

export default UserRepository;
