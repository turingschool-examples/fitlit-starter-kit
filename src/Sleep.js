class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData
  }
  getUserData(id) {
    return this.sleepData.filter(obj => {
      return obj.userID === id
    })
  }g

  calculateAverageHours() {
   
  }
}








if (typeof module !== 'undefined') {
  module.exports = Sleep;
}