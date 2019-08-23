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

//   getUsersWithGoodSleepQual(date) {
//     let selectedDay = this.userSleep.find(day => {
//       return day.date === date;
//     })
//
//     let indexOfSelectedDay = this.userSleep.indexOf(selectedDay);
//
//     let weekArray = this.userSleep.slice((indexOfSelectedDay - 6), (indexOfSelectedDay + 1))
// console.log('weekArray', weekArray)
//     //need to find average of week
//     // let sleepQualThree = weekArray.filter(user => {
//     //   console.log('user.sleep.getAvgSleepQual()', user.sleep)
//     //   return user.sleep.getAvgSleepQual() >= 3;
//     // })
//
//     // let sleepQualThree = weekArray;
//     }
//
//     // return sleepQualThree;
  }


if (typeof module !== "undefined") {
  module.exports = SleepRepository;
}
