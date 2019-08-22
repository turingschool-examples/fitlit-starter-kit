class SleepRepository {
  constructor(data) {
    this.data =  data.map(obj => {
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

  getAvgHoursSleptAllUsers() {
    const total = this.data.reduce((totalHours, user) => totalHours += user.hoursSlept, 0)
    return parseFloat((total / this.data.length).toFixed(1))
  }

  getAvgQualitySleptAllUsers() {
    const total = this.data.reduce((qualitySlept, user) => qualitySlept += user.sleepQuality, 0)
    return parseFloat((total / this.data.length).toFixed(1))
  }

  getWeekOfUsers(dateToday) {
    const newDateFormat = new Date(dateToday)
    const startDate = newDateFormat.getTime();
    const weekOfData = this.data.filter( day => {
      if (day.date >= startDate - 604800000 && day.date <= startDate) {
        return day
      }
    })
    return weekOfData
  }

  createSleepQualityObj(dateToday) {
    return this.getWeekOfUsers(dateToday).reduce( (acc, user) => {
      if (!acc[user.userID]) {
        acc[user.userID] = [user.sleepQuality]
      } else {
        acc[user.userID].push(user.sleepQuality)
      }
      return acc
    }, {})
  }
  findBestSleepers(dateToday) {
    const weekOfUsersFn = this.createSleepQualityObj(dateToday)
    const bestSlepers = [];
    for (let key in weekOfUsersFn) {
      if ((weekOfUsersFn[key].reduce((avgQuality, sleepQuality) => {
        avgQuality += sleepQuality;
        return avgQuality
      }, 0) / weekOfUsersFn[key].length) > 3.1) {
        bestSlepers.push(parseInt(key))
      }
    }
    return bestSlepers
  }
  findTopSleeperByDay(dateToday) {
    const newDateFormat = new Date(dateToday)
    const currentDate = newDateFormat.getTime();
    const sortedSleepers = this.data.filter(day => {
      if (day.date === currentDate) {
        return day
      }
    }).sort((dayA, dayB) => {
      return dayB.hoursSlept - dayA.hoursSlept
    })
    return sortedSleepers.filter(sleeper => {
      if (sleeper.hoursSlept === sortedSleepers[0].hoursSlept) {
        return sleeper;
      }
    })
  }
};



if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}