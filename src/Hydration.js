class UserHydration {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
  }
  getHydrationData(id) {
    let user = this.dataFilePath.filter(el => el.userID === id);
    return user[0].hydrationData;
  }

  averageDrank(id) {
    let drinkingData = this.getHydrationData(id);
    let ounces = drinkingData.map(el => el.numOunces);
    let average = ounces.reduce((acc, curr) => acc + curr / ounces.length)
    return Math.floor(average)
  }

  getOuncesByDay(id, date) {
    let drinkingData = this.getHydrationData(id);
    let objectByDate = drinkingData.filter(el => el.date.includes(date))
    return objectByDate[0].numOunces;
  }

  getWeeklyOunces(id, date) {
    let drinkingData = this.getHydrationData(id);
    let getDay = drinkingData.find(el => el.date.includes(date));
    let dayIndex = drinkingData.indexOf(getDay)
    let weekOfData = drinkingData.slice(dayIndex, dayIndex + 7);
    console.log(weekOfData.map(el => el.numOunces));
    return weekOfData.map(el => el.numOunces);
  } 
}

module.exports = UserHydration;