import mock from '../src/data/mock';

class Sleep {
  constructor(id) {
    this.avgHours = 0;
    this.avgQuality = 0;
    this.dailyHours = 0;
    this.dailyQuality = 0;
    // this.weeklyHours = 0;
    // this.weeklyQuality = 0;
    this.sleepID = id;
  } 

  findAvgHours()  {
    let totalSleep = 0;
    let days = 0;
    mock.sleepData.forEach((record)  =>  {
      if (record.userID === this.sleepID)  {
        totalSleep = (totalSleep + record.hoursSlept);
        days = (days + 1);
      }
    })
    this.avgHours = (totalSleep / days).toFixed(2);
    return this.avgHours;
  }

  findAvgQuality()  {
    let totalQuality = 0;
    let days = 0;
    mock.sleepData.forEach((record) =>  {
      if(record.userID === this.sleepID) {
        totalQuality = (totalQuality + record.sleepQuality);
        days = (days +1);
      }
    })
    this.avgQuality = (totalQuality / days).toFixed(2);
    return this.avgQuality;
  }

  findDailyHours(dateParam) {
    let recordObject = mock.sleepData.filter(record  =>  record.userID === this.sleepID && record.date === dateParam);
    this.dailyHours = (recordObject[0].hoursSlept)
    return this.dailyHours
  }

  findDailyQuality(dateParam) {
    let recordObject = mock.sleepData.filter(record  =>  record.userID === this.sleepID && record.date === dateParam);
    this.dailyQuality= (recordObject[0].sleepQuality)
    return this.dailyQuality 
  }
}









export default Sleep;