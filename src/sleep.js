class Sleep {
  constructor(obj) {
    this.data = obj;
  }

  getAvgSleepHours(id) {
    let person = this.data;

    let avgHours = person.reduce((acc, day) => {
      return acc += day.hoursSlept;
    }, 0)

    return parseFloat((avgHours / 11).toFixed(1));
  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}
