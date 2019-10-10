class Sleep {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgSleep(id, sleepData) {
    let hoursSlept = 0;
    let days = 0;
    sleepData.forEach(function(elem) {
      if (elem.userID === id) {
        hoursSlept += elem.hoursSlept;
        days++;
      }
    });
    return Math.floor(hoursSlept / days);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
