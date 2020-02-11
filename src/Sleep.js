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
    let totalHours = this.getUserData(id).reduce((acc, object) => acc += object.sleepQuality, 0);
    return +(totalHours / this.getUserData(id).length).toFixed(1);
  }

  getDayHours(id, date) {
    return this.getUserData(id).find(day => day.date === date).hoursSlept;
  }

  getDayQuality(id, date) {
    return this.getUserData(id).find(day => day.date === date).sleepQuality;
  }

  getWeekData(id, date) {
    let endDate = this.getUserData(id).findIndex(object => object.date === date);
    return endDate - 6 >= 0 ?
      this.getUserData(id).slice(endDate - 6, endDate + 1) :
      this.getUserData(id).slice(0, endDate + 1);
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
    return userIDs.filter(ID =>
      this.getQualityByWeek(ID, date).reduce((a, c) =>
        a + c, 0) / this.getQualityByWeek(ID, date).length >= 3);
  }

  findLongestSleeper(date) {
    let userIDs = [...new Set(this.sleepData.map(object => object.userID))];
    userIDs.sort((a, b) => this.getDayHours(a, date) - this.getDayHours(b, date));
    return userIDs.filter(ID =>
      this.getDayHours(ID, date) === this.getDayHours(userIDs[userIDs.length - 1], date))
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
