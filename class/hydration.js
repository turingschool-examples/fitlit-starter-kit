class Hydration {
  constructor(hydrationData) {
    this.hydrationData = hydrationData;
    this.numOunces = hydrationData.numOunces;
    this.weeklyAverageHydo = 0;
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
  	return weeklyData.reduce( (acc, val) => {
        acc += val.numOunces;
        console.log(acc)
      return acc;
    }, 0);
 }

 	printDailyHydration(id) {
    return this.findWeeklyHydration(id).map(day => {
      return day;
    })
  }

}

  module.exports = Hydration;


