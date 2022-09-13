class Sleep {
  constructor(userId, sleepData) {
    this.sleepDataPerUser = sleepData.filter(data => data.userID === userId);
    this.sleepData = sleepData;
  };

  getSleepDataByGivenDay(date, type) {
    const dailySleep = this.sleepDataPerUser.reduce((acc, data) => {
      if (data.date === date) {
        acc = data[type];
      };

      return acc;
    }, 0);

    return dailySleep;
  };

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
      };

      return acc;
    }, 0);
    
    return Math.round(sum / dataSet.length);
  };

  getDailySleepByWeek(type, minDate, maxDate) {
    const start = this.sleepDataPerUser.findIndex(data => data.date === minDate); 
    const end = this.sleepDataPerUser.findIndex(data => data.date === maxDate);
    const week = this.sleepDataPerUser.slice(start, end + 1);
    const sleepPerDay = week.map(data => data[type]);

    return sleepPerDay;
  };  
};

export default Sleep;