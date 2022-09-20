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

  getDailySleepByWeek(date) {
    const start = this.sleepDataPerUser.findIndex((data) => data.date === date);
    const week = this.sleepDataPerUser
      .slice(start, start + 7)
      .map((entry) => {
        return {
          date: entry.date,
          hoursSlept: entry.hoursSlept,
          sleepQuality: entry.sleepQuality,
        };
      })
      .filter((entry) => {
        const getEachDate = entry.date.split('/');
        const chosenDate = date.split('/');

        if (
          getEachDate[0] === chosenDate[0] &&
          getEachDate[1] === chosenDate[1]
        ) {
          return entry;
        } 
      });

      return week;
  }
};

export default Sleep;
