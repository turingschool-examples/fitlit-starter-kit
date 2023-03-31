import mock from '../src/data/mock';

class Sleep {
  constructor(id) {
    this.avgHours = 0;
    // this.avgQuality = 0;
    // this.dailyHours = 0;
    // this.dailyQuality = 0;
    // this.weeklyHours = 0;
    // this.weeklyQuality = 0;
    this.sleepID = id;
  } 

  findAvgHours()  {
    let totalSleep = 0;
    let days = 0;
    mock.sleepData.forEach((record)  =>  {
      if (record.userID == this.sleepID)  {
        totalSleep = (totalSleep + record.hoursSlept)
        days = (days + 1)
      }
    })
    this.avgHours= (totalSleep / days).toFixed(2);
    // console.log(this.avgHours)
    return this.avgHours
  }
}




export default Sleep;