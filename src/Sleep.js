class Sleep {
  constructor(userId, sleepData) {
    this.sleepDataPerUser = sleepData.filter((data) => data.userID === userId);
    this.sleepData = sleepData;
  }

  getSleepDataByGivenDay(date, type) {
    const value = this.sleepDataPerUser.find((data) => data.date === date);

    if (value) {
      return value[type];
    } else {
      return 'This date could not be found.';
    }
  }

  getAvgSleepData(type, isCurrentUser) {
    let dataSet;

    if (isCurrentUser) {
      dataSet = this.sleepDataPerUser;
    } else {
      dataSet = this.sleepData;
    }

    const sum = dataSet.reduce((acc, data) => {
      if (data[type]) {
        acc += data[type];
      }

      return acc;
    }, 0);

    return Math.round(sum / dataSet.length);
  }

  getDailySleepByWeek(type, minDate) {
    const start = this.sleepDataPerUser.findIndex(
      (data) => data.date === minDate
    );

    const week = this.sleepDataPerUser.slice(start, start + 7);

    if (start === -1) {
      return 'These days do not exist. Please change your selection.';
    }

    return week.map((data) => data[type]);
  }
}

export default Sleep;
