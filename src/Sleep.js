class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  calculateAverageSleepHours(userID){
    let userSleepData = this.data.filter(user => user.userID === userID);
    let totalSleepHours = userSleepData.reduce((acc, user) => {
      acc += user.hoursSlept;
      return acc;
    }, 0)
    return Number((totalSleepHours / userSleepData.length).toFixed(2));
  };

  calculateAverageSleepQuality(userID){
    let userSleepData = this.data.filter(user => user.userID === userID);
    let totalSleepQuality = userSleepData.reduce((acc, user) => {
      acc += user.sleepQuality;
      return acc;
    }, 0)
    return Number((totalSleepQuality / userSleepData.length).toFixed(2));
  };

  findSleepHoursOnDate(userID, date){
    let userSleepData = this.data.filter(user => user.userID === userID);
    let sleepHours = userSleepData.find(user => user.date === date);
    return sleepHours.hoursSlept;
  };
};

export default Sleep;