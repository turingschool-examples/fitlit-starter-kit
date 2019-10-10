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
  showSleep(id, date, key, sleepData) {
    let data;
    sleepData.forEach(function(elem) {
      if (elem.userID === id && elem.date === date) {
        data = elem[key];
      }
    });
    return data;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
