
class Sleep {
  constructor(allSleepData, id, allUsers) {
    this.allSleepData = allSleepData;
    this.currentUserId = id;
    this.allUsers = allUsers
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
    console.log(answer)
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
    let userObject = dateArray.sort((a, b) => {

      return b.hoursSlept - a.hoursSlept;
    }).shift()
    var person = this.allUsers.find((user) => user.id === userObject.userID);
    var rightPerson = person.name
    return rightPerson
  }

  findAllUsersOverThreeSleepQualityForWeek(startDate, endDate) {
    let namesID = [];
    let week = this.allSleepData.filter(eachDay => {
      if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)) {
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
    var groupOverThree = namesID.map((num) => {
     return this.allUsers.find((user) => {
      if(num === user.id) {
        return user
      }
    }).name
  });

    return groupOverThree
  
  }
}









if (typeof module !== 'undefined') {
  module.exports = Sleep;
}