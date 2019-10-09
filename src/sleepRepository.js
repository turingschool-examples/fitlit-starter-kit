class SleepRepository {
  constructor(data) {
    this.data = data
    this.currentUser = []
  }

  findUserId(index) {
    this.data.forEach(user => {
      if(user.userID === index) {
        this.currentUser.push(user);
      }
    });
    return this.currentUser
  }

  findAllUserQual() {
    let qual = this.data.reduce((acc, user) => {
      acc += user.sleepQuality
      return acc
    }, 0)
    return (qual / this.data.length).toPrecision(3)
  }

  findAllGoodQual(date) {
    let startIndex = this.data.findIndex(element => element.date === date)
    let endIndex = this.data.lastIndexOf(element => element.date === date)
    let week = this.data.slice(startIndex, (startIndex + 350))
    var goodSleeper = []
    for(let i = 1; i <= 50; i++) {
      let user = week.filter(user => user.userID === i)
      let sum = user.reduce((acc, day) => acc + day.sleepQuality, 0)
      let avg = sum / 7
      if(avg >= 3) {
        goodSleeper.push(i)
      }
    }
    return goodSleeper
  }

  mostSleepDayAll(date) {
    let day = this.data.filter(data => data.date === date)
    day.sort((a,b) => a.hoursSlept - b.hoursSlept)
    let max = day[49].hoursSlept
    return day.filter(data => data.hoursSlept === max)
  }
}

if (typeof module !== 'undefined'){
  module.exports = SleepRepository;
  }