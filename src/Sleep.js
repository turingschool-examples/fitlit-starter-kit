import mock from '../src/data/mock';

class Sleep {
  constructor(id) {
    this.avgHours = 0;
    this.avgQuality = 0;
    this.dailyHours = 0;
    this.dailyQuality = 0;
    this.weeklyHours = 0;
    this.weeklyQuality = 0;
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
    this.dailyHours = (recordObject[0].hoursSlept);
    return this.dailyHours;
  }

  findDailyQuality(dateParam) {
    let recordObject = mock.sleepData.filter(record  =>  record.userID === this.sleepID && record.date === dateParam);
    this.dailyQuality = (recordObject[0].sleepQuality);
    return this.dailyQuality;
  }

  transformDate(dateParam)  {
    let splitDate = dateParam.split("/")
    let year = splitDate[0];
    let month;
    let day = splitDate[2];
    if (splitDate[1] >= 1 && splitDate[1] <= 11) {
      month = (splitDate[1] - 1);
    } else {
      month = (splitDate[1] + 11);
    }
    return new Date(`${year}, ${month}, ${day}`);
  }

  findWeeklyHours(dateParam)  {
    let weekEnd = this.transformDate(dateParam)
    let weekStart = new Date((weekEnd) - 604800000);
    let weekArray = mock.sleepData.filter(record => record.userID === this.sleepID && this.transformDate(record.date) <= weekEnd && this.transformDate(record.date) >= weekStart);
    let weeklyHoursData = weekArray.reduce((sleepObject, record)  =>  {
      sleepObject[record.date] = record.hoursSlept;
      return sleepObject;
    }, {})
    this.weeklyHours = weeklyHoursData;
    return this.weeklyHours;
  }

  findWeeklyQuality(dateParam)  {
    let weekEnd = this.transformDate(dateParam)
    let weekStart = new Date((weekEnd) - 604800000);
    let weekArray = mock.sleepData.filter(record => record.userID === this.sleepID && this.transformDate(record.date) <= weekEnd && this.transformDate(record.date) >= weekStart);
    let weeklyQualityData = weekArray.reduce((qualityObject, record)  =>  {
      qualityObject[record.date] = record.sleepQuality;
      return qualityObject;
    }, {})
    this.weeklyQuality = weeklyQualityData;
    return this.weeklyQuality;
  }
}


export default Sleep;