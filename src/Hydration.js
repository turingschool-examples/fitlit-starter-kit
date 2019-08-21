class Hydration {
  constructor(allHydrationData, id) {
    this.allHydrationData = allHydrationData;
    this.currentUserId = id;
    this.currentUserData;
  }

  findCurrentUserData() {
    this.currentUserData = this.allHydrationData.filter((data) => data.userID === this.currentUserId)
    return this.currentUserData;
  }

  findAverageFluidOzConsumedPerDayForAllTime() {
    let oz = this.currentUserData.reduce((acc, currentDay) => {
      acc += currentDay.numOunces
      return acc
    }, 0) / this.currentUserData.length

    return Math.round(oz)
  }

  findAverageFluidOzConsumedforSpecificDay(dateString) {
    return this.currentUserData.find(day => day.date === dateString).numOunces
  }

  findFluidOzConsumedEveryDayOverSpecificWeek(startDate, endDate) {
    let week = this.currentUserData.filter((day) => {
      if (new Date(day.date) >= new Date(startDate) && new Date(day.date) <= new Date(endDate)) {
        return day
      }
    }).map(day => {
      return {date: day.date, 
        numOunces: day.numOunces}
    });
    return week
  }


}












module.exports = Hydration;

if (typeof module !== 'undefined') {
  module.exports = Hydration;
};