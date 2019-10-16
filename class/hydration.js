class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
  }

  findDailyHydrationAverage(id) {
  	let findUserData = this.hydrationData.filter(element => element.userID === id);
  	let sum =  findUserData.reduce(function (accumulator, currentValue) {
  		accumulator += currentValue.numOunces; 
    return accumulator;
}, 0)
  	return Math.round(sum / findUserData.length);
  }

  findHydrationByDate(date, id) {
  	let findUserData = this.hydrationData.filter(element => element.userID === id);
  	let dailyData = this.hydrationData.find(element => element.date = date);
  	return dailyData.numOunces;
  }

  findWeeklyHydration(id) {
  	let findUserData = this.hydrationData.filter(element => element.userID === id);
  	let weeklyData = findUserData.slice((findUserData.length - 7), findUserData.length)
  	return weeklyData.map((element) => {
        return element.numOunces
      })
 }

 	printDailyHydration(id) {
    return this.findWeeklyHydration(id).map(day => {
      return day
    })
  }

}

module.exports = Hydration;


// npm test test/hydration-test.js