class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  getUserData(id) {
    return this.sleepData.filter(obj => {
      return obj.userID === id;
    })
  }
  calculateAverageHours(id) {
    return this.getUserData(id).reduce((acc, object) => {
      return Math.round(acc += object.hoursSlept / this.getUserData(id).length);
    }, 0);
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
    const average = this.sleepData.reduce((acc, object) => {
      return acc += object.sleepQuality / this.sleepData.length;
    }, 0 )
    return average.toFixed(2)
  }
  findGoodSleepers(date) {
    let goodSleepers = []
    let ids = []
    this.sleepData.forEach(obj => {
      if (!ids.includes(obj.userID)) {
        ids.push(obj.userID);
      }
    })
    ids.forEach(id => {
      let endDate = this.getUserData(id).findIndex(object => object.date === date);
      let filteredData = this.getUserData(id).map(day => day.sleepQuality);
      let weeklyNumbers = endDate - 6 >= 0 ?
        filteredData.slice(endDate - 6, endDate + 1) :
        filteredData.slice(0, endDate + 1);
      let average = weeklyNumbers.reduce((acc, num) => {
        return (acc += num / weeklyNumbers.length)
      }, 0)
      if(average >= 3) {
        goodSleepers.push(id)
      }
    })
    return goodSleepers
  }
}






if (typeof module !== 'undefined') {
  module.exports = Sleep;
}