
class ActivityRepository {
  constructor(data) {
    this.data = data.map(obj => {
      const date = new Date(obj.date)
      obj.date = date.getTime()
      return obj
    });
  } 

  getUserData(id) {
    return this.data.filter(user => {
      if (user.userID === id) {
        return user;
      }
    })
  }

  changeTimeFormat(date) {
    const newDateFormat = new Date(date)
    return newDateFormat.getTime();
  }

  getAvgActivityStatsAllUsers(date, property) {
    const targetDate = this.changeTimeFormat(date);
    const dataByDate = this.data.filter(day => {
      if(day.date === targetDate) {
        return day;
      }
    })
    return Math.round(dataByDate.reduce((dailyAvg, user) => dailyAvg += user[property], 0) / dataByDate.length)
  }

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}