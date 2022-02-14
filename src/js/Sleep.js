class Sleep {
  constructor(data, userId) {
    this.days = data.filter(day => day.userID === userId);
    this.averageAll = 0;

    data.forEach(day => {
      this.averageAll += day.hoursSlept;
    });

    this.averageAll = parseFloat((this.averageAll/ data.length).toFixed(1));
  }
  getAverage() {
    let result = this.days.reduce((acc, curr) => {
      acc += curr.hoursSlept
      return acc
    }, 0);
    return parseFloat((result / this.days.length).toFixed(1));
  }

  getAverageQuality() {
    let result = this.days.reduce((acc, curr) => {
      acc += curr.sleepQuality;
      return acc;
    }, 0);
    return parseFloat((result / this.days.length).toFixed(1));
  }

  getSleep(date) {
    let result = this.days.find(day => day.date === date).hoursSlept;
    return result;
  }

  getSleepQuality(date) {
    let result = this.days.find(day => day.date === date).sleepQuality;
    return result;
  }

  getWeekSleep(date) {
    let result = {};
    let i = this.days.findIndex(day => day.date === date)
    if (this.days.length - i > 7) {
      result = this.days.slice(i, i + 7);
      result = result.map(day => ({date: day.date, hoursSlept: day.hoursSlept}));
    }
    return result;
  }
  getWeekQuality(date) {
    let result = {};
    let i = this.days.findIndex(day => day.date === date);
    if(this.days.length - i > 7) {
      result = this.days.slice(i, i + 7);
      result = result.map(day => ({date: day.date, sleepQuality: day.sleepQuality}));
    }
    return result;
  }
  getAverageAll() {
    return this.averageAll;
  }
};

export default Sleep;
