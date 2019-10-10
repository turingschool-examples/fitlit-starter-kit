class Sleep {
  constructor(id) {
    this.userID = id;
  }
  calculateAvgSleep(id, key, sleepData) {
    let sleep = 0;
    let days = 0;
    sleepData.forEach(function(elem) {
      if (elem.userID === id) {
        sleep += elem[key];
        days++;
      }
    });
    return Math.round((sleep / days) * 100) / 100;
  }
  showHoursSlept(id, date, sleepData) {
    let hours;
    sleepData.forEach(function(elem) {
      if (elem.userID === id && elem.date === date) {
        hours = elem.hoursSlept;
      }
    });
    return hours;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
