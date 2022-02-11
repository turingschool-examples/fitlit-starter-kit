class Sleep {
  constructor(data, userId) {
    this.days = data.filter(day => day.userID === userId);
  }
  getAverage() {
    let result = this.days.reduce((acc, curr) => {
      acc += curr.hoursSlept
      return acc
    }, 0);
    return parseFloat((result / this.days.length).toFixed(1));
  }
}

export default Sleep;
