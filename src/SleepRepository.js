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
        let averageUserSleepHours = averageSleeps.reduce((acc, cur) => {
          acc += cur.sleepQuality;
          return acc;
        }, 0);
    return averageUserSleepHours / averageSleeps.length;
  }
  
//   getAverageSleepHours(idNum) {
//     const sleepDataForUser = this.getSleepDataForUser(idNum);
//     let averageUserSleepHours = sleepDataForUser.reduce((acc, cur) => {
//       acc += cur.hoursSlept;
//       return acc;
//     }, 0);
//     return averageUserSleepHours / sleepDataForUser.length;
//   }
}

export default SleepRepository;
