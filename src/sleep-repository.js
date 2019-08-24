class SleepRepository {
  constructor(data) {
    this.userSleep = data;
  }

  getUserSleepInfo(id) {
    return this.userSleep.filter(user => {
      return user.userID === id;
    })
  }

  getUsersAvgSleepQual() {
    let avgQual = this.userSleep.reduce((acc, day) => {
      return acc += day.sleepQuality;
    }, 0)
    return parseFloat((avgQual / this.userSleep.length).toFixed(1));
  }

  getUsersWithGoodSleepQual(date) {
    let selectedDay = this.userSleep.find(day => {
      return day.date === date;
    })

    let indexOfSelectedDay = this.userSleep.indexOf(selectedDay);

    let weekArray = this.userSleep.slice((indexOfSelectedDay - 6 * 5), (indexOfSelectedDay + 5));

    // let sleepQualThree = weekArray.filter(user => {
    //   return user.sleepQuality > 2;
    // })

      return weekArray;
    }

  }


if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}
