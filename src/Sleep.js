class Sleep {
  constructor(allSleepData, id) {
    this.allSleepData = allSleepData;
    this.currentUserId = id;
    this.currentUserData;
  }

  findCurrentUserData() {
    this.currentUserData = this.allSleepData.filter(user => user.userID === this.currentUserId);
    return this.currentUserData;
  }

  findUserAverageHoursSleptEachDayById() {  
    let user = this.currentUserData.reduce((sum, currentDay) => {
      sum += currentDay.hoursSlept
      return sum
    }, 0) / this.currentUserData.length;
    let avgSleep = parseFloat(user.toFixed(2));
    return avgSleep
  }

  findUserAverageSleepQualityPerDay() {  
    let user = this.currentUserData.reduce((sum, currentDay) => {
      sum += currentDay.sleepQuality
      return sum
    }, 0) / this.currentUserData.length;
    let avgQuality = parseFloat(user.toFixed(2));
    return avgQuality
  }

  findHoursSleptByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.hoursSlept;
  }

  findSleepQualityByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.sleepQuality; 
  }

  findSleepHoursOrQualityEachDayOverWeekForAUser(startDate, endDate, property) {
    let answer = [];
    let week = this.currentUserData.filter(eachDay => {
      if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)) {
        return eachDay
      }
    }).reduce((acc, day) => {
      if (!acc.date) {
        acc.date = day.date
      }
      if (!acc[property]) {
        acc[property] = day[property]
      }
      answer.push(acc)
      return {};
    }, {})
    return answer;
  }

  fetchAverageQualityOfSleepAllUsers() {
    const result = this.allSleepData.reduce((qualitySleep, user) => {
      qualitySleep += user.sleepQuality 
      return qualitySleep;
    }, 0)/this.allSleepData.length
    let avgQuality = parseFloat(result.toFixed(2));
    return avgQuality
  }

  findUsersSleptMostHoursBasedOnDate(dateString) {
    var dateArray = this.allSleepData.filter(element => element.date === dateString);
    return dateArray.sort((a,b) => {
      return b.hoursSlept - a.hoursSlept;
    }).shift()
  }

  findAllUsersOverThreeSleepQualityForWeek(startDate, endDate) {
    let namesID = [];
    let week = this.allSleepData.filter(eachDay => {
      if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)) {
        console.log(eachDay)
        return eachDay;
      }
    })
    let idArray = week.reduce((acc, currentElement) => {
      if(!acc.includes(currentElement.userID)) {
        acc.push(currentElement.userID)
      }
      return acc
    }, [])
    idArray.forEach(id => {
      const filterData = week.filter(day => day.userID === id)
      const avg = filterData.reduce((acc, currentElement) => {
        acc += currentElement.sleepQuality
        return acc
      }, 0) / filterData.length

      if(avg >= 3) {
        namesID.push(id)
      }
    }) 
    return namesID
  }
}









if (typeof module !== 'undefined') {
  module.exports = Sleep;
}