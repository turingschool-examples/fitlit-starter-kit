class Sleep {
  constructor(data, id) {
    this.data = data.filter(user => user.userID === id);
    this.id = id;
    }

  returnAllTimeAvgHours() {
  const avgHours = this.data.reduce((acc, day) => {
      return acc += day.hoursSlept;
  }, 0) / this.data.length;
  return avgHours.toFixed(1)
  }

  returnAllTimeAvgQual() {
    const avgQual = this.data.reduce((acc, day) => {
      return acc += day.sleepQuality;
  }, 0) / this.data.length;
  return avgQual.toFixed(1);
  }

  returnDayHours(date) {
    return this.data.find(day => day.date === date).hoursSlept;
  }

  returnDayQual(date) {
    return this.data.find(day => day.date === date).sleepQuality;
  }

  returnWeekHours(date) {
    let index = this.data.findIndex(day => day.date === date);
    return this.data.slice(index-6, index+1)
  }

  returnWorstDay(date) {
    let lastSevenDays = this.returnWeekHours(date).reverse();
    let worstQuality = lastSevenDays.reduce((acc, day) => {
      if(day.sleepQuality < acc) {
        acc = day.sleepQuality
      }
      return acc;
    }, 10);
    return lastSevenDays.find(day => day.sleepQuality === worstQuality);
  }
};


if (typeof module !== 'undefined') {
    module.exports = Sleep;
}

