const allSleepQualityAvg = [];

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
    // let sleepByDate = userSleepData.slice(indexOfDate, indexOfDate + 7);
    let sleepByDate = userSleepData.slice(indexOfDate - 6, indexOfDate + 1)
    // console.log('pickle', sleepByDate)
    let result = sleepByDate.reduce((obj, sleep) => {
      obj[sleep.date] = sleep[stat];
      return obj;
    }, {});
    // console.log('pickle', result)
    return result;
  }

  getAvgSleepQualityForUsers() {
    let avgQuality = this.sleepData.reduce((sum, sleep) => {
      sum += sleep.sleepQuality;
      return sum;
    }, 0);
    let roundedAvg = Math.round(avgQuality / this.sleepData.length);
    return roundedAvg;
  }

  // **DO NOT NEED THESE METHODS AS THEY ARE NOT USED FOR DOM UPDATES**

  // findUserIDs() {
  //   let result = this.sleepData.reduce((arr, sleep) => {
  //     if (!arr.includes(sleep.userID)) {
  //       arr.push(sleep.userID);
  //     }
  //     return arr;
  //   }, [])
  //   return result;
  // }

  // getDates(date, id) {
  //   let sleepDates = this.sleepData.map(sleep => sleep.date); // array of all dates
  //   let indexOfDate = sleepDates.indexOf(date); // index of date passed in as argument
  //   let userLength = this.findUserIDs().length; // finding users array length
  //   let sleepByDate = this.sleepData.slice(indexOfDate, indexOfDate + (7 * userLength)); // array of week dates for all users
  //   let weekDates = sleepByDate.map(sleep => sleep.date)
  //   let singleUserWeek = sleepByDate.filter(user => user.userID === id)
  //   let avgQuality = singleUserWeek.reduce((sum, sleepObj) => {
  //     sum += sleepObj.sleepQuality;
  //     return sum;
  //   }, 0) / 7;
  //   let userSleepQualityAvg = { id: id, averageQuality: avgQuality };
  //   allSleepQualityAvg.push(userSleepQualityAvg)
  // }
  //
  // getSleepQualityOver3(id) {
  //   return allSleepQualityAvg.filter(avg => avg.averageQuality > 3);
  // }

}

export default SleepRepo;
