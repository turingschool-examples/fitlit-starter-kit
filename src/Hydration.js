class Hydration {
  constructor(allHydrationData, id) {
    this.allHydrationData = allHydrationData;
    this.currentUserId = id;
    console.log(this.currentUserId)
    this.currentUserData;
    this.today;
 

  }

  findCurrentUserData() {
    this.currentUserData = this.allHydrationData.filter((data) => data.userID === this.currentUserId);
    return this.currentUserData;
  }

  findTodaysDate() {
    this.today = this.currentUserData.pop().date;
    return this.today
  }

  findAverageFluidOzConsumedPerDayForAllTime() {
    let oz = this.currentUserData.reduce((acc, currentDay) => {
      acc += currentDay.numOunces
      return acc
    }, 0) / this.currentUserData.length

    return Math.round(oz)
  }

  findAverageFluidOzConsumedforSpecificDay(dateString) {
    console.log(this.currentUserData)
    return this.currentUserData.find(day => day.date === dateString).numOunces
  }

  findFluidOzConsumedEveryDayOverSpecificWeek(startDate, endDate) {
    return this.currentUserData.filter((day) => {
      if (new Date(day.date) >= new Date(startDate) && new Date(day.date) <= new Date(endDate)) {
        return day
      }
    }).map(day => {
      return {date: day.date, 
        numOunces: day.numOunces}
    });
    
  }


}




if (typeof module !== 'undefined') {
  module.exports = Hydration;
};