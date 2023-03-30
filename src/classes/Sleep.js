const dayjs = require("dayjs");

class Sleep {
  constructor(sleepData) {
    this.data = sleepData;
  }

  calculateAverageSleepHours(userID) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    let totalSleepHours = userSleepData.reduce((acc, user) => {
      acc += user.hoursSlept;
      return acc;
    }, 0);
    return Number((totalSleepHours / userSleepData.length).toFixed(2));
  }

  calculateAverageSleepQuality(userID) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    let totalSleepQuality = userSleepData.reduce((acc, user) => {
      acc += user.sleepQuality;
      return acc;
    }, 0);
    return Number((totalSleepQuality / userSleepData.length).toFixed(2));
  }

  findSleepHoursOnDate(userID, date) {
    let userSleepData = this.data.filter((user) => user.userID === userID);
    let sleepHours = userSleepData.find((user) => user.date === date);
    return sleepHours.hoursSlept;
  }

  findSleepQualityOnDate(userID, date) {
    let filteredSleepData = this.data.filter((user) => user.userID === userID);
    let sleepQuality = filteredSleepData.find((user) => user.date === date);
    return sleepQuality.sleepQuality;
  }
  calculateWeeklySleepObject(userID, date) {
    const startDate = dayjs(date);
    const endDate = startDate.add(6, "day");
    const filteredSleepData = this.data.filter(
      (user) => user.userID === userID
    );
    const sleepData = filteredSleepData.filter((entry) => {
      return (
        dayjs(entry.date).isAfter(startDate) &&
        dayjs(entry.date).isBefore(endDate.add(1, "day"))
      );
    });
    return sleepData;
  }
}

export default Sleep;
