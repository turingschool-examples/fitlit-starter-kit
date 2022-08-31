class Sleep {
  constructor(sleepData) {
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.hoursSlept = sleepData.hoursSlept;
    this.sleepQuality = sleepData.sleepQuality;
  }

  findUserDataID(sleepArr, id) {
    let singleSleepData = sleepArr.filter(sleepObj =>
    sleepObj.userID === id);
    return singleSleepData;
  }

  calculateAvgHrsSlept(id) {
    let userSleep = this.findUserDataID(id);
    const totalHours = this.sleepData.reduce((acc, hour) => {
       acc += this.hoursSlept;
       return acc;
    }, 0)
    return totalHours;
  }

  calculateAvgSleepQuality() {

  }

}




export default Sleep;
