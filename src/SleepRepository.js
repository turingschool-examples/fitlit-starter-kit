class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getSleepById(id) {
    return this.sleepData.filter(sleep => sleep.userID === id);
  }

  calculateAvgSleepStatPerDay(id, stat) {
    let userSleepData = this.getSleepById(id);
    let totalStatSum = userSleepData.reduce((sum, sleep) => {
      sum += sleep[stat];
      return sum;
    }, 0);
    let roundedStatNum = parseInt((totalStatSum / userSleepData.length).toFixed(1));
    return roundedStatNum;
  }

  getSleepStatByDate(id, date, stat) {
    let userSleepData = this.getSleepById(id);
    let hoursByDate = userSleepData.find(sleep => sleep.date === date);
    return hoursByDate[stat];
  }

  getSleepStatsByWeek(id, date, stat) {
    let userSleepData = this.getSleepById(id);
    let sleepDates = userSleepData.map(sleep => sleep.date);
    let indexOfDate = sleepDates.indexOf(date);
    let sleepByDate = userSleepData.slice(indexOfDate, indexOfDate + 7);
    return sleepByDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep[stat];
      return obj;
    }, {});
  }

  getAvgSleepQualityForUsers() {
    let avgQuality = this.sleepData.reduce((sum, sleep) => {
      sum += sleep.sleepQuality;
      return sum;
    }, 0);
    let roundedAvg = Math.round(avgQuality / this.sleepData.length)
    return roundedAvg;
  }

  findUserIDs() {
    let result = this.sleepData.reduce((arr, sleep) => {
      if (!arr.includes(sleep.userID)) {
        arr.push(sleep.userID);
      }
      return arr;
    }, [])
    // console.log(result)
    return result;
  }


  getDates(date) {
    let sleepDates = this.sleepData.map(sleep => sleep.date);
    let indexOfDate = sleepDates.indexOf(date);
    let userLength = this.findUserIDs().length;
    let sleepByDate = this.sleepData.slice(indexOfDate, indexOfDate + (7 * userLength));
    let result = sleepByDate.reduce((obj, sleep) => {
      if (!obj[sleep.userID]) {
        obj[sleep.userID] = 0;
      }
      obj[sleep.userID] += (sleep.sleepQuality) / 7;
      return obj;
    }, {});
    // let values = Object.values(result)
    // // console.log(values)
    // let keys = Object.keys(result)
    // // console.log(keys)
    // let entries = Object.entries(result)
    // // console.log(entries)
    // let test = entries.reduce((arr, entry) => {
    //   // console.log(entry)
    //   entry.map(e => {
    //     if (e[1] >= 3) {
    //       // console.log(e[0])
    //       console.log(e[1])
    //       arr.push(e)
    //     }
    //   })
    //   return arr;
    // }, [])
    // // console.log(result)
    // // console.log(test)
    // return test;
    console.log(result)
    return result;

  }

  // test() {
  //   let values = Object.values(getDates())
  //   console.log(value)
  //   let
  // }

}
  //iterate over this.sleepData
  //

export default SleepRepo;
