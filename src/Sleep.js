class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  getUserData(id) {
    return this.sleepData.filter(obj => {
      return obj.userID === id;
    });
  }

  calculateAverageHours(id) {
    let totalHours = this.getUserData(id).reduce((acc, object) => acc += object.hoursSlept, 0);
    return +(totalHours / this.getUserData(id).length).toFixed(1);
  }

  calculateAverageQuality(id) {
    return this.getUserData(id).reduce((acc, object) => {
      return Math.round(acc += object.sleepQuality / this.getUserData(id).length);
    }, 0);
  }

  getDayHours(id, date) {
    return this.getUserData(id).find(day => day.date === date).hoursSlept;
  }

  getDayQuality(id, date) {
    return this.getUserData(id).find(day => day.date === date).sleepQuality;
  }

  getHoursByWeek(id, date) {
    let endDate = this.getUserData(id).findIndex(object => object.date === date);
    let filteredData = this.getUserData(id).map(day => day.hoursSlept);
    return endDate - 6 >= 0 ?
      filteredData.slice(endDate - 6, endDate + 1) :
      filteredData.slice(0, endDate + 1);
  }

  getQualityByWeek(id, date) {
    let endDate = this.getUserData(id).findIndex(object => object.date === date);
    let filteredData = this.getUserData(id).map(day => day.sleepQuality);
    return endDate - 6 >= 0 ?
      filteredData.slice(endDate - 6, endDate + 1) :
      filteredData.slice(0, endDate + 1);
  }

  getAverageQualityOfUsers() {
    const total = this.sleepData.reduce((acc, object) =>  acc + object.sleepQuality, 0);
    return (total / this.sleepData.length).toFixed(2);
  }

  findGoodSleepers(date) {
    let userIDs = [...new Set(this.sleepData.map(object => object.userID))];
    return userIDs.filter(user => this.getQualityByWeek(user, date) >= 3);
  }

  findLongestSleeper(date) {
    let longestSleepers = []
    let dayData = this.sleepData.filter(day => day.date === date);
    let sortedData = dayData.sort((hoursHigh, hoursLow) => hoursHigh - hoursLow)
    longestSleepers.push(sortedData[0].userID)
    sortedData.forEach(user => {
      if (user.hoursSlept === sortedData[0].hoursSlept && user !==sortedData[0]) {
        longestSleepers.push(user.userID);
      }
    })
    return longestSleepers
  }

  findMostSleepHours(id, date) {
    let weekData = this.getHoursByWeek(id, date);
    let sortedData = weekData.sort((dayA, dayB) => dayB - dayA);
    return sortedData[0]
  }
}






if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
