class Sleep {
  constructor(userId, sleepData) {
    this.sleepDataPerUser = sleepData.filter(data => data.userID === userId);
    this.sleepData = sleepData;
  };

  getSleepDataByGivenDay(date, type) {
    const value = this.sleepDataPerUser.find(data => data.date === date); 

    if (value) {
      return value[type];
    } else {
      return 'This date could not be found.'
    }
  };

  getAvgSleepData(type, isCurrentUser) {
    let dataSet;

    // should check if currentUser's data set should be be used 
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

    if (start === -1 || end === -1) {
      return 'These days do not exist. Please change your selection.'
    }

    return week.map(data => data[type]);
  };  
};

export default Sleep;