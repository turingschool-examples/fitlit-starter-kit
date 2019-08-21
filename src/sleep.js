class Sleep {
  constructor(obj) {
    this.data = obj;
  }

  getAvgSleepHours(id) {
    let person = this.data.filter(user => {
      return user.userID === id;
    })
    let hours = person.map(day => {
      return day.hoursSlept;
    })
    let avgHours = hours.reduce((acc, hour) => {
      return acc + hour;
    })
    return parseFloat((avgHours / 11).toFixed(1));
  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
