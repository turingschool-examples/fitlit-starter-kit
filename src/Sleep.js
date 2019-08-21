class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  findCurrentUserData(userID) {
    return this.sleepData.filter((currentElement) => {
      return currentElement.userID === userID;
    });
  }

  returnAverageSleep(userID) {
    let userSleepData = this.findCurrentUserData(userID);
    let totalSleep = userSleepData.reduce((acc, element) => {
      acc += element.hoursSlept;
      return acc;
    }, 0);
    return totalSleep / userSleepData.length
  }

  returnAverageSleepQuality(userID) {
    let userSleepData = this.findCurrentUserData(userID);
    let totalSleep = userSleepData.reduce((acc, element) => {
      acc += element.sleepQuality;
      return acc;
    }, 0);
    return totalSleep / userSleepData.length
  }

  returnAmountSlept(userID, date) {
    let userSleepData = this.findCurrentUserData(userID);
    return userSleepData.find((element) => {
      return element.date === date
    }).hoursSlept
  }

  returnSleepQuality(userID, date) {
    let userSleepData = this.findCurrentUserData(userID);
    return userSleepData.find((element) => {
      return element.date === date
    }).sleepQuality
  }

  returnSleepByWeek(userID, date) {
    let userSleepData = this.findCurrentUserData(userID);
    let startDay = userSleepData.findIndex((element) => {
      return element.date === date;
    });
    return userSleepData.map(sleepObj => { 
      return sleepObj.hoursSlept
    }).splice(startDay, 7);
  }

  returnSleepQualityByWeek(userID, date) {
    let userSleepData = this.findCurrentUserData(userID);
    let startDay = userSleepData.findIndex((element) => {
      return element.date === date;
    });
    return userSleepData.map(sleepObj => {
      return sleepObj.sleepQuality
    }).splice(startDay, 7);
  }

  returnAllUsersAverageSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce((acc, element) => {
      acc += element.sleepQuality;
      return acc;
    }, 0);
    console.log(totalSleepQuality);
    return parseFloat((totalSleepQuality / this.sleepData.length).toFixed(1));
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}