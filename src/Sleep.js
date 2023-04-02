class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  findAvgHours(userParam) {
    let totalSleep = 0;
    let days = 0;
    this.sleepData.forEach((record) => {
      if (record.userID === userParam.id) {
        totalSleep = (totalSleep + record.hoursSlept);
        days = (days + 1);
      }
    })
    this.avgHours = (totalSleep / days).toFixed(2);
    return this.avgHours;
  };

  findAvgQuality(userParam) {
    let totalQuality = 0;
    let days = 0;
    this.sleepData.forEach((record) => {
      if (record.userID === userParam.id) {
        totalQuality = (totalQuality + record.sleepQuality);
        days = (days + 1);
      }
    })
    this.avgQuality = (totalQuality / days).toFixed(2);
    return this.avgQuality;
  };

  findDailyHours(userParam, dateParam) {
    let recordObject = this.sleepData.filter(record => record.userID === userParam.id && record.date === dateParam);
    return recordObject[0].hoursSlept
  };

  findDailyQuality(userParam, dateParam) {
    let recordObject = this.sleepData.filter(record => record.userID === userParam.id && record.date === dateParam);
    return recordObject[0].sleepQuality;
  };

  findWeeklyHours(userParam, dateParam) {
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    const hoursArray = sliceWeekArray.reduce((acc, cV) => {
      acc[cV.date] = cV.hoursSlept
      return acc
    }, [])
    return hoursArray
  };

  chartWeeklyHours(userParam, dateParam) {
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    }).map(data => data.hoursSlept)
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    return sliceWeekArray
  };

  findWeeklyQuality(userParam, dateParam) {
    let weekArray = this.sleepData.filter(record => record.userID === userParam.id && record.date <= dateParam);
    const sortWeekArray = weekArray.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    const sliceWeekArray = sortWeekArray.slice(0, 7)
    const qualityArray = sliceWeekArray.reduce((acc, cV) => {
      acc[cV.date] = cV.sleepQuality
      return acc;
    }, [])
    return qualityArray
  }
}

export default Sleep;