class UserRepository {
  constructor(allUsers){
    this.users = allUsers;
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

  calculateAvgSleepQuality(sleepData) {
    const average = sleepData.reduce((avgSleepQuality, entry) => {
      return avgSleepQuality += entry.sleepQuality / sleepData.length
    }, 0);

    return Number(average.toFixed(2))
  }
}

export default UserRepository;
