import { userDataForDate, weeklyData } from "./helperFunctions";

class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  calcAvgSleepPerDay(id) {
    const result = this.sleepData
      .filter((sleepLog) => sleepLog.userID === id)
      .reduce(
        (total, sleepLog, _, arr) => total + sleepLog.hoursSlept / arr.length,
        0
      );
    return +result.toFixed(1);
  }

  calcAvgSleepQualityPerDay(id) {
    const result = this.sleepData
      .filter((sleepLog) => sleepLog.userID === id)
      .reduce(
        (total, sleepLog, _, arr) => total + sleepLog.sleepQuality / arr.length,
        0
      );
    return +result.toFixed(1);
  }

  returnHoursSleptByDate(id, date) {
    return userDataForDate(this.sleepData, id, date).hoursSlept;
  }

  returnSleepQualityByDate(id, date) {
    return userDataForDate(this.sleepData, id, date).sleepQuality;
  }

  returnHoursSleptByWeek(id, date) {
    return weeklyData(this.sleepData, "hoursSlept", "Hours Slept", id, date);
  }

  returnSleepQualityByWeek(id, date) {
    return weeklyData(
      this.sleepData,
      "sleepQuality",
      "Sleep Quality",
      id,
      date
    );
  }

  returnAvgSleepQualityForAllUsers() {
    const result = this.sleepData.reduce(
      (total, sleepLog, _, arr) => total + sleepLog.sleepQuality / arr.length,
      0
    );
    return +result.toFixed(1);
  }
}

export default Sleep;
