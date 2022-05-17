class SleepRepository {
  constructor(sleepData){
    this.dataObjects = sleepData;
  }
  getUserData(userId) {
    const foundData = this.dataObjects.find(user => user.userID === userId);
      return foundData;
  }
  calculateAvgHoursSlept() {
    const allUsersHoursSleptSum = this.dataObjects.reduce((totalHours, object) => {
      totalHours += object.hoursSlept
      return totalHours
    }, 0)
    return Math.round(allUsersHoursSleptSum / this.dataObjects.length)
  }
}


export default SleepRepository;
