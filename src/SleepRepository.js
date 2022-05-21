class SleepRepository {
  constructor(data) {
    this.sleepData = data;
  }

  getSleepDataForUser(idNum) {
    const sleepDataForUser = this.sleepData.filter((obj) => {
      if (obj.userID === idNum) {
        return obj;
      }
    });
    return sleepDataForUser;
  }

  getAverageSleepQualityForAll(idNum) {
    const averageSleeps = this.getSleepDataForUser(idNum);
    let averageUserSleepQualityForAll = averageSleeps.reduce((acc, cur) => {
      acc += cur.sleepQuality;
      return acc;
    }, 0);
    return averageUserSleepQualityForAll / averageSleeps.length;
  }

  getAverageSleepHours(idNum) {
    const sleepDataForUser = this.getSleepDataForUser(idNum);
    let averageUserSleepHours = sleepDataForUser.reduce((acc, cur) => {
      acc += cur.hoursSlept;
      return acc;
    }, 0);
    return averageUserSleepHours / sleepDataForUser.length;
  }
  
  getSleepHoursByDay(date) {
    const sleepHoursDay = this.sleepData.find((element) => {
      if (element.date === date) {
        return element;
      }
    });
    return sleepHoursDay.hoursSlept;
  }
}

export default SleepRepository;
