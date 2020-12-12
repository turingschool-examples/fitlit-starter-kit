/* eslint-disable max-len */
class UserSleep {
  constructor(sleepData) {
    this.sleepData = sleepData

  }

  mapUserSleep(id) { // single user's sleep data
    return this.sleepData.filter((value) => value.userID === id)
  }

  mapAllUserSleepQuality() { // all users sleep quality
    return this.sleepData.map((value) => value.sleepQuality)
  }

  mapAllUserSleep() { // all users sleep quality including ID
    let userSleepQuality = this.sleepData.map((value) => {
      let allUserSleep = {
        userID: value.userID,
        sleepQuality: value.sleepQuality
      }
      return allUserSleep
    })
    return userSleepQuality
  }

  getOneDayOfData(date, id, keyName) {
    return this.mapUserSleep(id).find((day) => day.date === date)[keyName]
  }

  calculateAvgHoursSlept(allHoursSlept, id) {
    let totalAvgHours = this.mapUserSleep(id)
      .map(totalHours => totalHours.hoursSlept)
      .reduce((avgHours, value) => {
        let totalHours = (avgHours += value);
        return totalHours;
      }, 0);
    return (totalAvgHours = totalAvgHours / this.mapUserSleep(id).length);
  }

  calculateAvgSleepQual(allSleepQual, id) {
    let totalAvgSleepQual = this.mapUserSleep(id)
    .map(totalQuality => totalQuality.sleepQuality)
    .reduce((avgQuality, value) => {
      let totalQuality = (avgQuality += value);
      return totalQuality;
      }, 0);
      console.log(this.mapAllUserSleepQuality(id))
    return (totalAvgSleepQual = totalAvgSleepQual / this.mapUserSleep(id).length);
  }

  calculateAllAvgSleepQual(allSleepQual) {
    let totalAllAvSleepQual = this.mapAllUserSleepQuality().reduce((avgQuality, value) => {
      let totalQuality = (avgQuality += value);
      return totalQuality;
    }, 0);
    return totalAllAvSleepQual = (totalAllAvSleepQual / allSleepQual.sleepData.length);
  }

  calculateSleepItemPerWeek(startDate, id, keyName) {
    const sleepList = this.mapUserSleep(id);
    const findIndex = sleepList.findIndex(day => day.date === startDate);
    const sleepItemPerWeek = sleepList.reduce((total, value) => {
      if (!total[findIndex]) {
        total.push(value[keyName]);
      } else {
        total.push(value[keyName]);
      }
      return total;
    }, []);
    return sleepItemPerWeek.splice([findIndex], 7);
  }

  findGoodSleepers() {
    let allUserSleep = this.mapAllUserSleep().reduce((total, value) => {
      if (!total.includes(value.userID)) {
        if (value.sleepQuality > 3) {
          total.push(value.userID)
        } 
      } return total
    }, [])
    return allUserSleep
  }

  findLongSleepers(date) {
    let answer = this.sleepData.filter((item) => item.date === date).sort((a, b) => b.hoursSlept - a.hoursSlept)
    let newArr = []
    newArr.push(answer[0])
    let i = 1
    if ( newArr[0].hoursSlept === answer[i].hoursSlept ) {
      newArr.push(answer[i])
      i++
    }
    return newArr.map(item => item.userID)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}