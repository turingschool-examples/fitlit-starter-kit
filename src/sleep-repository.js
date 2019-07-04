class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData
  }

  returnUserSleepData(id) {
    return this.sleepData.filter(el => el.userID === id);
  }

  returnAverageSleep(id) {
    const found = this.sleepData.filter(el => el.userID === id);
    return found.reduce((acc, total) => acc + total.hoursSlept, 0) / found.length;
  }


  returnAverageSleepForAllUsers() {
    return Math.round(10 * this.sleepData.reduce((acc, total) => acc + total.sleepQuality, 0) / this.sleepData.length) / 10
  }

  returnUserSleepQualityAveOver3(firstDate) {
    let data1 = [...this.sleepData];
    let allIds = data1.filter(el => el.date === firstDate).map(el => el.userID);
    let array1 = allIds.map(el => this.returnUserSleepData(el));
    let array2 = array1.map(el => {
      let index = data1.findIndex(el => el.date === firstDate);
      return data1.splice(index, 7);
    })
    let final = {}
    let array3 = array2.map(el => el.reduce((acc, total) => final[total.userID] = (acc + total.sleepQuality), 0))
    return Object.keys(final).filter(key => final[key] > 21).map(Number);
  }

  returnUserWithMostSleepForDate(firstDate1) {
    let array1 = this.sleepData.filter(el => el.date === firstDate1);
    return array1.reduce((acc, total) => acc.hoursSlept > total.hoursSlept ? acc : total).userID;
  }
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}
